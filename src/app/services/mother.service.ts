import { Injectable } from '@angular/core'
import { Family } from '../family';
@Injectable({
    providedIn: 'root'
})
export class MotherService implements Family {
    constructor() { }

    
    showFamily() {
        console.log('I am a mother');
        return 'I am a mother';
    }

}