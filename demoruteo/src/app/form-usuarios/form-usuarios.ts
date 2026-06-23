import { Component } from '@angular/core';
import { DemoRest, Usuario } from '../servicios/demo-rest';
import { inject, Injectable } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-usuarios',
  imports: [CommonModule, FormsModule],
  templateUrl: './form-usuarios.html',
  styleUrl: './form-usuarios.css',
})
export class FormUsuarios {
  private demoService = inject(DemoRest);
  response?: Usuario;

  onNuevo(form: NgForm) {
    console.log('Data del formulario:', form.value);
    const nuevo: Usuario = { nombre: form.value.nombre };
    this.demoService.crearUsuario(nuevo).subscribe({
      next: (data) => console.log('Datos recibidos del servicio:', data),
      error: (err) => console.error('Error al llamar al servicio:', err),
    });
  }
 
  onSubmit(form: NgForm) {
    console.log('Data del formulario:', form.value);
    this.demoService.getUsuarios().subscribe({
    next: (data) => console.log('Datos recibidos del servicio:', data),
    error: (err) => console.error('Error al llamar al servicio:', err),
    });
  }
}
