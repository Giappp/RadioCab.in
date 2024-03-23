import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { inject } from '@angular/core';

export const appGuard: CanActivateFn = (route, state) => {
  const router:Router = inject(Router);
  const auth: AuthService = inject(AuthService);

  if(auth.isLoggedIn() && auth.currentUserValue){
    const roles = route.data['permittedRoles'] as Array<string>;
    const userRole = auth.currentUserValue.userRole[0];

    if(roles && !roles.includes(userRole)){
      return false;
    }else{
      return true;
    }
  }
  return false;
};
