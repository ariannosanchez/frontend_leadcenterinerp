import { Component, inject, input } from '@angular/core';
import { Lead } from '../../interfaces/lead.interface.response';
import { LeadService } from '../../services/lead.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-lead-form',
  imports: [DialogModule, ButtonModule, InputTextModule, SelectModule],
  templateUrl: './lead-form.html',
})
export class LeadForm {

  // lead = input.required<Lead>();
  leadService = inject(LeadService);

  fb = inject(FormBuilder);

  leadForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    leadStatusId: ['', Validators.required],
    userId: ['', Validators.required],
    isActive: [true],
  });

}
