import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInjector } from '../app-injector';
import {CustomRoutingModule} from './custom-routing.module';
import{CustomLandingComponent} from './custom-landing/custom-landing.component'
import { FamilyFactoryService } from '../services/family-factory.service';
import { Book, FakeBook } from './Book';
import {BookService,BookDetService} from './services/books-detail.service';
import {NewActorService, ActorService} from './services/actor.service';



@NgModule({
  declarations: [CustomLandingComponent],
  imports: [
    CommonModule,
    CustomRoutingModule
  ],
  providers: [{ provide: FamilyFactoryService, useClass: FamilyFactoryService },
    { provide: BookDetService, useClass: BookDetService }, 
    {provide:'FLAG', useValue:false},
    {
      provide: BookService,
      useFactory: (FLAG,BookDetService) =>
      FLAG ? new FakeBook() : new BookService(BookDetService),
      deps: ['FLAG',BookDetService]
    },
    { provide: ActorService, useExisting: NewActorService },
    {provide: NewActorService, useClass: NewActorService}
  ]
})
export class CustomModule { 
  constructor(private injector: Injector){
    AppInjector.setInjector(injector);
  }
}
