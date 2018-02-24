import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AppComponent } from './app.component';

const routes: Routes = [
	{ path: 'posts', component: PostListComponent },
	{ path: 'posts/:id', component: PostDetailComponent },
	{ path: '', redirectTo: '/posts', pathMatch: 'full' }
];


@NgModule({
	imports: [ 
		RouterModule.forRoot(routes) 
	], 
	exports: [ 
		RouterModule 
	] 
})


export class AppRoutingModule { }



