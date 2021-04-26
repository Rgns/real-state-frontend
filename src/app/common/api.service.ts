import {Inject, Injectable, Injector} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {MethodType} from './method-type.enum';
import {Observable} from 'rxjs';
import {ApiConstant} from './api.constant';
import {SimpleMap} from './simple-map.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected http: HttpClient;

  constructor(@Inject(Injector) protected injector: Injector) {
    this.http = this.injector.get(HttpClient);
  }

  protected resolveHttp(requestMethod: MethodType,
                        url: string,
                        urlOptions?: SimpleMap<string>,
                        body?: any,
                        headerParams?: SimpleMap<string>,
                        requestParams?: SimpleMap<any>): Observable<any> {

    // @ts-ignore
    const headers: HttpHeaders = new HttpHeaders(headerParams);

    switch (requestMethod) {
      case('GET'):
        return this.http.get(this.resolveUrl(url, urlOptions), {
          headers,
          params: requestParams,
        });
      case('POST'):
        return this.http.post(this.resolveUrl(url, urlOptions), body, {
          headers,
          params: requestParams,
        });
      case('PUT'):
        return this.http.put(this.resolveUrl(url, urlOptions), body, {
          headers,
          params: requestParams,
        });
      case('DELETE'):
        return this.http.delete(this.resolveUrl(url, urlOptions), {
          headers,
          params: requestParams,
        });
      default:
        break;
    }
  }


  resolveUrl(apiUrl: string, options): string {
    let url = ApiConstant.getBaseUrl() + apiUrl;
    if (options) {
      // tslint:disable-next-line:forin
      for (const key in options) {
        url = url.replace('{' + key + '}', options[key]);
      }
    }
    return url;
  }


}
