import { FormControllerService } from './../form-controller.service';
import { GeneratorComponent } from './../generator/generator.component';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss']
})
export class TestInputComponent implements OnInit {
  
  public componentId: number = Date.now()
  public title: string = "ВУЗ"
  public isRequired: boolean = true

  public placeholder: string = "Например, ВолГУ"

  constructor(private formControllService: FormControllerService) {
  }

  ngOnInit(): void {
  }

  remove(): void {
    this.formControllService.removeComponent(this.componentId)
  }


}
