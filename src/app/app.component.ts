import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nodeData = [
      { key: 1, text: "Alpha", color: "lightblue" },
      { key: 2, text: "Beta", color: "orange" },
      { key: 3, text: "Gamma", color: "lightgreen" },
      { key: 4, text: "Delta", color: "pink" }
    ];
  linkData = [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 2 },
      { from: 3, to: 4 },
      { from: 4, to: 1 }
    ];
  paletteData = [
      { text: "A", color: "red" },
      { text: "B", color: "lightyellow" },
      { text: "C", color: "lightpink" },
      { text: "D", color: "lightgreen" },
      { text: "E", color: "yellow" },
      { text: "F", color: "orange" },
      { text: "G", color: "lightblue" }
    ];
}
