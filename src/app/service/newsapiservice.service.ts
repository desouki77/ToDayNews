import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http:HttpClient) {}

  //news Api Url 
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=eg&apiKey=63c11430eb914ba6bb166b78fd0758e1";
  
  //technewsapiurl
  techNewsUrl = "https://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=63c11430eb914ba6bb166b78fd0758e1";

  //businessnewsapiurl
  businessNewsUrl = "https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=63c11430eb914ba6bb166b78fd0758e1";

  //sportsnewsapiurl
  sportsnewsurl = "https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=63c11430eb914ba6bb166b78fd0758e1";

  //healthnewsapiurl
  healthNewsUrl = "https://newsapi.org/v2/top-headlines?country=eg&category=health&apiKey=63c11430eb914ba6bb166b78fd0758e1";

  //sciencenewsapiurl
  scienceNewsUrl = "https://newsapi.org/v2/top-headlines?country=eg&category=science&apiKey=63c11430eb914ba6bb166b78fd0758e1";
  
  
  //header()
  header():Observable<any> 
  {
      return this._http.get(this.newsApiUrl)
  }
  
  //techNews()
  techNews():Observable<any>
  {
    return this._http.get(this.techNewsUrl);
  }  
  
  //businessNews()
  businessNews():Observable<any>
  {
    return this._http.get(this.businessNewsUrl);
  }

  //sportsNews()
  sportsNews():Observable<any>
  {
    return this._http.get(this.sportsnewsurl);
  }

  healthNews():Observable<any>
  {
    return this._http.get(this.healthNewsUrl);
  }

  scienceNews():Observable<any>
  {
    return this._http.get(this.scienceNewsUrl);
  }
  
}
