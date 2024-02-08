import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ApiService } from '../api-services/api.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(private apiService:ApiService,private router:Router){}

  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
  //   if(!this.apiService.getToken()){
  //     this.router.navigateByUrl('login')
  //   }
  //   return this.apiService.getToken()
  return true
  };
}
