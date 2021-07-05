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

    formControllService.moveComponentUp$.subscribe(
      componentId => {
        console.log('Generator has got a message for move component up ' + componentId)
        this.moveComponentUp(componentId)
      }
    )

    formControllService.moveComponentDown$.subscribe(
      componentId => {
        console.log('Generator has got a message for move component up ' + componentId)
        this.moveComponentDown(componentId)
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
    const component = this.components.find((component) => component.instance.componentId === componentId);
    // @ts-ignore
    const componentIndex = this.components.indexOf(component);

    if (componentIndex !== -1) {
      // Remove component from both view and array
      this.container.remove(componentIndex);
      this.components.splice(componentIndex, 1);
    }
  }

  moveComponentUp(componentId: number) {

    // Find the component
    // @ts-ignore
    const component = this.components.find((component) => component.instance.componentId === componentId);
   
    // @ts-ignore
    const componentIndex = this.components.indexOf(component);

    if (componentIndex !== -1 && componentIndex > 0) {
      // Get ViewRef object
      // @ts-ignore
      const componentViewRef: ViewRef = component['hostView']
      
      this.container.move(componentViewRef, componentIndex - 1);
      
      // Swap components in array
      const temp = this.components[componentIndex - 1]
      this.components[componentIndex - 1] = this.components[componentIndex]
      this.components[componentIndex] = temp
    }
  }

  moveComponentDown(componentId: number) {
    // Find the component
    // @ts-ignore
    const component = this.components.find((component) => component.instance.componentId === componentId);
    // @ts-ignore
    const componentIndex = this.components.indexOf(component);

    if (componentIndex !== -1 && componentIndex < this.components.length - 1) {
      // Get ViewRef object
      // @ts-ignore
      const componentViewRef: ViewRef = component['hostView']
      
      this.container.move(componentViewRef, componentIndex + 1);
      
      // Swap components in array
      const temp = this.components[componentIndex + 1]
      this.components[componentIndex + 1] = this.components[componentIndex]
      this.components[componentIndex] = temp
    }

  }


  openModal(content: any): void {
    this.ngbModal.open(content)
  }

  ngOnInit(): void {
  }

}

