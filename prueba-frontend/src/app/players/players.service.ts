import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/players`)
  }

  findPlayer(name): Observable<any> {
    return this.http.get(`${environment.apiUrl}/players/${name}`)
  }

  getPlayerById(id): Observable<any> {
    return this.http.get(`${environment.apiUrl}/players/id/${id}`)
  }

  updatePlayer(id, data): Observable<any>{
    return this.http.post(`${environment.apiUrl}/players/${id}`, data)
  }

}
