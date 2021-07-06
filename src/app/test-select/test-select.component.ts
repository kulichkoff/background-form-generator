import { Choice } from './../form-controller.service';
import { Component, OnInit } from '@angular/core';
import { FormControllerService } from '../form-controller.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss']
})
export class TestSelectComponent implements OnInit {

  public componentId: number = Date.now()
  public label: string = ''
  public required: boolean = false
  public selectedItem: Choice = {
    id: 0,
    title: ''
  }
  public choices: Choice[] = [
  ]

  constructor(private formControllService: FormControllerService) {
    this.formControllService.initTestField$
      .pipe(first())
      .subscribe(
      (testField) => {
        this.label = testField.label
        if (testField.required)
          this.required = testField.required
        if (testField.choices) {
          this.choices = testField.choices
          this.selectedItem = this.choices[0]
        }
          

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

  selectItem(id: number):void {
    // @ts-ignore
    this.selectedItem = this.choices.find((item) => item.id === id)
  }

}
