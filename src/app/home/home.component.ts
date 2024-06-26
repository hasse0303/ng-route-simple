import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  animals: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.animals = ['Dog', 'Cow', 'Cat']
  }

  addAnimal(newAnimal: string) {
    this.animals.push(newAnimal)
  }

}
