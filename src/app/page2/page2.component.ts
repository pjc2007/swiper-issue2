import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service';
import { PageBase } from '../page-base';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component  extends PageBase  {

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
