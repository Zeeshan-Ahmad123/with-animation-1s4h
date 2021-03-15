import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '..//..//../environments/environment';

@Injectable()
export class ClientSearchService {

    constructor(private http: HttpClient) {
    }


    // pageNo
    getList(txtForname, txtSurname): Observable<any> {
        debugger;
        var url = environment.apiUrl + "api/ClientSearch/SearchClient";
        if (txtForname != '' && txtSurname != '') {
            url += "?fn=" + txtForname + "&sn=" + txtSurname;
        }
        return this.http.get(url);
    }



}
