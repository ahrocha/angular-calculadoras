import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-calculadora-pf',
  templateUrl: './calculadora-pf.component.html',
  styleUrls: ['./calculadora-pf.component.css']
})
export class CalculadoraPfComponent implements OnChanges {

  @Input() salarioBrutoMensal: number = 14750;
  @Input() impostosMensal: number = 0.27;
  @Input() extrasMensal: number = 1000;
  @Input() bonusAnual: number = this.salarioBrutoMensal * 2;

  salarioAnualBruto:number = this.salarioBrutoMensal * 13;
  salarioAnualLiquido:number = this.salarioAnualBruto - (this.salarioAnualBruto * this.impostosMensal);

  extrasAnuais:number = this.extrasMensal * 12 + this.bonusAnual;

  saldoLiquidoAnual:number = this.salarioAnualLiquido + this.extrasAnuais;
  saldoLiquidoMensal:number = this.saldoLiquidoAnual / 12;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes)
    if (changes) {
      this.updateCalculations();
    }
  }

  public updateCalculations() {
    this.salarioAnualBruto = this.salarioBrutoMensal * 13;
    this.salarioAnualLiquido = this.salarioAnualBruto - (this.salarioAnualBruto * this.impostosMensal);
    this.extrasAnuais = this.extrasMensal * 12 + this.bonusAnual;
    this.saldoLiquidoAnual = this.salarioAnualLiquido + this.extrasAnuais;
    this.saldoLiquidoMensal = this.saldoLiquidoAnual / 12;
  }
}
