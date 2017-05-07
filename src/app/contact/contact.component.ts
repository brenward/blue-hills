import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat: number = 53.3929590;
  lng: number =  -6.3903482;

  constructor() { }

  ngOnInit() {
  }

}
