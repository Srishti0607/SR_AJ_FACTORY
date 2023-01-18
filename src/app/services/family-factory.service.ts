import { Injectable } from '@angular/core'
import { Family } from '../family';
import { MotherService } from './mother.service';
import {AppInjector} from '../app-injector';
import { FatherService } from './father.service';

@Injectable({
    providedIn: 'root'
}) 
export class FamilyFactoryService  {
    constructor() { }

    getFamilyMember(familyDet: string): Family {
       let familyVal: any;

       if(familyDet == 'MOTHER'){
        familyVal = AppInjector.getInjector().get(MotherService);
       }else{
        familyVal = AppInjector.getInjector().get(FatherService);
       }

       return familyVal;
    }

    showAge(){
        console.log('I am 30');
        return 'I am 30'
    }


}