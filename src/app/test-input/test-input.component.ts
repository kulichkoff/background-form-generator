import { FormControllerService } from './../form-controller.service';
import { Component, OnInit, } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss']
})
export class TestInputComponent implements OnInit {
  
  public componentId: number = Date.now()
  public label: string = ''
  public required: boolean = false
  public description: string = ''
  public placeholder: string = ''

  constructor(private formControllService: FormControllerService) {
    this.formControllService.initTestField$
      .pipe(first())
      .subscribe(
      (testField) => {
        this.label = testField.label
        if (testField.required)
          this.required = testField.required
        if (testField.description)
          this.description = testField.description
        if (testField.placeholder)
          this.placeholder = testField.placeholder
      }
    )
  }

  ngOnInit(): void {
  }

  moveUp(): void {
    this.formControllService.moveComponentUp(this.componentId)
  }

  moveDown(): void {
    this.formControllService.moveComponentDown(this.componentId)
  }

  remove(): void {
    this.formControllService.removeComponent(this.componentId)
  }


}
