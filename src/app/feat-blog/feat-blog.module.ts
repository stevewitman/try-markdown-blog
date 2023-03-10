import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { FeatBlogRoutingModule } from './feat-blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';


@NgModule({
  declarations: [BlogListComponent, BlogDetailComponent],
  imports: [CommonModule, FeatBlogRoutingModule, MatButtonModule],
})
export class FeatBlogModule {}
