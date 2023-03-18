import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties: Array<any> =[
    {
    "Id": 1,
    "Name": "Birla House",
    "Type": "House",
    "Price":1200,

  },
  {
    "Id": 2,
    "Name": "Erose Villa",
    "Type": "House",
    "Price":1300,

  },
  {
    "Id": 3,
    "Name": "Oni white House",
    "Type": "House",
    "Price":1800,

  },
  {
    "Id": 4,
    "Name": "Oye Villa",
    "Type": "House",
    "Price":2200,

  },
  {
    "Id": 5,
    "Name": "Pearl Villa",
    "Type": "House",
    "Price":2400,

  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
