import { Component, input, output } from '@angular/core';
import { LeadStatus } from '../../interfaces/lead-status.interface.response';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-lead-status-table',
  imports: [TableModule, TagModule, ButtonModule],
  templateUrl: './lead-status-table.html',
})
export class LeadStatusTable {

  leadStatus = input.required<LeadStatus[]>();
  edit = output<LeadStatus>();
  delete = output<LeadStatus>();

}
