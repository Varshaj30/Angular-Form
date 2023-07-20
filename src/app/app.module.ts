import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularSlickgridModule } from 'angular-slickgrid';
import { CityListComponent } from './features/city-details/components/city-list/city-list.component';
import { CityFormComponent } from './features/city-details/components/city-form/city-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AppComponent,CityListComponent,CityFormComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, AngularSlickgridModule.forRoot({}), BrowserAnimationsModule, 
    MatCardModule,FormsModule,MatButtonModule,MatInputModule,HttpClientModule,
    MatFormFieldModule,ReactiveFormsModule,MatExpansionModule,MatIconModule,MatPaginatorModule,
    MatDatepickerModule,MatNativeDateModule,MatSelectModule,MatSlideToggleModule,
    MatCheckboxModule,MatRadioModule
  ],
  exports: [
    AngularSlickgridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
