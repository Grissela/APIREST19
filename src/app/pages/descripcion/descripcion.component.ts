import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicepokemonsService } from 'src/app/services/servicepokemons.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
  nombre=""
  data:any[]=[]
  constructor(private router:Router, private route:ActivatedRoute, private Pokedex:ServicepokemonsService) { }
  
  ngOnInit(): void {
    this.nombre = String(this.route.snapshot.paramMap.get('nombre'));
    this.mostrarpokemons();
  }
  mostrarpokemons(){
    let pokemon;

    for(let i = 1; i < 150; i++){

      this.Pokedex.getPokemon(String(i)).subscribe(
        res => {
          pokemon = {
            position: i,
            image: res.sprites.front_default,
            name: res.name,
            orden: res.order
          }
          this.data.push(pokemon)
          console.log(res);
        },
        err => {
        }
      )
    }
  }


}
