import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutRoutingModule} from './about-routing.module';
import {CollegeComponent} from './college/college.component';

@NgModule({
    declarations: [CollegeComponent],
    imports: [CommonModule, AboutRoutingModule]
})
export class AboutModule {
}
