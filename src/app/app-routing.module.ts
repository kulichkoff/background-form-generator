import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GeneratorComponent} from "./generator/generator.component";
import {TestInputComponent} from "./test-input/test-input.component";

const routes: Routes = [
  {path: 'generator', component: GeneratorComponent},
  {path: 'input', component: TestInputComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
