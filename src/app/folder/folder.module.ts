import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { Page1Component } from '../page1/page1.component';
import { Page2Component } from '../page2/page2.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  
  imports: [    
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,    
  ],
  declarations: [FolderPage, Page1Component, Page2Component]
})
export class FolderPageModule {}
