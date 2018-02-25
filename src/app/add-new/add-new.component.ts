import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Post } from '../post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css'],
  providers: [ PostService]
})

export class AddNewComponent implements OnInit {

	post: Post = { //binding a model that must adhere to the Post Class
	    title: '',
	    body: '',
	    id: null,
	    userId: null
	};
	errorMessage: string = '';
	value: any = {};

	posts : Post[]; 
	// post: Post;

	constructor(private postService: PostService) { }

	ngOnInit() {
		this.getPosts();
	}

	getPosts(): void {
		this.postService.getPosts()
		.subscribe(posts => this.posts = posts,
			error => this.errorMessage = <any>error)
	}


	addPost({ value, valid }: { value: value, valid: boolean }) {
		console.log(value, valid);
		// console.log(value.title);
		this.postService.addPost(value).subscribe(
				value => { this.posts.unshift(value); }
				// console.log(this.posts),
		);
	}

}
