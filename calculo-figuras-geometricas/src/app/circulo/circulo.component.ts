import { Component, OnInit } from '@angular/core';
import { IonInput, IonCardTitle,IonCardSubtitle,IonText, IonCardContent,IonButton, IonCardHeader, IonItem, 
         IonImg, IonCard} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Circulo } from '../modelo/figuras';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports:[CommonModule,IonCardTitle, IonCardContent, IonCardSubtitle, FormsModule, IonImg, IonButton, 
    IonCard,IonText, IonCardHeader, IonInput, IonItem]
})
export class CirculoComponent  implements OnInit {
  Radiostr:string ="";
  area: string ="";

   constructor() { }
    ngOnInit() {}

  calcularPerimetro() {
      const radio = parseInt(this.Radiostr)
      const figuras = new Circulo(radio)
      const perimetro = figuras.calcularPerimetro()
      this.area =`El perimetro es : ${perimetro.toFixed(2)} cm`
  }
}
