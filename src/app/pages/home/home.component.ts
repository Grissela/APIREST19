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
          console.log(res);
        },
        err => {
        }
      )
    }
  }

  buscar(n:string){
    this.router.navigate(['/descripcion', n])
  }
}
