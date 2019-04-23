import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/components/header/header.component';
import { FooterComponent } from './components/components/footer/footer.component';
import { HomeComponent } from './components/components/home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HelpComponent } from './components/components/help/help.component';
import { ContactComponent } from './components/components/contact/contact.component';
import { LoginComponent } from './components/components/login/login.component';
import { ArticlesComponent } from './components/components/articles/articles.component';
import { ChildArticleComponent } from './components/components/articles/child-article/child-article.component';
import { ChangeTextDirective } from './components/components/change-text.directive';
import { RegisterComponent } from './components/components/register/register.component';
import { RegisterModelFormComponent } from './components/register-model-form/register-model-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HelpComponent,
    ContactComponent,
    LoginComponent,
    ArticlesComponent,
    ChildArticleComponent,
    ChangeTextDirective,
    RegisterComponent,
    RegisterModelFormComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
