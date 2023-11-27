import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  addizione(a : number, b : number) {
    return a + b
  }
  nome = 'Riccardo'
}
