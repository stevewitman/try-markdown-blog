![Avatar](/assets/images/steve-50.png)


###### [Steve Witman](https://stevewitman.com)
###### Posted Dec 14, 2022 (revised Dec 17, 2022)

# Create blog posts in your Angular app with Markdown


###### [Markdown](https://nba.com)

###### [All Tags](https://angular.io)

> In this post we use the MarkedJS library to convert markdown files to HTML and display in an Angular app.

## Install MarkedJS Library

##### npm install -g marked

## Create a Markdown File

For simplicity sake, in this example we will put a *sample markdown file in the `assets` folder.

#### assets/blogs/sample.md

```md
# H1

## H2

### H3

This is a paragraph.

> This is a blockquote

`test`
```


## Create Blog Service

JUNK test paragraph

##### ng g s blog

#### blog.service.ts

```ts
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
```

## Create Markdown Service

##### ng g s markdown

#### markdown.service.ts

```ts
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
```

## Testing

- TODO

## Notes

- In this example we put our markdown files are in the `assets` folder. This is not scalable because everything in the assets folder becomes part of the initial load bundle. In a production application we would retrieve markdown files from a database or consider server side rendering (SSR).

- Using 3rd party libraries often have negative impacts including increased bundle size, limited library maintenance, security vulnerabilities, dependency comatibility issues, and other future upgrade complications.

## References

- [MarkedJS Docs](https://marked.js.org)

- [MarkedJS Demo](https://marked.js.org/demo/)

- [MarkedJS GitHub](https://github.com/markedjs/marked)

---

## Another test section

In this example we put our markdown files are in the `assets` folder. This is not scalable because everything in the assets folder becomes part of the initial load bundle. In a production application we would retrieve markdown files from a database or consider server side rendering (SSR).

In a production application we would retrieve markdown files from a database or consider server side rendering (SSR).

### This is a subtitle

- In a production application we would retrieve markdown files from a database or consider server side rendering (SSR).

- In this example we put our markdown files are in the `assets` folder. This is not scalable because everything in the assets folder becomes part of the initial load bundle.

JUNK test paragraph

JUNK test paragraph

> In this example we put our markdown files are in the `assets` folder. This is not scalable because everything in the assets folder becomes part of the initial load bundle.

JUNK test paragraph

JUNK test paragraph

- In this example we put our markdown files are in the `assets` folder. This is not scalable because everything in the assets folder becomes part of the initial load bundle.


```
111111111122222222223333333333111111111122222222223333333333
  ```