import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class GetLookupService{

    constructor(private http:HttpClient){
    }

    // pageNo
    getList(): Observable<any>{
        // debugger;
        var url = environment.apiUrl + "api/Employee/GetLookUpList";
            // if(pageNo > 0){
            //      url += "?page=" + pageNo;
            // }

        return this.http.get(url);
    }


    getUserList(): Observable<any>{
        // debugger;
        var url = environment.apiUrl + "api/Employee/GetUserList";
            // if(pageNo > 0){
            //      url += "?page=" + pageNo;
            // }

        return this.http.get(url);
    }



}
