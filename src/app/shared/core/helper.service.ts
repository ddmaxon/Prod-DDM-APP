import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  /**
   * All APIs with URL and info
   */
  _apis: any = {
    backend: {
      url: 'https://localhost:7022/api',
    }
  };

  /**
   * This function is used to sleep the execution of the code for a given time
   *
   * @param ms
   * @returns
   */
  sleep(ms: number) {
    new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * This function checks if we in the Browser
   */
  isBrowser() {
    return typeof window !== 'undefined';
  }

  /**
   * This function is used to check if all APIs are online and available
   *
   * @param reqHandler
   * @returns boolean (false = not available)
   */
  checkAPIs(reqHandler: any) {
    // let allGood: boolean = true;

    // (
    //   Object.keys(_helper.jmrs_apis) as (keyof typeof _helper.jmrs_apis)[]
    // ).forEach(async (key, index) => {
    //   if (
    //     !await _helper.isUrlAvailable(
    //       _helper.jmrs_apis[key].testurl,
    //       _helper.jmrs_apis[key].expectedResponse,
    //       reqHandler
    //     )
    //   ) {
    //     allGood = false;
    //   }
    // });

    return false /* allGood */;
  }

  /**
   * This function is used to make test requests to an URL
   *
   * @param url
   * @return boolean
   */
  async isUrlAvailable(url: string, expectedResponse: string, reqHandler: any) {
    try {
      const data = await reqHandler.GET(url);

      reqHandler.handleErrors(data);

      if (data !== expectedResponse) {
        return false;
      }

      return true;
    } catch {}

    return false;
  }

  /**
   * This function is used to log usefull stuff to the console
   *
   * @param msg
   * @param type
   */
  _l(msg: string, color: string = '#bada55') {
    if (this.isDevMode()) {
      console.log(`%c${msg}`, `background: #222; color: ${color}`);
    }
  }

  /**
   * Toggle DevMode
   *
   * @returns boolean
   */
  toggleDevMode() {
    if (this.localStorage.getItem('devmode') === 'true') {
      this.localStorage.setItem('devmode', 'false');
      return false;
    }

    this.localStorage.setItem('devmode', 'true');
    return true;
  }

  /**
   * Check if DevMode is enabled
   *
   * @returns boolean
   */
  isDevMode() {
    return this.localStorage.getItem('devmode') === 'true' ? true : false;
  }

  /**
   * This function is used to set all LocalStorage functions
   */
  localStorage: any = {
    /**
     * This function is used to check if the LocalStorage is available
     *
     * @returns boolean
     */
    isAvailable: () => {
      return typeof Storage !== 'undefined';
    },

    /**
     * This function is used to set an item in the LocalStorage
     *
     * @param key
     * @param value
     */
    setItem: (key: string, value: string) => {
      if (this.localStorage.isAvailable()) localStorage.setItem(key, value);
    },

    /**
     * This function is used to get an item from the LocalStorage
     *
     * @param key
     *
     * @returns string
     */
    getItem: (key: string) => {
      if (this.localStorage.isAvailable()) return localStorage.getItem(key);
      return 'Item with key ' + key + ' does not exists!';
    },

    /**
     * This function is used to remove an item from the LocalStorage
     *
     * @param key
     */
    removeItem: (key: string) => {
      if (this.localStorage.isAvailable()) localStorage.removeItem(key);
    },

    /**
     * This function is used to clear the LocalStorage
     *
     */
    clear: () => {
      if (this.localStorage.isAvailable()) localStorage.clear();
    },
  };

  /**
   * This function is used to redirect the webpage
   *
   * @param router
   * @param route
   */
  async redirectTo(router: any, route: string) {
    if (this.isBrowser()) {
      await router.navigate(['items'], { relativeTo: route });;
    }
  }

  /**
   * This function is used to get the baserout of an url error?errortitle=NewTitle  =>  error
   *
   * @param url
   * @return base rout of url
   */
  getBaseRout(url: string) {
    // remove all params error/systemerror?errortitle=NewTitle  =>  error/systemerror
    url = url.split('?')[0];

    // remove all params error/systemerror  =>  error
    url = url.split('/')[0];

    return url;
  }

  /**
   * This function is used to get a Parameter in the URL
   *
   * @param term
   * @returns
   */
  async searchHeroes(term: string, route: ActivatedRoute) {
    let result = '';

    route.queryParams.subscribe((params) => {
      result = params[term];
    });

    return result;
  }
}
