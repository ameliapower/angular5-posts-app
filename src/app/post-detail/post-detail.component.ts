import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Subscription } from 'rxjs/Subscription';

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
		private postService: PostService
	) { }

	

	ngOnInit() {
		this.getPostId();
	}

	getPostId() {
	const id = +this.route.snapshot.paramMap.get('id');
		this.postService.getPostId(id).subscribe(
			post => {
				this.post = post;
				this.title = post.title;
				this.body = post.body;
			},
			// .subscribe(post => this.post = post);
			error => this.errorMessage = <any>error);
	}



	// getting the id in ngOnInit below or in getPostId() above:
	// ngOnInit(): void {
	// 	this.subcription = this.route.params.subscribe(
	// 		params => {
	// 			let id = +params['id'];
	// 			this.getPostId(id);
	// 		});
	// }


	// getPostId(id: number) {
	// 	this.postService.getPostId(id).subscribe(
	// 		post => {
	// 			this.post = post;
	// 			this.title = post.title;
	// 			this.body = post.body;
	// 		},
	// 		error => this.errorMessage = <any>error);
	// }




}
