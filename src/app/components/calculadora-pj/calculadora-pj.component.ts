import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-calculadora-pj',
  templateUrl: './calculadora-pj.component.html',
  styleUrls: ['./calculadora-pj.component.css']
})
export class CalculadoraPjComponent implements OnChanges {
  @Input() salarioMensal = 20000;
  @Input() planoDeSaudeMensal = 1500;
  @Input() impostosMensal = 0.15;
  @Input() custoFixoMensal = 300;
  @Input() custoFixoAnual = 600;

  salarioAnualBruto = 0;
  salarioAnualLiquido = 0;
  custosFixosMensais = 0;
  custosFixosAnuais = 0;
  saldoLiquidoAnual = 0;
  saldoLiquidoMensal = 0;

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
    this.custosFixosAnuais = (this.custosFixosMensais * 12) + this.custoFixoAnual;
    this.saldoLiquidoAnual = this.salarioAnualLiquido - this.custosFixosAnuais;
    this.saldoLiquidoMensal = this.saldoLiquidoAnual / 12;
  }
}
