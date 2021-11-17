import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JenkinsHome } from "../data/jenkins.home"
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JenkinsApiService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }
  
  getJenkinsHomeApi(): Observable<JenkinsHome> {

    var jenkinsHomeUrl = this.url + "api/json?pretty=true";

    return this.http.get<JenkinsHome>(jenkinsHomeUrl);

  }

}
