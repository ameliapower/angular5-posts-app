import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Post } from '../post';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class PostService {

  constructor( private http: HttpClient ) { }

  private apiUrl = "http://jsonplaceholder.typicode.com/posts";
  private posts: Observable<Post[]>;
  private post: Observable<Post>;

  getPosts():Observable<Post[]> {
  	return this.http.get<Post[]>(this.apiUrl).pipe(
		  tap(posts => console.log(`fetched posts`)),
		  catchError(this.handleError(`getPosts`, []))
	  );
  }

  getPostId(id: number):Observable<Post>{
  	const idUrl = `${this.apiUrl}/${id}`;
  	return this.http.get<Post>(idUrl).pipe(
	 		tap(_ => console.log(`PostService : id=${id} post fetched`)),
	 		catchError(this.handleError<Post>(`get post id=${id}`))
	 	);
  }
 


/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    // this.log(`${operation} failed: ${error.message}`);
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
