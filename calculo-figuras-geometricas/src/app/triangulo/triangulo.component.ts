import { Component, OnInit } from '@angular/core';
import { IonCard, IonButton, IonImg, IonItem, IonInput, IonCardContent, IonCardHeader, 
  IonCardSubtitle, IonCardTitle, IonText } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TrianguloEscaleno } from '../modelo/figuras';
@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
    imports: [ CommonModule, FormsModule,IonCard, IonCardHeader, IonCardTitle, 
      IonCardSubtitle, IonItem, IonInput, IonButton, IonCardContent, IonImg, IonText]
})
export class TrianguloComponent  implements OnInit {
  
  ladosA: string = "";
  ladosB: string=  "";
  ladosC: string ="";
  perimetrotr: string ="";
    constructor() { }
    ngOnInit() {}
  calcularPerimetro() {
    const ladoA = parseInt(this.ladosA)
    const ladoB = parseInt(this.ladosB)
    const ladoC = parseInt(this.ladosC)
    const figuras = new TrianguloEscaleno(ladoA,ladoB,ladoC)
    const perimetro = figuras.calcularPerimetro()
    this.perimetrotr = `El perímetro es : ${perimetro} cm`

  }

}
