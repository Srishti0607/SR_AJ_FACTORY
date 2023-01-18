import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomLandingComponent } from './custom-landing/custom-landing.component';

const routes: Routes = [
   { path: '', component: CustomLandingComponent }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class CustomRoutingModule {}
