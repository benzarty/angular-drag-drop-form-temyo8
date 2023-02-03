import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { FormBuilderComponent } from './form-builder/form-builder.component';
@NgModule({
  imports: [BrowserModule, FormsModule, NgDragDropModule.forRoot()],
  declarations: [AppComponent, HelloComponent, FormBuilderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
