import { Component, OnInit } from '@angular/core';
import { PlotlyService } from '../plotly.service';
import * as Plotly from 'plotly.js-dist-min';
import { CommonModule } from '@angular/common';
import { PlotlyModule } from 'angular-plotly.js';
// Assign the PlotlyJS object to the PlotlyModule
PlotlyModule.plotlyjs = Plotly;
@Component({
  selector: 'app-horizontal-bar',
  standalone: true,
  imports: [CommonModule,PlotlyModule],
  templateUrl: './horizontal-bar.component.html',
  styleUrl: './horizontal-bar.component.css'
})
export class HorizontalBarComponent implements OnInit {


  public graph = {
    data: [{
      type: 'bar',
      x: [20, 14, 23],
      y: ['giraffes', 'orangutans', 'monkeys'],
      orientation: 'h'
    }],
    layout: {
      title: 'Horizontal Bar Chart'
    }
  };

  constructor(){

  }
  ngOnInit(): void {}
  
}
