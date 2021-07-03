import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {TestCheckboxComponent} from "../test-checkbox/test-checkbox.component";
import {TestInputComponent} from "../test-input/test-input.component";
import {TestNumberComponent} from "../test-number/test-number.component";
import {TestSelectComponent} from "../test-select/test-select.component";
import {NgbModal, NgbModule} from "@ng-bootstrap/ng-bootstrap";

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

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private ngbModal: NgbModal) {
  }

  addComponent(componentClass: any) {
    // Create component dynamically inside the ng-template
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass)
    const component = this.container.createComponent(componentFactory)

    // @ts-ignore
    this.components.push(component);
    console.log(this.components)
  }

  removeComponent(componentClass: any) {
    // Find the component
    // @ts-ignore
    let component = this.components.find((component) => component.instance instanceof componentClass);
    // @ts-ignore
    let componentIndex = this.components.indexOf(component);

    if (componentIndex !== -1) {
      // Remove component from both view and array
      // @ts-ignore
      this.container.remove(this.container.indexOf(component));
      this.components.splice(componentIndex, 1);
    }
  }

  openModal(content: any): void {
    this.ngbModal.open(content)
  }

  ngOnInit(): void {
  }

}

