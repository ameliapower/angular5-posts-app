import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AddNewComponent } from './add-new/add-new.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'posts', component: PostListComponent },
	{ path: 'posts/:id', component: PostDetailComponent },
	{ path: 'add-new', component: AddNewComponent },
	{ path: '', redirectTo: '/', pathMatch: 'full' }
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



