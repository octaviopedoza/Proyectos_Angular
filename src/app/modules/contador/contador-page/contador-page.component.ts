import { Component } from '@angular/core';

@Component({
  selector: 'app-contador-page',
  templateUrl: './contador-page.component.html',
  styleUrls: ['./contador-page.component.css']
})
export class ContadorPageComponent {
  title:String = "Contador";
  numero:number = 0;

  sum(){
    this.numero++
  }

  rest(){
    this.numero--
  }
}
