import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  expression = '';
  vistaOper= '';
  pantalla = '';

  addToExpression(value: string) {
    this.expression += value;
    this.pantalla = this.expression;
    this.vistaOper = this.expression;
  }

  darResultado() {
    this.pantalla = this.calcular()
  }

  calcular(){
    var resultado = eval(this.expression)
    this.expression = resultado.toString();
    return resultado;
  }

  clearAll() {
    this.expression = '';
    this.pantalla = '';
    this.vistaOper = '';
  }

  clearLast() {
    this.expression = this.expression.slice(0, -1);
    this.pantalla = this.expression
    this.vistaOper = this.expression
  }

}
