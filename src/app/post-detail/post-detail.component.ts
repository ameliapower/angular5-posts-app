import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; 

// import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';


import { PostService } from '../services/post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostService]
})

export class PostDetailComponent implements OnInit {

	errorMessage: string = '';
	title: string = '';
	body: string = '';
	// private subcription: Subscription;
	post: Post;

	
	// @Input() post: Post; 

	constructor(
		private route: ActivatedRoute,
		private location: Location, // ng - for interacting with the browser, navigating-gives access to back forward etc, has to be imported and defined here in constructor
		private postService: PostService
	) { }
	

	ngOnInit() {
		this.getPostId();
	}

	getPostId() {
		// const id = this.route.params.value.id;
		const id = +this.route.snapshot.paramMap.get('id');
		this.postService.getPostId(id).subscribe(
			post => {
				this.post = post;
				this.title = post.title;
				this.body = post.body;
				// this.id = id;
			},
			// .subscribe(post => this.post = post);
			error => this.errorMessage = <any>error);
	}

	goBack(): void {
		this.location.back();
	}

	updatePost(): void {
		console.log(this.post);
		this.postService.updatePost(this.post).subscribe(
			() => this.goBack()
		);
	}


}
