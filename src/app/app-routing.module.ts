import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityListComponent } from './features/city-details/components/city-list/city-list.component';
import { CityFormComponent } from './features/city-details/components/city-form/city-form.component';

const routes: Routes = [

    { path: 'city', component: CityListComponent },
    { path: 'city/form', component: CityFormComponent },
    { path: 'city/form/:id', component: CityFormComponent },
    { path: '', redirectTo: 'city', pathMatch: 'full' },
    { path: '**', redirectTo: 'city', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
