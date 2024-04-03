import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { PricesComponent } from './components/prices/prices.component';
import { ContactComponent } from './components/contact/contact.component';
// import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { provideAuth0 } from '@auth0/auth0-angular';
import { CallbackComponent } from './components/callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    PricesComponent,
    ContactComponent,
    AdminComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAuth0({
      domain: 'dev-v8kk3ydoc30f6xv2.us.auth0.com',
      clientId: 'k8HJgTyd1qZCuamktRnzXQ4WRxuB3S3T',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
