import { Component, inject, input, OnInit } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { LeadStatus } from '../../interfaces/lead-status.interface.response';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorLabel } from "../../../shared/components/form-error-label/form-error-label";
import { LeadStatusService } from '../../services/lead-status.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lead-status-form',
  imports: [ReactiveFormsModule, FluidModule, InputTextModule, ButtonModule, FormErrorLabel],
  templateUrl: './lead-status-form.html',
})
export class LeadStatusForm implements OnInit {

  leadStatus = input.required<LeadStatus>();
  leadStatusService = inject(LeadStatusService);
  router = inject(Router);

  fb = inject(FormBuilder);

  leadStatusForm = this.fb.group({
    name: ['', Validators.required],
  });

  ngOnInit(): void {
    this.setFormValue(this.leadStatus());
  }

  setFormValue(formLike: Partial<LeadStatus>) {
    this.leadStatusForm.reset(formLike);
  }

  onSubmit() {
    const isValid = this.leadStatusForm.valid;
    this.leadStatusForm.markAllAsTouched();

    if (!isValid) return;
    const formValue = this.leadStatusForm.value;

    const leadStatusLike: Partial<LeadStatus> = {
      ...(formValue as LeadStatus),
    };

    if (this.leadStatus().id === 'new') {
      //Crear LeadStatus
      this.leadStatusService.createLeadStatus(leadStatusLike).subscribe(
        leadStatus => {
          console.log('LeadStatus creado');
          this.router.navigate(['/lead-status/detail', leadStatus.id]);
        }
      )
    } else {
      //Actualizar LeadStatus
      this.leadStatusService.updateLeadStatus(this.leadStatus().id, leadStatusLike).subscribe(
        leadStatus => {
          console.log('LeadStatus actualizado');
        }
      );
    }

  }

}
