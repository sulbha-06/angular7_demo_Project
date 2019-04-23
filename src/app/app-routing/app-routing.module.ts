import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule , Routes} from   '@angular/router';
import { HomeComponent } from '../components/components/home/home.component';
import { HelpComponent } from '../components/components/help/help.component';
import { ContactComponent } from '../components/components/contact/contact.component';
import { LoginComponent } from '../components/components/login/login.component';
import { ArticlesComponent } from '../components/components/articles/articles.component';
import { ChildArticleComponent } from '../components/components/articles/child-article/child-article.component';
import { RegisterComponent } from '../components/components/register/register.component';
import { RegisterModelFormComponent } from '../components/register-model-form/register-model-form.component';
import { ProfileEditorComponent } from '../components/profile-editor/profile-editor.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent      
    },
    {
      path: 'home',
      component: HomeComponent      
  },
    {
      path: 'help',
      component: HelpComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },{
      path:'login',
      component: LoginComponent
    },{
      path:'article',
      component: ArticlesComponent
    },
    {
      path:'childArticle/id',
      component: ChildArticleComponent
    },
    // {
    //   path:'profileEditor',
    //   component:ProfileEditorComponent
    //  },
    {
      path:'register',
      component:RegisterComponent
    },
    {
      path:'reactiveForm',
      component:RegisterModelFormComponent
    },
    {
      path:'childArticle',
      component: ChildArticleComponent
    },
    {
      path:'**',
      component: HomeComponent //need to be replaced by page notfound
    }


];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports :[
    RouterModule
  ]
})
export class AppRoutingModule { }
