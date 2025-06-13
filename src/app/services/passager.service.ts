import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IVolDto, Vol } from './../models/vol.model';
import { IPassagerDto, Passager } from '../models/passager.model';

@Injectable({
  providedIn: 'root'
})
export class PassagerService {

  constructor(private http: HttpClient) { }

  
  getPassagers(icao: string): Observable<Passager[]> {
    const link = `https://randomuser.me/api/?results=20&inc=name,picture,email&seed=${icao}`
    return this.http.get<any>(link).pipe(
        map((response) => response.results
            .map((dto: IPassagerDto) => new Passager(dto))
        ));

}
}
