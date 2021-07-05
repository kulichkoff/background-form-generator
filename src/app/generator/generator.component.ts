import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import {TestCheckboxComponent} from "../test-checkbox/test-checkbox.component";
import {TestInputComponent} from "../test-input/test-input.component";
import {TestNumberComponent} from "../test-number/test-number.component";
import {TestSelectComponent} from "../test-select/test-select.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { FormControllerService } from '../form-controller.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

  // @ts-ignore
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef

  title = ''

  components = []

  testCheckbox = TestCheckboxComponent
  testInput = TestInputComponent
  testNumber = TestNumberComponent
  testSelect = TestSelectComponent

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private ngbModal: NgbModal, formControllService: FormControllerService) {
    formControllService.removeComponentObs$.subscribe(
      componentId => {
        console.log('Generator has got a message for remove component ' + componentId)
        this.removeComponent(componentId)
      }
    )
  }

  addComponent(componentClass: any) {
    // Create component dynamically inside the ng-template
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass)
    const component = this.container.createComponent(componentFactory)

    // @ts-ignore
    this.components.push(component);
    console.log(this.components)
  }

  removeComponent(componentId: number) {
    // Find the component
    // @ts-ignore
    const component: ViewRef = this.components.find((component) => component.instance.componentId === componentId);
    // @ts-ignore
    const componentIndex = this.components.indexOf(component);

    if (componentIndex !== -1) {
      // Remove component from both view and array
      this.container.remove(componentIndex);
      this.components.splice(componentIndex, 1);
    }
  }


  openModal(content: any): void {
    this.ngbModal.open(content)
  }

  ngOnInit(): void {
  }

}

