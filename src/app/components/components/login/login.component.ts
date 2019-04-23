import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public  uname:String = '';
  public  pwrd:String = '';
  public  successFlag:boolean = false;
  // router: Router;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log("user name is :"+this.uname);
  }

  loginCheck(){
    console.log("loginCheck user name is :"+this.uname);
    console.log("loginCheck user name is :"+this.pwrd);
    if(this.uname === "sulbha" && this.pwrd === "1234"){
       this.router.navigate(['/article']);
    }else{
      this.successFlag =true;
      this.uname = '';
      this.pwrd = '';
   // this.router.navigate(['/home']);
    }
  }

}
