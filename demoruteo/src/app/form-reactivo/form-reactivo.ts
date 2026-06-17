import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-form-reactivo',
  imports: [ReactiveFormsModule],
  templateUrl: './form-reactivo.html',
  styleUrl: './form-reactivo.css'
})
export class FormReactivo implements OnInit {
  miForm!: FormGroup;
 
  constructor(private fb: FormBuilder) {
  }
   
  ngOnInit() {
    this.miForm = this.fb.group({
      nombre: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      pais: ['PE', Validators.required], // 'PE' como valor inicial por defecto
      genero: ['', Validators.required],
      fecha: ['', Validators.required],
      experiencia: [5], // Inicia en el punto medio del rango (1-10)
      comentarios: [''],
      terminos: [false, Validators.requiredTrue] // requiredTrue obliga a que esté marcado (true)
    });
  }

  onEnviar() {
    console.log('Data:', this.miForm.value);
  }

  get f() { return this.miForm.controls; }
}


