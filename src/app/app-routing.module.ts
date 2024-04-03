import { NgModule } from '@angular/core';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
