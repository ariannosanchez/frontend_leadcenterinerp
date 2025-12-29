import { Component, effect, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { LeadStatusService } from '../../services/lead-status.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LeadStatusForm } from '../../components/lead-status-form/lead-status-form';

@Component({
  selector: 'app-lead-status-detail',
  imports: [ProgressSpinnerModule, LeadStatusForm],
  templateUrl: './lead-status-detail.html',
})
export class LeadStatusDetail {

  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)
  leadStatusService = inject(LeadStatusService)

  leadStatusId = toSignal(
    this.activatedRoute.params.pipe(
      map(params => params['id'])
    )
  );

  leadStatusResource = rxResource({
    params: () => ({ id: this.leadStatusId() }),
    stream: ({ params }) => {
      return this.leadStatusService.getLeadStatusById(params.id);
    },
  });

  redirectEffect = effect(() => {
    if (this.leadStatusResource.error()) {
      this.router.navigate(['/lead-status/list']);
    }
  });

}
