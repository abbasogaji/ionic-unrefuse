import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IntroPage } from './intro.page';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: IntroPage
  },

  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IntroPage, SignupComponent]
})
export class IntroPageModule {}
