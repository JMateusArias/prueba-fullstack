import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http : HttpClient) { }

  getPlayers(): Observable<any>{
    return this.http.get(`${environment.apiUrl}/players`)
  }
}
