import { Component } from '@angular/core';
import { PlotlyService } from '../plotly.service';
import * as Plotly from 'plotly.js-dist-min';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart-studio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart-studio.component.html',
  styleUrl: './chart-studio.component.css'
})
export class ChartStudioComponent {

  constructor() { }
  ngOnInit(): void {
  var data: any[] = [{
    values: [29, 26, 45],
    labels: ['Residential', 'Non-Residential', 'Utility'],
    type: 'pie',
    marker: {
      colors: ['#ff9999', '#66b3ff', '#99ff99'] // Define your custom colors here
    }
  }];
  
  var layout = {
    title: {
        text: 'Show Edit in Chart Studio Modebar Button'
    }
  };
  
  var config = {
    showEditInChartStudio: true,
    plotlyServerURL: "https://chart-studio.plotly.com"
  };
  
  Plotly.newPlot('myDiv', data, layout, config);
  }
}
