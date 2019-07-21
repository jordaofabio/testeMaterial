import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTemplateComponent } from './page-template.component';



@NgModule({
  declarations: [PageTemplateComponent],
  exports: [PageTemplateComponent],
  imports: [
    CommonModule
  ]
})
export class PageTemplateModule { }
