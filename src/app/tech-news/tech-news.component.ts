import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service'
@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) {}

   technewsDisplay:any = [];

  ngOnInit(): void {

    this._services.techNews().subscribe(resuult => {
      this.technewsDisplay=resuult.articles;


    });
  }

}
