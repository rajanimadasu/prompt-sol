import { Component } from '@angular/core';
import {Router} from '@angular/router';
import emailjs from '@emailjs/browser';


declare let Email : any;


@Component({
  selector: 'app-contactus-form',
  templateUrl: './contactus-form.component.html',
  styleUrls: ['./contactus-form.component.css']
})
export class ContactusFormComponent {
  constructor(private router : Router){

  }
  public userName? : string;
  public email? : string;
  public msg? : string;
  public userMobile? : number;
  

  async onSubmit() {
    
    emailjs.init('tjT8-hLDjU4x0-xgR');

    let response = await emailjs.send("service_ch4h8qw","template_fmikq0h",{
      from_name: this.userName,
      to_name: "Admin",
      message: this.msg,
      from_email: this.email,
      mobile: this.userMobile,
      });
      this.router.navigateByUrl('/thankyou');
  }

}

