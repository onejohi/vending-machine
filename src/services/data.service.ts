import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class DataService {

  constructor(public http: Http) { }

  getVendorItems() {
    return this.http.get('./assets/items.json').map(res => res.json())
  }

}
