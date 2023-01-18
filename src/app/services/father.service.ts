import { Injectable } from '@angular/core'
import { Family } from '../family';
@Injectable({
    providedIn: 'root'
})
export class FatherService implements Family {
    constructor() { }
    showFamily() {
        console.log('I am a Father');
        return 'I am a Father';
    }

}