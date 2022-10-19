import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorPageComponent} from './components/error-page/error-page.component';


const routes: Routes = [
    {path: '', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
    {path: 'error', component: ErrorPageComponent},
    {path: '**', redirectTo: '/error'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
