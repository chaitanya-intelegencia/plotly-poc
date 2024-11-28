import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlotlyComponent } from "./plotly/plotly.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlotlyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  
}
