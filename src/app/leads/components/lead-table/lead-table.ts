import { Component, input } from '@angular/core';
import { Lead, LeadResponse } from '../../interfaces/lead.interface.response';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lead-table',
  imports: [TableModule, TagModule, ButtonModule, DatePipe],
  templateUrl: './lead-table.html',
})
export class LeadTable {

  lead = input.required<Lead[]>();

}
