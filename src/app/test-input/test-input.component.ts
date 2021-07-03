import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss']
})
export class TestInputComponent implements OnInit {

  public title: string = "ВУЗ"
  public isRequired: boolean = true

  public placeholder: string = "Например, ВолГУ"

  constructor() { }

  ngOnInit(): void {
  }

}
