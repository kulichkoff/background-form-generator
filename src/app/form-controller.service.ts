import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


export interface Choice {
  id: number,
  title: string,
  active?: boolean,
}
  
export interface TestField {
  label: string,
  description?: string,
  placeholder?: string,
  required?: boolean,
  choices?: Choice[],
  componentClass: any,
  isIncludeCheckAll?: boolean,
}
  
@Injectable({
  providedIn: 'root'
})

export class FormControllerService {

  private removeComponentSource = new Subject<number>()
  private moveComponentUpSource = new Subject<number>()
  private moveComponentDownSource = new Subject<number>()
  private initTestFieldSource = new Subject<TestField>()

  // Observable
  removeComponentObs$ = this.removeComponentSource.asObservable()
  moveComponentUp$ = this.moveComponentUpSource.asObservable()
  moveComponentDown$ = this.moveComponentDownSource.asObservable()
  initTestField$ = this.initTestFieldSource.asObservable()

  // Bus methods
  public removeComponent(componentId: number) {
    this.removeComponentSource.next(componentId)
  }

  public moveComponentUp(componentId: number) {
    this.moveComponentUpSource.next(componentId)
  }

  public moveComponentDown(componentId: number) {
    this.moveComponentDownSource.next(componentId)
  }

  public initTestField(testField: TestField) {
    this.initTestFieldSource.next(testField)
  }

  constructor() { }
}
