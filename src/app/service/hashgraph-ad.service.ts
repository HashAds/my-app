

import { Injectable } from '@angular/core';
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
//import {Observable} from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';

import { Ad } from '../model/ad.model';


const httpOptions = new HttpHeaders({
     'Content-Type' : 'application/json',
     'Cache-Control': 'no-cache'
});


@Injectable()
export class HashgraphAdService {



    private _liveUrl = "http://172.30.129.30:8080/ads/ad";//"http://172.30.128.68:8080/";// //172.30.129.30
    //65.90.149.225
    private _controllorHashgraphAd = "";


    constructor(private _http: HttpClient) { }

    getNextAd() {

        var controllorMethodName = "ads/ad/";

        var urllocation = this._liveUrl; //+ controllorMethodName;


        return this._http.get(urllocation);

    }



    trackAd(adId:number) {



      var url ="http://172.30.129.30:8080/ads/trackview/" ;

      return this._http.post(url, adId, httpOptions);

    }




}
