import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppGuard } from './app.guard';
import { AlreadyLoggedInGuard } from './already-loggedIn.guard';

const routes: Routes = [
  {
    path: '',
    canActivate : [AppGuard],
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { 
    path: 'intro',
    canActivate : [AlreadyLoggedInGuard],
    loadChildren: './intro/intro.module#IntroPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
