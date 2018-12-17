import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //entry params
  colors=['#0038ba','#e8cc18'];
  deg:number = 0;
  gradientStyle;
  orientations = [
    "right",
    "bottom right",
    "bottom",
    "bottom left",
    "left",
    "top left",
    "top",
    "top right"
  ];
  public setRotate(index){
    this.deg = index*45;
    this.setGradient();
  }

  setGradient(){
    var deg = this.deg + 'deg';
    var colors = this.colors.join(',');
    this.gradientStyle={
      "background-image" :  "linear-gradient("+deg+','+colors+")"
    };
  }
  ngOnInit(){
   this.setGradient();
  }
}
