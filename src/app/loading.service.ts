import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private loadingCtrl: LoadingController) { }

  /**
   * For displaying the progress spinner while performing long operations. 
   * It handles displaying an animated spinner on all known platforms (eg Android Samsung S7 does not animate 
   * for crescent so we use circles instead).
   * @param content - any content to display
   * @returns  - The Loading object. Call dismiss() on it when you have finished loading to make it disappear.
   */
  public async presentLoadingSpinner(content: string): Promise<HTMLIonLoadingElement> {
    let loader: HTMLIonLoadingElement;
    {
      loader = await this.loadingCtrl.create({
        message: content
        // Use default spinner for that O/S.
      });

      await loader.present();
      return loader;
    }
  }

}
