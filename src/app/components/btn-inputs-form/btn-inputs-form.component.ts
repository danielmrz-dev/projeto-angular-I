import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-btn-inputs-form',
  templateUrl: './btn-inputs-form.component.html',
  styleUrl: './btn-inputs-form.component.scss'
})
export class BtnInputsFormComponent {
  form: FormGroup;
  agendamento = {
    servico: "",
    data: "",
    hora: "",
    profissional: "",
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      service: ['corte', Validators.required],
      date: ['', Validators.required],
      hour: ['', Validators.required],
      professional: ['marcely', Validators.required],
    });
  }

  @Output() enviaInfosAgendamento = new EventEmitter<any>();

  onSubmit(): void {
    if (this.form.valid) {
      this.enviaInfosAgendamento.emit(this.agendamento)
      console.log(this.agendamento);
      
      this.agendamento = {
        servico: "",
        data: "",
        hora: "",
        profissional: "",
      }
      const formData = this.form.value;
      localStorage.setItem('formData', JSON.stringify(formData));
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}
