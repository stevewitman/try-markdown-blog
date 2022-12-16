import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  parseMarkdown(md$: Observable<string>): Observable<string> {
    const marked = require('marked');
    return md$.pipe(map((data: any) => {
      return marked.parse(data);
    }));
  }
  
}
