import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('app-search').foundation();
  }

}
