import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HelperService } from './helper.service';

const helper = new HelperService();

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  /**
   * This is the base URL for the API.
   */
  private _api_uri: string = helper._apis.backend.url;

  constructor(private http: HttpClient) {}

  /**
   * This function handles the errors that are thrown by the server.
   *    *
   * @param data
   * @param url
   */
  handleErrors(data: any, url: string = '') {
    if (data && data.hasOwnProperty('status')) {
      console.log('Response Status:', data.status);
    }

    switch (data.status) {
      case 200:
        console.log('Response Status:', data.status);
        break;

      case 201:
        console.log('Response Status:', data.status);
        break;

      case 400:
        throw new Error('Bad Request');

      case 401:
        throw new Error('Unauthorized');

      case 403:
        throw new Error('Forbidden');

      case 404:
        throw new Error('Not Found');

      case 500:
        throw new Error('Internal Server Error');
    }
  }

  /**
   * This function sets the base URL for the Request.
   *
   * @param uri
   */
  setApiUri(uri: string) {
    this._api_uri = uri;
  }

  /**
   * This function logs data to the console.
   *
   * @param data
   */
  _log(data: any) {
    console.log(data);
  }

  /**
   * This function sends a POST request to the server.
   * URL in use is: http://localhost:3000/api + url
   *
   * @param url
   * @param body
   * @returns
   */
  async POST(url: string, body: any = {}, headers?: HttpHeaders) {
    try {
      let requestHeaders = new HttpHeaders();

      // Setzen Sie die übergebenen Header, falls vorhanden
      if (headers) {
        headers.keys().forEach((key) => {
          requestHeaders = requestHeaders.set(key, headers.get(key)!);
        });
      }

      // Führen Sie den POST-Request mit den gesetzten Headern durch
      const data: any = await this.http
        .post(this._api_uri + url, body, { headers: requestHeaders })
        .toPromise();

      this._log(this._api_uri + url);

      return data;
    } catch (error) {
      return error;
    }
  }

  /**
   * This function sends a GET request to the server.
   * URL in use is: http://localhost:3000/api + url
   *
   * @param url
   * @returns
   */
  async GET(url: string, body: any = {}) {
    try {
      /*
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
      const data: any = await this.http.get(this._api_uri + url, { headers }).toPromise();
      */

      const data: any = await this.http
        .get(this._api_uri + url, body)
        .toPromise();

      this._log(this._api_uri + url);

      return data;
    } catch (error) {
      return error;
    }
  }

  /**
   * This function sends a PUT request to the server.
   * URL in use is: http://localhost:3000/api + url
   *
   * @param url
   * @param body
   * @returns
   */
  async PUT(url: string, body: any = {}) {
    try {
      /*
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
      const data: any = await this.http.put(this._api_uri + url, body, { headers }).toPromise();
      */

      const data: any = await this.http
        .put(this._api_uri + url, body)
        .toPromise();

      this._log(this._api_uri + url);

      return data;
    } catch (error) {
      return error;
    }
  }

  /**
   * This function sends a DELETE request to the server.
   * URL in use is: http://localhost:3000/api + url
   *
   * @param url
   * @returns
   */
  async DELETE(url: string, body: any = {}) {
    try {
      /*
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
      const data: any = await this.http.delete(this._api_uri + url, { headers }).toPromise();
      */

      const data: any = await this.http
        .delete(this._api_uri + url, body)
        .toPromise();

      this._log(this._api_uri + url);

      return data;
    } catch (error) {
      return error;
    }
  }
}