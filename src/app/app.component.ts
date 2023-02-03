import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  modalPopupObject: any;
  display: boolean = false;
  vegetables = [
    { name: 'Label', type: 'label', inputType: 'label' },
    { name: 'text', type: 'input-text', inputType: 'text', placeholder: '' },
    { name: 'checkbox', type: 'input-check', inputType: 'checkbox', placeholder: null, displayText: 'Check box' }];

  droppedVegetables = [];
  droppedItems = [];
  dragEnabled = true;
  htmlText: any;
  test: string = '';
  currentDraggedItem: any;

  constructor() {
    this.modalPopupObject = {};
  }
  
  onAnyDrop(e: any) {
    this.currentDraggedItem = e;
    if(e.dragData.type !== 'label'){    this.display = true;}
    else {
      this.updateDroppedItem(this.currentDraggedItem);
    }
    
    // this.droppedItems.push(e.dragData);
    // this.updateHtmlCode();
    // this.test += this.renderHtmlCode(e.dragData);
  }

  updateHtmlCode(): void {
    this.htmlText = this.droppedItems;
  }

  // removeItem(item: any, list: Array<any>) {
  //   let index = list.map(function (e) {
  //     return e.name
  //   }).indexOf(item.name);
  //   list.splice(index, 1);
  // }

  renderHtmlCode(htmlObject: any): string {
    if (htmlObject.inputType === 'label') {
      return '<label> </label>';
    } else {
      return '<input type="' + htmlObject.inputType
        + '" placeholder="' + htmlObject.placeholder + '" />';
    }
  }

  onSubmit(f: any): void {
    this.display = false;
    this.updateDroppedItem(f.value);
  }

  updateDroppedItem(e: any): void {
    this.currentDraggedItem.dragData.placeholder = e.placeholder;
    this.droppedItems.push(this.currentDraggedItem.dragData);
    this.updateHtmlCode();
    this.test += this.renderHtmlCode(this.currentDraggedItem.dragData);
  }

}
