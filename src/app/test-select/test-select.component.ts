import { Component, OnInit } from '@angular/core';
import { FormControllerService } from '../form-controller.service';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss']
})
export class TestSelectComponent implements OnInit {

  public componentId: number = Date.now()
  public isSelectActive: boolean = false
  public selectedItem = {
    id: 0,
    title: ''
  }
  public choices = [
    {id: 1, title: "Не важно"},
    {id: 2, title: "важно"},
    {id: 3, title: "Не очень важно"},
    {id: 4, title: "Очень важно"},
  ]

  constructor(private formControllService: FormControllerService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.selectedItem = this.choices.find((item) => item.id === 1)
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

  onSelect():void {
    this.isSelectActive = !this.isSelectActive
  }

  selectItem(id: number):void {
    this.isSelectActive = false;
    // @ts-ignore
    this.selectedItem = this.choices.find((item) => item.id === id)
  }

}
