import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({ 
  selector: 'app-form-plantilla',
  imports: [CommonModule, FormsModule],
  templateUrl: './form-plantilla.html',
  styleUrl: './form-plantilla.css'
})
export class FormPlantilla {
  onSubmit(form: NgForm) {
    console.log('Data del formulario:', form.value);
  }
}

