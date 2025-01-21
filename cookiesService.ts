import Cookies from 'js-cookie';

// Typ dla opcji ciasteczka
interface CookieOptions {
  expires?: number; // Liczba dni
  path?: string;    // Ścieżka
  secure?: boolean; // Czy używać HTTPS
}

// Funkcja zapisu ciasteczka
export const setCookie = (name: string, value: string, options?: CookieOptions): void => {
  Cookies.set(name, value, options);
};

// Funkcja odczytu ciasteczka
export const getCookie = (name: string): string | undefined => {
  return Cookies.get(name);
};

// Funkcja usuwania ciasteczka
export const removeCookie = (name: string): void => {
  Cookies.remove(name);
};
