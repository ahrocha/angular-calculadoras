import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-calculadora-pj',
  templateUrl: './calculadora-pj.component.html',
  styleUrls: ['./calculadora-pj.component.css']
})
export class CalculadoraPjComponent implements OnChanges {
  @Input() salarioMensal: number = 20000;
  @Input() planoDeSaudeMensal: number = 1500;
  @Input() impostosMensal: number = 0.15;
  @Input() custoFixoMensal: number = 300;

  salarioAnualBruto: number = 0;
  salarioAnualLiquido: number = 0;
  custosFixosMensais: number = 0;
  custosFixosAnuais: number = 0;
  saldoLiquidoAnual: number = 0;
  saldoLiquidoMensal: number = 0;

  // implement constructor
  constructor() {
    this.updateCalculations();
  }

  ngOnChanges(changes: SimpleChanges): void {
    alert('ngOnChanges fired');
    this.updateCalculations();
  }

  public updateCalculations() {
    this.salarioAnualBruto = this.salarioMensal * 12;
    this.salarioAnualLiquido = this.salarioAnualBruto - (this.salarioAnualBruto * this.impostosMensal);
    this.custosFixosMensais = this.planoDeSaudeMensal + this.custoFixoMensal;
    this.custosFixosAnuais = this.custosFixosMensais * 12;
    this.saldoLiquidoAnual = this.salarioAnualLiquido - this.custosFixosAnuais;
    this.saldoLiquidoMensal = this.saldoLiquidoAnual / 12;
  }
}
