/// <reference path="service/hashgraph-ad.service.ts" />
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdControlComponent } from './pages/ad-control/ad-control.component';

import {HashgraphAdService} from './service/hashgraph-ad.service';


@NgModule({
  declarations: [
    AppComponent,
    AdControlComponent
  ],
  imports: [
      BrowserModule,
      // import HttpClientModule after BrowserModule.
      HttpClientModule
  ],
  providers: [HashgraphAdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
