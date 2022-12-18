import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

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
  id: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private markdownService: MarkdownService
  ) {}

  ngOnInit() {
    // this.id = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      console.log('param id:', this.id);
      this.blogMarkdown$ = this.blogService.getBlog(this.id!);
      this.blogHTML$ = this.markdownService.parseMarkdown(this.blogMarkdown$);
    });
    
    
  }
}
