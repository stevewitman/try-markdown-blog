import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';

import { BlogService } from '../blog.service';
import { MarkdownService } from '../markdown.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  blogMarkdown$: Observable<string> = of('');
  blogHTML$: Observable<string> = of('');

  constructor(
    private blogService: BlogService,
    private markdownService: MarkdownService
  ) {}

  ngOnInit() {
    this.blogMarkdown$ = this.blogService.getBlog('marked-js');
    // this.blogMarkdown$ = this.blogService.getBlog('sample');
    this.blogHTML$ = this.markdownService.parseMarkdown(this.blogMarkdown$);
  }
}
