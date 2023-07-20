import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSlickgridModule } from 'angular-slickgrid';
import { CityDetailsRoutingModule } from './city-details-routing.module';
import { MatCardModule } from '@angular/material/card';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    
   
  ],
  imports: [
    CommonModule,
  CityDetailsRoutingModule,AngularSlickgridModule.forRoot({}),BrowserAnimationsModule,
  MatCardModule,FormsModule,MatButtonModule,MatInputModule,HttpClientModule,
  MatFormFieldModule,ReactiveFormsModule,MatExpansionModule,MatIconModule,MatPaginatorModule,
  MatDatepickerModule,MatNativeDateModule,MatSelectModule, MatRadioModule,MatCheckboxModule
  ]
})
export class CityDetailsModule { }
