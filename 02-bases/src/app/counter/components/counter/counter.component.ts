import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Hola Counter</h1>

    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="decreaseBy(1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy = (value: number): number => {
    return (this.counter += value);
  };

  decreaseBy = (value: number): number => {
    return (this.counter -= value);
  };

  resetCounter = (): number => {
    return (this.counter = 10);
  };
}
