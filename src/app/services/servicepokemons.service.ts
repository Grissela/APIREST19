import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
  
})
export class ServicepokemonsService {
url='https://pokeapi.co/api/v2'

  constructor(private http:HttpClient) {
   }

  //  mostrarpokemon(index:string): Observable<string[]>{
  //   // return this.http.get<any>(this.url);
  //   return this.http.get<any>(`${this.url}/pokemon/${index}`);
  //  }
  getPokemon(index: string){
    return this.http.get<any>(`${this.url}/pokemon/${index}`);
  }
}
