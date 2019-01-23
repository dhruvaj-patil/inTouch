import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client Side Error or network Error
      console.error(`An Error Occured: ${error.error.message}`);
    } else {
      console.error(`
      Backend Returned Code: ${error.status}, \n
      Body was : ${error.error}
      `);
    }
    return throwError(`Something bad happened at the client side`);
  }

  public geList(): Observable<any> {
    return this.http.get("assets/contacts.json")
    .pipe(
      map((res:any) => {
        // console.log(res);
        if(res){
          return res;
        }
      }),
      catchError(this.handleError)
    );
  }

}
