import { Component, OnInit } from '@angular/core';
import { PlotlyService } from '../plotly.service';

@Component({
  selector: 'app-plotly',
  standalone: true,
  imports: [],
  templateUrl: './plotly.component.html',
  styleUrl: './plotly.component.css'
})
export class PlotlyComponent implements OnInit {
  constructor(private plot:PlotlyService) { }
  ngOnInit(): void {
      let x:number[] = [1,2,3,4,5];
      let y:number[] = [1,2,3,4,5];
      this.plot.plotLine("Line Plot","plot",x,y);
    }
  }