import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AuthService).isAuthenticated$;
};

// @Injectable()
// class UserToken {}

// @Injectable()
// class PermissionsService {
//   canActivate(currentUser: UserToken, userId: string): boolean {
//     return true;
//   }
//   canMatch(currentUser: UserToken): boolean {
//     return true;
//   }
// }
