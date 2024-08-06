import { Component, OnInit } from '@angular/core';
import { PageBase } from '../page-base';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component extends PageBase  {

  public selectedItem = '';

  constructor() {
    super();
  }

  public async loadData(): Promise<void> {
    try {
      await this.presentDataLoading('Loading Data');
      // simulate a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.log('Error in loadData', error);
    } finally {
      await this.dismissLoaderIfPresent();
    }
  }

}
