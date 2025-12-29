import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LeadResponse } from '../interfaces/lead.interface.response';
import { Observable, tap } from 'rxjs';

const baseUrl = environment.baseUrl;

interface Options {
    limit?: number;
    offset?: number;
}


@Injectable({ providedIn: 'root' })
export class LeadService {

    private http = inject(HttpClient);

    getLeads(options: Options): Observable<LeadResponse> {
        const { limit = 10, offset = 0 } = options;
        return this.http.get<LeadResponse>(`${baseUrl}/leads`, {
            params: {
                limit,
                offset
            }
        }).pipe(tap(resp => console.log(resp)));
    }

}