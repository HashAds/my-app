export class Ad {
   public adId: number;
    public img: any;
    public adText: string;
    public url: string;
    public imgUrl:string;



static asAd(json:any){

var ad = new Ad();

if( json != null)
{
  ad.adId = json["adId"];
   ad.img= json["img"];
   ad.adText= json["adText"];
   ad.url= json["url"];
   ad.imgUrl = json["imgUrl"];
 }
   return ad;

}
}
