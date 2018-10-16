import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { Ad } from '../../model/ad.model';
import {HashgraphAdService} from '../../service/hashgraph-ad.service';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-ad-control',
  templateUrl: './ad-control.component.html',
  styleUrls: ['./ad-control.component.css']
})
export class AdControlComponent implements OnInit {
    public adImage: any;
    public adModel: Ad;

    constructor(private _adService: HashgraphAdService, private sanitizer: DomSanitizer) { }

    ngOnInit() {

        this.getNextAd();

    }

  getNextAd() {

      this._adService.getNextAd().subscribe(
          data => { this.adModel = Ad.asAd(data)},
          err => console.error(err),
          () => {
              console.log('Done loading ad')
          }
      );

  }

trackAd(id:number){

  this._adService.trackAd(id).subscribe(
      data => { },
      err => console.error(err),
      () => {

        console.log('Redirecting');
        window.location.href = 'www.youtube.com';

      }
  );
}

public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustHtml(url);
}


}
