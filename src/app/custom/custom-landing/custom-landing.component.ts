import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/books-detail.service';
import { FamilyFactoryService } from 'src/app/services/family-factory.service';
import {Book} from '../Book';
import { ActorService } from '../services/actor.service';

@Component({
  selector: 'app-custom-landing',
  templateUrl: './custom-landing.component.html',
  styleUrls: ['./custom-landing.component.css'],
})
export class CustomLandingComponent implements OnInit {
  fact: string;
  age:any;
  booksDet: Book[]
  actorName:string = '';

  constructor(private familyFactory: FamilyFactoryService,private bookService: BookService, private actor:ActorService) { 
    let familyMember = familyFactory.getFamilyMember('FATHER');
    this.fact = familyMember.showFamily();
    this.age = familyFactory.showAge();
    this.booksDet = this.bookService.getBooks();
    this.actorName = this.actor.sendMessage();
  }

  ngOnInit(): void {
  }

}
