import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User, UsersResponse } from '../interfaces/user.interface.response';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

const baseUrl = environment.baseUrl;

interface Options {
    limit?: number;
    offset?: number;
}

@Injectable({ providedIn: 'root' })
export class UsersService {

    private http = inject(HttpClient);

    getUsers(options: Options): Observable<UsersResponse> {

        const { limit = 10, offset = 0 } = options;

        return this.http.get<UsersResponse>(`${baseUrl}/users`, {
            params: {
                limit,
                offset,
            }
        })
            .pipe(tap(resp => console.log(resp)));
    }

    getUserById(id: string): Observable<User> {
        return this.http.get<User>(`${baseUrl}/users/${id}`)
            .pipe(tap(resp => console.log(resp)));
    }

}