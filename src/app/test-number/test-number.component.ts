import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormControllerService } from '../form-controller.service';

@Component({
  selector: 'app-test-number',
  templateUrl: './test-number.component.html',
  styleUrls: ['./test-number.component.scss']
})
export class TestNumberComponent implements OnInit {

  public componentId: number = Date.now()
  public label: string = ''
  public required: boolean = false
  public counterValue: number = 1
  public step: number = 1
  public minimalValue: number = 0
  public maximumValue: number = 99900

  constructor(private formControllService: FormControllerService) {
    this.formControllService.initTestField$
      .pipe(first())
      .subscribe(
      (testField) => {
        this.label = testField.label
        if (testField.required)
          this.required = testField.required
      }
    )
  }

  ngOnInit(): void {
  }

  remove(): void {
    this.formControllService.removeComponent(this.componentId)
  }

  moveUp(): void {
    this.formControllService.moveComponentUp(this.componentId)
  }

  moveDown(): void {
    this.formControllService.moveComponentDown(this.componentId)
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
