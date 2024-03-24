import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CompanyServiceService } from '../services/company-service.service';
import { AuthService } from '../../auth/services/auth.service';
import { map, Observable } from 'rxjs';

export const companyGuard: CanActivateFn = (route, state) => {
  const companyService:CompanyServiceService = inject(CompanyServiceService);
  const authService:AuthService = inject(AuthService);

  const router: Router = inject(Router);
  if(authService.currentUserValue.userRole[0] === 'Company'){
    const IdentityId = authService.currentUserValue.userId;
    return companyService.checkIdentityCompany({IdentityId: IdentityId}).pipe(map((response) => {
      if(!response){
        return router.navigate(['/company/get-started'])
      }else{
        return response;
      }
    }))
  }else{
    return router.navigate(['/home']);
  }
};
