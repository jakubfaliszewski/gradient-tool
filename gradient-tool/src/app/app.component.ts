import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //entry params
  colors: string[] = ['#0038ba', '#e8cc18'];
  showModal: boolean = false;
  colorname: string = 'orange'
  deg = "linear-gradient(" + 0 * 45 + 'deg' + ',';
  gradientStyle;
  code: string;
  orientations = [
    "bottom",
    "bottom left",
    "left",
    "top left",
    "top",
    "top right",
    "right",
    "bottom right",
  ];
  public setRotate(linear, index) {
    if (linear)
      this.deg = "linear-gradient(" + index * 45 + 'deg' + ',';
    else
      this.deg = "radial-gradient("


    this.setGradient();

  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.colors, event.previousIndex, event.currentIndex);
    this.setGradient();
  }
  public addColor(colorname) {
    var t = this;

    if (colorname) {
      t.colors.push(colorname);
    }
    this.setGradient();
  }
  public deleteColor(i) {
    if (this.colors.length > 2) {
      this.colors.splice(i, 1);
      this.setGradient();
    }
    else {
      this.showModal = true;
      setTimeout(() => this.showModal = false, 2000);
    }
  }
  setGradient() {
    var deg = this.deg;
    var colors = this.colors.join(',');
    this.gradientStyle = {
      "background-image": deg + colors + ")"
    };
    this.code = this.gradientStyle["background-image"];
    console.log(this.code);
  }
  ngOnInit() {
    this.setGradient();
  }
}
