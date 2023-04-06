import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { SharedModule } from '../modules/shared/shared.module';


@NgModule({
  declarations: [
    ProfileComponent,
    HeaderComponent,
    BodyComponent,
  ],
  imports: [
    CommonModule,
    SharedModule  
  ],
  exports: [
    ProfileComponent,
    HeaderComponent,
    BodyComponent,
  ]
})
export class ProfileModule { }
