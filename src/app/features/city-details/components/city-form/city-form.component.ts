import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent implements OnInit {
  cityForm: FormGroup | undefined;
form: any;
  isFormCollapsed: boolean | undefined;

  constructor(private formBuilder: FormBuilder) { }
  
  toggleFormCollapse() {
    this.isFormCollapsed = !this.isFormCollapsed;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      generalInfo: this.formBuilder.group({
        cityName: ['', Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[a-zA-Z0-9]*$')],
        state: ['', Validators.required],
        sequence: ['', Validators.required],
        isExcluded: ['', Validators.required],
        anchorTag: [''],

        cityCode: ['', Validators.required, Validators.minLength(1), Validators.maxLength(20)],
        target: ['', Validators.required, Validators.minLength(1), Validators.maxLength(9)],
        fromDate: ['', Validators.required,[this.dateValidator()]],
        status: [''],
        region: ['',Validators.required],
        
        description: ['', Validators.required, Validators.minLength(1), Validators.maxLength(200)],
        country: ['', Validators.required],
        isRestricted: ['', Validators.required],
        toDate: ['', Validators.required], 
        
      })
    });

 
  }
  dateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const selectedDate = new Date(control.value);
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0); 

      if (selectedDate < currentDate) {
        return { 'invalidDate': true };
      }
      return null;
    };
  }
  saveForm() {
    console.log(this.form.value);
  }

  saveAndContinueForm() {
    console.log(this.form.value);

  }

  goBack() {
    console.log('Back button clicked');

  }
}


