import {Component, Inject, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {finalize} from 'rxjs/operators';
import {CollegeDataInterface, COLLAGE_TOKEN$, collegeData} from './college.providers';
import {default_college_translations_EN} from '../translations';
import {Observable, of} from 'rxjs';


@Component({
   selector: 'app-college',
   templateUrl: './college.component.html',
   styleUrls: ['./college.component.scss'],
   providers: [
      {
         provide: COLLAGE_TOKEN$,
         useValue: of(collegeData)
      }
   ]
})

export class CollegeComponent implements OnInit {

   college?: CollegeDataInterface;

   //translations?: Object;
   translations?: Object;

   isLoading = true;
   defaultTranslations = default_college_translations_EN;

   constructor(
      @Inject(COLLAGE_TOKEN$) readonly college$: Observable<CollegeDataInterface[]>
   ) {}

   ngOnInit() {
      this.getCollege();

      this.translations = this.defaultTranslations
   }

   getCollege(): void {

      this.college$.subscribe(college => {
         this.college = college[0];
      });

   }

}
