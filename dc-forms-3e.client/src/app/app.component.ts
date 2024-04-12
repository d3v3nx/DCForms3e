import { Component } from '@angular/core';
import { Field } from './components/dynamic-form/dynamic-fields/models/field.model';
import { BehaviorSubject, map } from 'rxjs';
import { JsonReaderService } from './services/json-reader.service';
import { HttpClient } from '@angular/common/http';
import { FormDataService } from './services/FormData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dynamic-form';
  fieldset: Field[] = [];
  formData: any[]=[];

  private fieldsetSubject = new BehaviorSubject<Field[]>([]);

  selectedPatient: any;

  fieldset$ = this.fieldsetSubject.asObservable();

  constructor(private jsonReaderService: JsonReaderService, private http: HttpClient,private formDataService: FormDataService) {}


  selectPatient(patient: any) {
    this.selectedPatient = patient;
    console.log(this.selectedPatient)
  }

  ngOnInit(): void {
    this.jsonReaderService
      .read('/assets/form1.json')
      .pipe(
        map((response) => {
          return response.fields.map((fieldResponse: any) => {
            return {
              controlName: fieldResponse.label,
              label: fieldResponse.label,
              type: fieldResponse.type,
              options: fieldResponse.options,
              disabled: false,
            };
          });
        })
      )
      .subscribe((response) => {
        this.fieldsetSubject.next(response);
      });
      /////////////////////////////////////////////
      this.formDataService.getData().subscribe(
        data => {
          this.formData = data;
        },
        error => {
          console.error('Error fetching data:', error);
        }
      );
  }
}
