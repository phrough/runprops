import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-name',
  templateUrl: './job-name.component.html',
  styleUrls: ['./job-name.component.scss']
})
export class JobNameComponent implements OnInit {

  job: any;

  constructor() { }

  ngOnInit() {
  }

}
