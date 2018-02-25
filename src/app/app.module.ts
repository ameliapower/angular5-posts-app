import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //needed for calls to server
import { FormsModule } from '@angular/forms'; //needed for [(ng-Model)] (2-way binding) 

//Material
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';


//Internal
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostService } from './services/post.service';
import { AppRoutingModule } from './app-routing.module';
import { AddNewComponent } from './add-new/add-new.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailComponent,
    AddNewComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
   
    //Material
    BrowserAnimationsModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule
  ],
  providers: [
    PostService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
