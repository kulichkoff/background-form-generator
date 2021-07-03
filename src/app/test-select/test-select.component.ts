import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss']
})
export class TestSelectComponent implements OnInit {

  public isSelectActive: boolean = false
  public selectedItem = {
    id: 0,
    title: ''
  }
  public testingArray = [
    {id: 1, title: "Не важно"},
    {id: 2, title: "важно"},
    {id: 3, title: "Не очень важно"},
    {id: 4, title: "Очень важно"},
  ]

  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.selectedItem = this.testingArray.find((item) => item.id === 1)
  }

  onSelect():void {
    this.isSelectActive = !this.isSelectActive
  }

  selectItem(id: number):void {
    this.isSelectActive = false;
    // @ts-ignore
    this.selectedItem = this.testingArray.find((item) => item.id === id)
  }

}
