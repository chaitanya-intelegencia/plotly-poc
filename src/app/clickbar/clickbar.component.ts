import { Component, EventEmitter, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotlyModule } from 'angular-plotly.js';
import * as Plotly from 'plotly.js-dist-min';
// Assign the PlotlyJS object to the PlotlyModule
PlotlyModule.plotlyjs = Plotly;

@Component({
  selector: 'app-clickbar',
  standalone: true,
  imports: [CommonModule,PlotlyModule],
  templateUrl: './clickbar.component.html',
  styleUrl: './clickbar.component.css'
})
export class ClickbarComponent {

  @Output() newItemEvent = new EventEmitter<string>();

  public graph = {
    data: [
      {
        x: ['Giraffes', 'Orangutans', 'Monkeys'],
        y: [20, 14, 23],
        type: 'bar',
        text: [20, 14, 23].map(String),
        textposition: 'auto',
        marker: {
          color: ['rgba(55,128,191,0.6)', 'rgba(55,128,191,0.6)', 'rgba(55,128,191,0.6)'], // Initial colors
          width: 1,
        },
      },
    ],
    layout: {
      title: 'Animal Counts',
      xaxis: {
        title: 'Animals',
      },
      yaxis: {
        title: 'Count',
      },
    },
  };

  // addNewItem(value: string) {
  //   console.log(value);
  //   this.newItemEvent.emit(value);
  // }

  addNewItem(event: any) {
    const pointIndex = event.points[0].pointIndex; // Index of the clicked bar
    const updatedColors = this.graph.data[0].marker.color.map((color: string, index: number) =>
      index === pointIndex ? 'rgba(255,99,71,0.8)' : 'rgba(55,128,191,0.6)' // Highlight clicked bar
    );

    // Update the marker colors
    this.graph.data[0].marker.color = updatedColors;

    // Emit the clicked bar's value
    //this.newItemEvent.emit(event.points[0].x);
    this.newItemEvent.emit(event);
  }
}
