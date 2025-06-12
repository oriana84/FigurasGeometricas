import { Component } from '@angular/core';
import { IonSelect,IonSelectOption, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, SelectChangeEventDetail } from '@ionic/angular/standalone';
import { CirculoComponent} from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { IonSelectCustomEvent } from '@ionic/core';
import { CommonModule } from '@angular/common';


 
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonLabel, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, CirculoComponent,TrianguloComponent,IonSelectOption,IonSelect,CommonModule],
})
export class HomePage {
FiguraGeometrica: string ="";

  constructor() {}
  esCirculo(){ return this.FiguraGeometrica == "circulo"}
  esTriangulo(){ return this.FiguraGeometrica == "triangulo"}

  figuraSeleccionada($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
  this.FiguraGeometrica =$event.detail.value
  }
}