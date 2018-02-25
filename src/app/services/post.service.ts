import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Post } from '../post';


const httpOptions = {
  headers: new HttpHeaders({  "Content-type": "application/json; charset=UTF-8" })
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

  // delete(url: string, options?: RequestOptionsArgs): Observable<Response>
  deletePost(post: Post | number):Observable<Post>{  // | number  A union type describes a value that can be one of several types.
    // console.log(typeof post);
    const id = typeof post === 'number' ? post : post.id;
    const idUrl = `${this.apiUrl}/${id}`;
    // console.log(idUrl);
    return this.http.delete<Post>(idUrl, httpOptions).pipe(
      tap(_ => console.log(`delete post id=${id}`)), // _ => explicitly states that one param is passed but ignored. You could use () => and not pass any params.
      catchError(this.handleError<Post>('deletePost'))
    );
  }

  
  // put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>
  updatePost(post: Post):Observable<any>{
    const id = typeof post === 'number' ? post : post.id;
    const idUrl = `${this.apiUrl}/${id}`;
    return this.http.put(idUrl, JSON.stringify(post), httpOptions).pipe(
      tap(_ => console.log(`updating post=${post.title}, id=${post.id}`)),
      catchError(this.handleError<Post>(`updatePost id=${post.id}`))
    );
  }


  // post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>
  addPost(post: Post): Observable<Post>{
    return this.http.post<Post>(this.apiUrl, post, httpOptions).pipe(
      tap(_ => console.log(`adding post=${post}, title=${post.title}, id=${post.id}`)),
      catchError(this.handleError<Post>(`addPost`))
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
    console.error("ERROR is:",  error); // log to console instead

    // TODO: better job of transforming error for user consumption
    // this.log(`${operation} failed: ${error.message}`);
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
