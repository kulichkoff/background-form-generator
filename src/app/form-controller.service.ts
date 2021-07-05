import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  
export class FormControllerService {

  private removeComponentSource = new Subject<number>()
  private componentRemovedSource = new Subject<number>()

  // Observable
  removeComponentObs$ = this.removeComponentSource.asObservable()
  componentRemoved$ = this.removeComponentSource.asObservable()

  public removeComponent(componentId: number) {
    console.log(componentId)
    this.removeComponentSource.next(componentId)
  }

  constructor() { }
}
