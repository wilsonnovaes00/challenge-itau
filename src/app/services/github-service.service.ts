import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GitHubData } from '../models/github-model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/delay';

const URL_BASE =  'https://api.github.com/users/';



@Injectable()
export class GithubServiceService {
  constructor(private http: Http) { }

  searchUser(user: string): Observable<GitHubData> {

    return this.http.get(`${URL_BASE}${user}`)
    .map(response => response.json() as GitHubData);
  }

}
