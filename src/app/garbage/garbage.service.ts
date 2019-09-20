import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_URL } from '../app-commons';

Injectable({
    providedIn : 'root'
})

export class GarbageService{
    constructor(
        private http : HttpClient
    ){}
    
    addNewGarbage( newGarbage){
        return this.http.post( API_URL.GARBAGE+'/new', newGarbage )
    }
    addNewGarbageAlt(newGarbage){
        return this.http.post( API_URL.ALT_GARBAGE+'/new', newGarbage)
    }

}