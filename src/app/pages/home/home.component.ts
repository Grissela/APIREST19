import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicepokemonsService } from 'src/app/services/servicepokemons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:any[]=[];
  pokemons = [];
  nombre!:string;

  constructor(private router:Router,private route:ActivatedRoute ,private Pokedex:ServicepokemonsService) {
   }
  ngOnInit(): void {
    this.mostrarpokemons();
    console.log(this.Pokedex);
  }
  
  mostrarpokemons(){
    let pokemonInfo;

    for(let i = 1; i < 150; i++){

      this.Pokedex.getPokemon(String(i)).subscribe(
        res => {
          pokemonInfo = {
            position: i,
            image: res.sprites.front_default,
            name: res.name,
            orden: res.order
          }
          this.data.push(pokemonInfo)
          // para ordenar de forma ascendente de A - Z
           this.data.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })
           console.log(this.data);
        },
        err => {
        }
      )
    }
  }

  buscar(n:string){
    this.router.navigate(['/descripcion', n.toUpperCase()])/*Transforma cualquier texto a todo mayuscula*/ 
  }
}
