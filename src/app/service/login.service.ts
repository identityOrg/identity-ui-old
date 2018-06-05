import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../model/profile';
import {Token} from '../model/token';
import {tap} from 'rxjs/operators';

@Injectable()
export class LoginService {

  error: string;
  errorDescription: string;

  constructor(private _http: HttpClient) {
  }

  redirectForLogin() {
    const query = {};
    Object.assign(query, {client_id: environment.oauth.client_id});
    Object.assign(query, {scope: environment.oauth.scope.join(' ')});
    Object.assign(query, {response_type: environment.oauth.response_type});
    Object.assign(query, {state: this.getState()});
    Object.assign(query, {redirect_uri: environment.oauth.redirectUri});
    const queryParam = this.serialize(query);
    window.location.href = environment.oauth.authUrl + '?' + queryParam;
  }

  isLoggedIn() {
    return this.getToken() != null;
  }

  getToken(): Token {
    const tokenString = sessionStorage.getItem('token');
    if (tokenString) {
      return JSON.parse(tokenString);
    } else {
      return null;
    }
  }

  getProfile(): Profile {
    const profileString = sessionStorage.getItem('profile');
    if (profileString) {
      return JSON.parse(profileString);
    } else {
      return {} as Profile;
    }
  }

  setProfile(profile: Profile) {
    sessionStorage.setItem('profile', JSON.stringify(profile));
    return profile;
  }

  setToken(token: Token) {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  login(response: string): Observable<Profile> {
    const respObj = this.parseUrlParam(response);
    if (respObj.error) {
      this.error = respObj.error;
      this.errorDescription = respObj.error_description;
      return throwError('login failed');
    } else {
      this.setToken(respObj);
      return this._http.get<Profile>(environment.oauth.profileUrl, {headers: this.getSecurityHeader()})
        .pipe(
          tap(profile => {
            this.setProfile(profile);
          })
        );
    }
  }

  logout() {
    console.log('Logging out');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('profile');
  }

  serialize(obj: any) {
    const str = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }
    return str.join('&');
  }

  private getState() {
    return Math.random().toString(36).substring(7);
  }

  private parseUrlParam(search) {
    const hashes = search.slice(search.indexOf('?') + 1).split('&');
    return hashes.reduce((params, hash) => {
      const [key, val] = hash.split('=');
      return Object.assign(params, {[key]: decodeURIComponent(val)});
    }, {});
  }

  getSecurityHeader() {
    const token = this.getToken();
    return {Authorization: 'Bearer ' + token.access_token};
  }
}
