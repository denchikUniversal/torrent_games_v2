import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  //gameUrl ="https://my-json-server.typicode.com/denchikUniversal/json-faker-directory/games/";
  gameUrl = "http://localhost:3000/games/";

  getGames() {
    return this.http.get(this.gameUrl);
  }

  getGame(gameId) {
    return this.http.get(this.gameUrl + gameId);
  }
}