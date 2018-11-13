import {Component, OnInit} from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Psicquic portal';

  constructor() { }

  ngOnInit() {
    this.initFoundation();
    console.log('The component is initialized.');
  }

  private initFoundation(): void {
    $(document).foundation();
    $(document).foundationExtendEBI();
  }
}
