import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HebergementService {
  //Service web qui affiche la liste des hebergements
  readonly API_URL ='http://localhost:8080/listHebergement'
  readonly ENDPOINT_HEBERGEMENTS = "/listHebergement"
  constructor(private http : HttpClient) { }

  //getRessources()
  public getHebergements()
  {
        return this.http.get<any>('http://localhost:8080/listHebergement');
  }
 
 
}
