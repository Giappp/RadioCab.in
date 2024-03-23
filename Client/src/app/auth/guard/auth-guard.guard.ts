import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const auth: AuthService = inject(AuthService);
  const router:Router = inject(Router)
  if(auth.isLoggedIn()){
    return router.createUrlTree(['/home']);
  }
  return true;
};
