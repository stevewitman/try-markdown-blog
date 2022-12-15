import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
// import * as marked from 'marked';

import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blogMarkdown$: Observable<String> = of('');
  blogParsed: string = '';

  constructor(
    private blogService: BlogService,
    // private markedParser: marked.Parser
  ) {}

  ngOnInit() {
    const marked = require('marked');
    this.blogMarkdown$ = this.blogService.getBlog('01');
    this.blogMarkdown$.subscribe(data => {
      console.log('data:', data);
      this.blogParsed = marked.parse(data)
      console.log('parsed:', this.blogParsed);
      
    })
  }
}
