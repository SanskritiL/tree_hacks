import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import {WebcamModule} from 'ngx-webcam';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    WebcamModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})

export class Tab1PageModule {}
