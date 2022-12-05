import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class AdministrateurService {
  //Service web qui affiche la liste des administrateurs
readonly API_URL ='http://localhost:8080/list';
constructor(private http : HttpClient) { }


public getAdmin()
{
      return this.http.get<any>(this.API_URL);
}

}
