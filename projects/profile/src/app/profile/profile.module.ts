import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

import { BiodotlinkModule } from 'projects/biodotlink/src/public-api';


@NgModule({
  declarations: [
    ProfileComponent,
    HeaderComponent,
    BodyComponent,
  ],
  imports: [
    CommonModule,
    BiodotlinkModule
  ],
  exports: [
    ProfileComponent,
    HeaderComponent,
    BodyComponent,
  ]
})
export class ProfileModule { }
