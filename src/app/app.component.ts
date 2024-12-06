import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { PlotlyComponent } from "./plotly/plotly.component";
import { ChartStudioComponent } from "./chart-studio/chart-studio.component";
import { ClickbarComponent } from "./clickbar/clickbar.component";
import { HorizontalBarComponent } from "./horizontal-bar/horizontal-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlotlyComponent, ChartStudioComponent, ClickbarComponent, HorizontalBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  loggedIn: boolean=false;
  barSelectedData:any;

  constructor(public router: Router) {}
  onBarClick(event: any) {
    this.loggedIn= true;
    this.barSelectedData = event.points[0];
    console.log(this.barSelectedData);
      // alert(`You clicked on ${this.barSelectedData.x}: ${this.barSelectedData.y}`);
        
        // Additional logic can be added here based on the clicked bar
  }

}
