import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[RegisterService]
})
export class RegisterComponent  {

  registerResponse = {message:""};
  constructor(private registerService:RegisterService,private router:Router )
  {

  }
  RegisterDetails(RegisterForm){
    console.log("register user called");
    
    let userDetails={
      "firstName" : RegisterForm.value.firstName,
      "lastName" : RegisterForm.value.lastName,
      "emailId" : RegisterForm.value.emailId,
      "password" : RegisterForm.value.password,
      "mobileNumber" : RegisterForm.value.mobileNumber,
    }
    console.log(userDetails);
    this.registerService.goAndRegisterUser(userDetails)
    .subscribe(

     (response) =>{
          this.registerResponse=response.json(),
          console.log("res:"+this.registerResponse.message);
         if(this.registerResponse.message === "Registration successful")
         {
             this.router.navigate(['login']);      
         }
        (error) =>
        {
          alert("Registration failed due to technical challenges");
       }
      }
  
    );
    
  }

}