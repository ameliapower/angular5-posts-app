import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Post } from '../post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostService]
})
export class PostListComponent implements OnInit {

	errorMessage: string = '';
	posts : Post[];

	constructor(private postService: PostService) { }

	ngOnInit() {
		this.getPosts();
	}

	getPosts(): void {
		this.postService.getPosts()
		.subscribe(posts => this.posts = posts,
			error => this.errorMessage = <any>error)
			// () => console.log(this.posts, `done`)
	}

}
