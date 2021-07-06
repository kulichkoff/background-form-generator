import { Choice, TestField } from './../form-controller.service';
import { Component, OnInit } from '@angular/core';
import { FormControllerService } from '../form-controller.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrls: ['./test-checkbox.component.scss']
})
export class TestCheckboxComponent implements OnInit {

  public componentId: number = Date.now()
  public label: string = ''
  public required: boolean = false
  public isIncludeCheckAll: boolean = false
  public isAllChecked: boolean = false
  public choices: Choice[] = [
    {id: 1, title: 'Общение', active: false},
    {id: 2, title: 'Вождение', active: false},
    {id: 3, title: 'Программирование', active: false},
    {id: 4, title: 'Самозащита', active: false},
    {id: 5, title: 'Вождение вертолета', active: false},

  ]

  constructor(private formControllService: FormControllerService) {
    this.formControllService.initTestField$
      .pipe(first())
      .subscribe(
      (testField) => {
        this.label = testField.label
        if (testField.required)
          this.required = testField.required
        if (testField.isIncludeCheckAll)
          this.isIncludeCheckAll = testField.isIncludeCheckAll
        if (testField.choices)
          this.choices = testField.choices
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

  checkAll(): void {
    if (!this.isAllChecked) {
      this.choices.forEach((checkbox) => {
        checkbox.active = true
      })
      this.isAllChecked = true
    } else {
      this.choices.forEach((checkbox) => {
        checkbox.active = false
      })
      this.isAllChecked = false
    }

  }

}
