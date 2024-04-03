import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/shared/not-found/not-found.component";
import { PricesComponent } from "./components/prices/prices.component";
import { ContactComponent } from "./components/contact/contact.component";
// import { LoginComponent } from "./components/login/login.component";
import { AdminComponent } from "./components/admin/admin.component";
import { CallbackComponent } from "./components/callback/callback.component";
import { authGuard } from "./services/auth.guard";

export const ROUTES: Routes = [
  {path: '', component: HomeComponent },
  {path: 'prices', component: PricesComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'callback', component: CallbackComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ authGuard ]
  },
  {path: '**', component: NotFoundComponent }
];
