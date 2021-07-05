import { Component, OnInit } from '@angular/core';
import { FormControllerService } from '../form-controller.service';

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrls: ['./test-checkbox.component.scss']
})
export class TestCheckboxComponent implements OnInit {

  public componentId: number = Date.now()
  public title: string = 'Навыки'
  public isRequired: boolean = false
  public isIncludingCheckAll: boolean = true
  public isAllChecked: boolean = false

  public checkBoxes = [
    {id: 1, title: 'Общение', checked: false},
    {id: 2, title: 'Вождение', checked: false},
    {id: 3, title: 'Программирование', checked: false},
    {id: 4, title: 'Самозащита', checked: false},
    {id: 5, title: 'Вождение вертолета', checked: false},

  ]

  constructor(private formControllService: FormControllerService) { }

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
      this.checkBoxes.forEach((checkbox) => {
        checkbox.checked = true
      })
      this.isAllChecked = true
    } else {
      this.checkBoxes.forEach((checkbox) => {
        checkbox.checked = false
      })
      this.isAllChecked = false
    }

  }

}
