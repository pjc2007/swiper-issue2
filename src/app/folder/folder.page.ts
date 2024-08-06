import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicSlides } from '@ionic/angular';
import { SwiperContainer } from 'swiper/element';
import { Pagination } from 'swiper/modules';
import SwiperCore, { Swiper } from 'swiper';
import { Page1Component } from '../page1/page1.component';
import { Page2Component } from '../page2/page2.component';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})


export class FolderPage implements OnInit {

  public swiperModules = [IonicSlides];
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  private currentSliderIndex = 0;

  @ViewChild('swiper') private swiper!: ElementRef<SwiperContainer>;


  @ViewChild(Page1Component) private page1!: Page1Component;
  @ViewChild(Page2Component) private page2!: Page2Component;

  constructor() { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  /**
  * Angular lifecycle
  */
  public ngAfterViewInit(): void {
    try {
      // initialSlide in markup not seeming to work
      Promise.resolve().then(() => {
        this.swiper.nativeElement.swiper.slideTo(0);
        this.swiper.nativeElement.loop = false;
      });
    } catch (error) {
      console.error('Error in ngAfterViewInit', error);
    }
  }

  public async slideChanged(ev: any): Promise<void> {
    try {
      const swiper: Swiper = ev.detail[0];

      this.currentSliderIndex = swiper.activeIndex;
      if (!this.currentSliderIndex) {
        this.currentSliderIndex = 0;
      }


      console.log(`index set to ${this.currentSliderIndex}`);

      this.setupCurrentSliderPage();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Called to setup a slider page
   */
  private async setupCurrentSliderPage(): Promise<void> {
    if (this.currentSliderIndex === 0) {
      await this.page1.loadData();
    } else {
      await this.page2.loadData();
    }
  }

}
