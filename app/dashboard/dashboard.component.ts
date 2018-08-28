import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as $ from 'jquery';
declare var ol: any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    img: boolean;
    image: boolean = true;
    data: HTMLInputElement;
  

 @ViewChild("mapElement") mapElement: ElementRef;

    public map: any;
       username: string;
       ol: any;
    constructor(private router: Router){}




  ngOnInit() {

this.username = localStorage.getItem("username");

 
  }

  

  logout()
  {
    this.router.navigate(['']);
  }
  
  
 
}
