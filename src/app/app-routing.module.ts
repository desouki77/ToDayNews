import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { HeaderComponent } from './header/header.component';
import { HealthNewsComponent } from './health-news/health-news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ScienceNewsComponent } from './science-news/science-news.component';

import { SportsNewsComponent } from './sports-news/sports-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';

const routes: Routes = [
{path:'',component:HeaderComponent}, // Home ( Top News )
{path:'tech',component:TechNewsComponent}, // Tech News
{path:'business',component:BusinessNewsComponent}, // Business News
{path: 'sports',component:SportsNewsComponent}, // Sports News
{path:'health',component:HealthNewsComponent},
{path: 'science',component:ScienceNewsComponent},
{path:'**',component:PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
