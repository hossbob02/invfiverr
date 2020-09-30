import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataDisplay={
    tableUser:'',
    tableWorker:'none'
  }
  constructor() { }

  ngOnInit(): void {
  }
  listuser(){
    this.dataDisplay.tableUser=''
    this.dataDisplay.tableWorker='none'
  }
  listworker(){
    this.dataDisplay.tableUser='none'
    this.dataDisplay.tableWorker=""
  }
}
