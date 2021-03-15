import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '..//..//../environments/environment';

@Injectable()
export class ClientSearchService{

    constructor(private http:HttpClient){
    }


    // pageNo
    getList(pageNo): Observable<any>{
        debugger;
        var url = environment.apiUrl + "api/ClientSearch/GetDirect";
            if(pageNo > 0){
                 url += "?page=" + pageNo;
            }

        return this.http.get(url);
    }



}
