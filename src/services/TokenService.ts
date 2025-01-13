
export interface TokenService {
  getToken(): string | null;
  saveToken(token: string): void;
  removeToken(): void;
}

class TokenServiceImp implements TokenService{
  storageKey = 'auth_token';
  getToken() {
    try {
      return localStorage?.getItem(this.storageKey);
    } catch (e) {
      return null;
    }
  }
  saveToken(token: string) {
    localStorage?.setItem(this.storageKey, token);
  }
  removeToken() {
    localStorage?.removeItem(this.storageKey);
  }
}

export const tokenService: TokenService = new TokenServiceImp();
export const useTokenService = () => new TokenServiceImp();
