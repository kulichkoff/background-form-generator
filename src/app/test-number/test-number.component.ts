import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-number',
  templateUrl: './test-number.component.html',
  styleUrls: ['./test-number.component.scss']
})
export class TestNumberComponent implements OnInit {

  public counterValue: number = 1
  public step: number = 1
  public minimalValue: number = 0
  public maximumValue: number = 999

  constructor() { }

  ngOnInit(): void {
  }

  counterUp(): void {
    this.counterValue += this.step
    if (this.counterValue > this.maximumValue)
      this.counterValue = this.maximumValue
  }

  counterDown(): void {
    this.counterValue -= this.step
    if (this.counterValue < this.minimalValue)
      this.counterValue = this.minimalValue
  }
}
