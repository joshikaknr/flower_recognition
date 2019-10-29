import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

 /*  name:any ='Josh';
  place:any = 'Sweden';
  @Input() title:any;
  abc:any;
  disableButton:boolean = true;
  constructor() { 
    setTimeout(()=>{
this.disableButton=false;
    },5000);
  } */

  ngOnInit() {
    // console.log(this.abc);
  }
/* 
  onClick(){
    this.name='';
    this.place='';
  }
  nameChange(event){
    this.name=event;
  } */

}
