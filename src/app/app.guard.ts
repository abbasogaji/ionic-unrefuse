import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { isNullOrUndefined } from 'util';

@Injectable({
    providedIn : 'root'
})
export class AppGuard  implements CanActivate{
    constructor(private storage: Storage, private router : Router){}
    canActivate(

        route: import("@angular/router").ActivatedRouteSnapshot,
        state: import("@angular/router").RouterStateSnapshot
        
        ): 
        boolean | 
        import("@angular/router").UrlTree | 
        import("rxjs").Observable<boolean | 
        import("@angular/router").UrlTree> | 
        Promise<boolean | 
        import("@angular/router").UrlTree> 

    {
        this.storage.remove('userId')
        return new Promise((resolve, reject) => {
            this.storage.get('userId').then(data => {

                if(isNullOrUndefined(data)){
                    this.router.navigateByUrl('/intro')
                }else{
                    console.log("the data", data)
                    resolve(true);
                }
                
            }).catch(error => {
                reject(false)
            })
        })
    }

    

}