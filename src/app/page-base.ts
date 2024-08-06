import { inject } from '@angular/core';
import { LoadingService } from './loading.service';

export class PageBase {

  private loaderBase: HTMLIonLoadingElement | undefined;

  private loadingService = inject(LoadingService);

  /**
  * Show the data loading loader (if not already up)
  */
  protected async presentDataLoading(message?: string): Promise<void> {
    try {
      if (this.loaderBase) {
        return;
      }

      this.loaderBase = await this.loadingService.presentLoadingSpinner('loading');
    } catch (error) {
      console.log('Error in presentDataLoading', error);
    }
  }

  protected async dismissLoaderIfPresent(): Promise<void> {

    try {
      // eslint-disable-next-line eqeqeq
      if (this.loaderBase == undefined) {
        return;
      }
      await this.loaderBase.dismiss().catch(error => console.log(`loaderBase.dismiss: ${error}`));
      this.loaderBase = undefined;
    } catch (error) {
      console.log('Error in dismissLoaderIfPresent', error);
    }
  }

}

