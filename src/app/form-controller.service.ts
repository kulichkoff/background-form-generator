import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  
export class FormControllerService {

  private removeComponentSource = new Subject<number>()
  private moveComponentUpSource = new Subject<number>()
  private moveComponentDownSource = new Subject<number>()

  // Observable
  removeComponentObs$ = this.removeComponentSource.asObservable()
  moveComponentUp$ = this.moveComponentUpSource.asObservable()
  moveComponentDown$ = this.moveComponentDownSource.asObservable()

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

  constructor() { }
}
