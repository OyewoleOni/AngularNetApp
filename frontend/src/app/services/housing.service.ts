import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{map} from 'rxjs/operators'
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http: HttpClient) { }

getAllProperties(SellRent: number): Observable<IProperty[]> {
  return  this.http.get<IProperty[]>('data/properties.json').pipe(
    map(data => {
      const propertiesArray: Array<IProperty> = [];
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if(element.SellRent === SellRent){
          propertiesArray.push(element)
        }

      }
      return propertiesArray;
    })
  )
}

}
