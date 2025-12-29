import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { LeadStatus, LeadStatusResponse } from '../interfaces/lead-status.interface.response';
import { environment } from '../../../environments/environment';

const baseUrl = environment.baseUrl;

interface Options {
    limit?: number;
    offset?: number;
}

const emptyLeadStatus: LeadStatus = {
    id: 'new',
    name: '',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
}


@Injectable({ providedIn: 'root' })
export class LeadStatusService {

    private http = inject(HttpClient);

    getLeadStatus(options: Options): Observable<LeadStatusResponse> {

        const { limit = 10, offset = 0 } = options;

        return this.http.get<LeadStatusResponse>(`${baseUrl}/lead-status`, {
            params: {
                limit,
                offset
            }
        }).pipe(tap(resp => console.log(resp)));
    }

    getLeadStatusById(id: string): Observable<LeadStatus> {

        if (id === 'new') {
            return of(emptyLeadStatus);
        }

        return this.http.get<LeadStatus>(`${baseUrl}/lead-status/${id}`)
            .pipe(tap(resp => console.log(resp)));
    }

    updateLeadStatus(id: string, leadStatusLike: Partial<LeadStatus>): Observable<LeadStatus> {

        return this.http.patch<LeadStatus>(`${baseUrl}/lead-status/${id}`, leadStatusLike)
            .pipe(tap(resp => console.log(resp)));

    }

    createLeadStatus(leadStatusLike: Partial<LeadStatus>): Observable<LeadStatus> {
        return this.http.post<LeadStatus>(`${baseUrl}/lead-status`, leadStatusLike)
            .pipe(tap(resp => console.log(resp)));
    }

}