import { Injectable } from '@angular/core';
import { CanActivate,Router,ActivatedRouteSnapshot } from '@angular/router';


@Injectable()
export class SpeakingDetailGuard implements CanActivate {

    constructor( private _router : Router) {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        
        let id = +route.url[1].path;
        
        if (isNaN(id) || id < 1)
        {
        
            this._router.navigate(['/speaking-data']);
            return false;
        };
        return true;
    }
}