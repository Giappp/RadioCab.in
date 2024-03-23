import { Injectable, inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

// @Injectable()
// export class AuthGuard {
//   constructor(private authService: AuthService, private router: Router) {}
//   canActivate() : boolean{
//     if(this.authService.isLoggedIn()){
//       return true;
//     }else{
//       return false;
//     }
//   }
// }
export const authGuardGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isLoggedIn() ? true : inject(Router).createUrlTree(['/auth/login']);
};
