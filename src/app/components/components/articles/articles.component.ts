import { Component, OnInit } from '@angular/core';
import {articleList} from './articles';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  
  public voteCount:number = 0;
  public gCount:number = 0;
  public fCount:number = 0;
  public lCount:number = 0;
  public aCount:number = 0;
  public link:string;
  public listOfValue = [new articleList('Google', 'www.google.com', this.voteCount),
  new articleList('facebook', 'www.facebook.com', this.voteCount),
  new articleList('linkedIn', 'www.linkedin.com', this.voteCount)];
  public parentMessage:string = "Hello";
   public myArtiles: any;
 
  constructor(firstService :FirstService) {
    this.myArtiles = firstService.getNames();
    console.log('this.myArtiles  :'+this.myArtiles.brandNames[0].name);
    this.gCount = <number>this.myArtiles.brandNames[0].votes; 
    this.fCount = <number>this.myArtiles.brandNames[1].votes; 
    this.lCount = <number>this.myArtiles.brandNames[2].votes; 
    this.aCount = <number>this.myArtiles.brandNames[3].votes; 
   }
   
  
  ngOnInit() { 
  }
  countVotes(i:number){
    // {{debugger}}
    //this.listOfValue[i].votes = this.listOfValue[i].votes+1;
     //console.log(this.voteCount);
    console.log(this.listOfValue[i]);
    if(i == 0){
    this.gCount++;
    }
    if(i == 1){
    this.fCount++;
    }
    if(i == 2 ){
    this.lCount++;
    }
    if(i == 3 ){
      this.aCount++;
      }
    
  }

  gotoUrl(index:number){
    this.link = this.myArtiles.brandNames[index].URL;
    console.log('this.link  :'+this.link);
    // window.location.href = 'https://stackoverflow.com/questions/34338440/how-to-redirect-to-an-external-url-in-angular2';
    window.open(this.link, '_blank')
  }
  
}
