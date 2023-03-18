import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http: HttpClient) { }

getAllProperties(): Observable<IProperty[]> {
  return  this.http.get<IProperty[]>('data/properties.json');
}

}
