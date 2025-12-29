import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { LeadStatusService } from '../../services/lead-status.service';
import { PaginationService } from '../../../shared/components/pagination/pagination.service';
import { LeadStatusTable } from '../../components/lead-status-table/lead-status-table';
import { Pagination } from '../../../shared/components/pagination/pagination';
import { LeadStatus } from '../../interfaces/lead-status.interface.response';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-lead-status-list',
  imports: [LeadStatusTable, Pagination, ToolbarModule, ButtonModule, RouterLink],
  templateUrl: './lead-status-list.html',
})
export class LeadStatusList {

  leadStatusService = inject(LeadStatusService);
  paginationService = inject(PaginationService);
  router = inject(Router);

  leadStatusResource = rxResource({
    params: () => ({ page: this.paginationService.currentPage(), limit: this.paginationService.limitPerPage() }),
    stream: ({ params }) => {
      return this.leadStatusService.getLeadStatus({
        offset: (params.page - 1) * params.limit,
        limit: params.limit
      });
    },
  });

  editLeadStatus(leadStatus: LeadStatus) {
    this.router.navigate(['/lead-status/detail', leadStatus.id]);
  }

  deleteLeadStatus(leadStatus: LeadStatus) { }


}
