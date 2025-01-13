import axios, {AxiosError, AxiosRequestConfig} from 'axios'
import Emitter from 'tiny-emitter/instance'
import {baseUrl} from 'src/utils/baseUrl';
import {useTokenService} from 'src/services/TokenService';

class UnknownError extends Error {
  constructor(message: string, public code: number, public data: object) {
    super(message);
  }
}

type RequestOptions = Partial<{ isAuthErrorSuppressed: boolean, isNotFoundErrorSuppressed: boolean, hasNoMessage: boolean }>;
type RequestParams = AxiosRequestConfig['params'];


export function useHttpService() {
  const tokenService = useTokenService();

  function getRQ(url: string, params: AxiosRequestConfig['params'] = {}, options: RequestOptions = {}) {
    return axios.get(`${baseUrl}/${url}`, {params, headers: getHeaders()}).then(
      response => response.data,
      error => handleErrors(error, options),
    );
  }

  async function postFileRQ(url: string, data: string | Blob) {
    const formData = new FormData();
    formData.append('file', data);
    const res = await fetch(`${baseUrl}/${url}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Authorization': tokenService.getToken() || ''
      },
      body: formData
    });
    return res.json();
  }

  function postRQ<T extends object>(url: string, data: T, params: RequestParams = {}, options: RequestOptions = {}) {
    return axios
      .post(`${baseUrl}/${url}`, data, {
        params,
        headers: getHeaders(),
      })
      .then(
        response => {
          if (!options.hasNoMessage) {
            Emitter.emit('server-success', 'Operacja wykonana pomyślnie.');
          }
          return response.data;
        },
        error => handleErrors(error, options),
      );
  }

  function putRQ<T extends object>(url: string, data: T, params: RequestParams = {}, options: RequestOptions = {}) {
    return axios
      .put(`${baseUrl}/${url}`, data, {
        params,
        headers: getHeaders(),
      })
      .then(
        response => {
          if (!options.hasNoMessage) {
            Emitter.emit('server-success', 'Pomyślnie dokonano zmian.');
          }
          return response.data;
        },
        error => handleErrors(error, options),
      );
  }

  function deleteRQ(url: string, params: RequestParams = {}, options: RequestOptions = {}) {
    return axios
      .delete(`${baseUrl}/${url}`, {
        params,
        headers: getHeaders(),
      })
      .then(
        response => {
          if (!options.hasNoMessage) {
            Emitter.emit('server-success', 'Pomyślnie usunięto element.');
          }
          return response.data;
        },
        error => handleErrors(error, options),
      );
  }

  function handleErrors(error: unknown | AxiosError, options: RequestOptions) {
    if (typeof error !== 'object' || error === null) {
      throw {code: 0, data: {}}
    }

    if (!isAxiosError(error)) {
      emitErrorEvent(0, options)
      throw new UnknownError('unknown error', 0, {})
    }

    if (error.response?.status === 401 && !options?.isAuthErrorSuppressed) {
      tokenService.removeToken();
      document.location.href = '/';
    } else {
      emitErrorEvent(error.response?.status, options)
    }

    throw error.response;
  }

  function emitErrorEvent(status: number | undefined, options: RequestOptions) {
    if (status === 401 && options?.isAuthErrorSuppressed) {
      Emitter.emit('server-error', 'Wystąpił błąd autoryzacji. Zaloguj się ponownie.');
    }

    if (status === 404 && !options?.isNotFoundErrorSuppressed) {
      Emitter.emit('server-error', 'Błąd serwera: 404 nie znaleziono.');
    }

    if (status === 403 && !options?.isNotFoundErrorSuppressed) {
      Emitter.emit('server-error', 'Brak uprawnień do wykonania akcji.');
    }

    if (status === 400) {
      Emitter.emit('server-error', 'Błąd: Wysłano niepoprawne dane');
    }

    if (status !== 404 && status !== 401 && status !== 403 && status !== 400) {
      Emitter.emit('server-error', `Wystąpił błąd serwera (kod: ${status}).`);
    }
  }

  function getHeaders(contentType = 'application/json') {

    const headers: Record<string, string> = {
      'Content-Type': contentType,
    };


    const token = tokenService.getToken();

    if (token) {
      headers['Authorization'] = token;
    }

    return headers;
  }

  return {
    get: getRQ,
    postFile: postFileRQ,
    post: postRQ,
    put: putRQ,
    delete: deleteRQ
  }
}

const isAxiosError = (err: object): err is AxiosError => (err as AxiosError).isAxiosError;

export const httpService = useHttpService()
