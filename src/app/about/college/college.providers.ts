import {InjectionToken} from '@angular/core';


export interface CollegeDataInterface {
   id: number;
   name: string;
   photo: string;
   about: string;
   media_type?: number;
   vimeo_video_id?: number;
}

export const collegeData: CollegeDataInterface[] = [
   {
      id: 5,
      name: 'Tom',
      photo: 'https://cdn.icon-icons.com/icons2/582/PNG/512/man_icon-icons.com_55040.png',
      about: 'some text about'
   }
];


export const COLLAGE_TOKEN$ = new InjectionToken<CollegeDataInterface>('COLLAGE_TOKEN$');







