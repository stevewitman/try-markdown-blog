import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlog(id: string): Observable<string> {
    return this.http.get(`assets/blogs/${id}.md`, { responseType: 'text' });
  }

}
