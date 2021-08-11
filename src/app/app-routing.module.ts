import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'our-approach',
    loadChildren:  () => import('./our-approach/our-approach.module').then(m => m.OurApproachModule)
  },
  {
    path: 'who-we-are',
    loadChildren: () => import('./who-we-are/who-we-are.module').then(m=>m.WhoWeAreModule)
  },
  {
    path: 'insights',
    loadChildren: ()=> import('./insights/insights.module').then(m=>m.InsightsModule)
  },
  {
    path: 'career',
    loadChildren: ()=> import('./careers/careers.module').then(m=>m.CareersModule)
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
