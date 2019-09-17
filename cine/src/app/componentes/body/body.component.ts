import { Component} from '@angular/core';
import { PrecioService } from 'src/servicios/precio.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent{
 
  proximosEstrenos:string[] = ["Titanic 20 años", "Alien 5", "Apocalipto 2"] 
  
  pelicula1Estreno:string = "Toy Story 4";
  estado1:boolean = true;

  pelicula2Estreno:string = "El rey leon";
  estado2:boolean = true;

  estado3:boolean = false;
  estado4:boolean = false;
  
  http:PrecioService;

  precioEntredas = {};

  constructor(http:PrecioService){
    this.http = http;
  }
  precio(){

    this.http.precio().subscribe(data => this.precioEntredas = data); 
        

  }
}
