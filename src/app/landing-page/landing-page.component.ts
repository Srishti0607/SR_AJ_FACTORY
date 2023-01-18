import { Component, OnInit } from '@angular/core';
import {FamilyFactoryService} from '../services/family-factory.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  fact: string;
  age:any;

  constructor(private familyFactory: FamilyFactoryService) { 
    let familyMember = familyFactory.getFamilyMember('MOTHER');
    this.fact = familyMember.showFamily();
    this.age = familyFactory.showAge();
  }

  ngOnInit(): void {
  }

 }
