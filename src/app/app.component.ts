import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 
  hide = true;
  Certificate:boolean=false;
  User:boolean=true;
  IsDisabledUA:boolean=true;
 
  selecteditemUA:string="anonymous";
  onChangeUA(event)
  {
   
    if(this.selecteditemUA=="username")
    {
      this.Certificate=true;
    this.User=false;
  this.IsDisabledUA=false;
  }
  else if(this.selecteditemUA=="certificate")
  {
    this.Certificate=false;
    this.User=true;
  this.IsDisabledUA=false;
  }else{
    this.IsDisabledUA=true;
    this.Certificate=false;
    this.User=true;
  }

  }
}
