import { Component, inject } from '@angular/core';
import { LeadService } from '../../services/lead.service';
import { PaginationService } from '../../../shared/components/pagination/pagination.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { LeadTable } from '../../components/lead-table/lead-table';
import { Pagination } from '../../../shared/components/pagination/pagination';
import { LeadForm } from '../../components/lead-form/lead-form';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lead-list',
  imports: [LeadTable, Pagination, LeadForm, ToolbarModule, ButtonModule, RouterLink],
  templateUrl: './lead-list.html',
})
export class LeadList {

  leadService = inject(LeadService);
  paginationService = inject(PaginationService);

  leadResource = rxResource({
    params: () => ({ page: this.paginationService.currentPage(), limit: this.paginationService.limitPerPage() }),
    stream: ({ params }) => {
      return this.leadService.getLeads({
        offset: (params.page - 1) * params.limit,
        limit: params.limit
      });
    },
  });

}
