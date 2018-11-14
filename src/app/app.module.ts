import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { AdvancedSearchComponent } from './search/advanced-search/advanced-search.component';
import { QueryBuilderModule } from 'angular2-query-builder';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    AdvancedSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    QueryBuilderModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
