import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {HttpClientModule} from '@angular/common/http' 
import {NewsapiserviceService} from './service/newsapiservice.service';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component'
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { HealthNewsComponent } from './health-news/health-news.component';
import { ScienceNewsComponent } from './science-news/science-news.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TechNewsComponent,
    BusinessNewsComponent,
    PageNotFoundComponent,
    SportsNewsComponent,
    HealthNewsComponent,
    ScienceNewsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewsapiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
