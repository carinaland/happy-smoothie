import { Component, OnInit } from '@angular/core';
import { IUser } from 'app/Interfaces/user';
import { UserService } from 'app/providers/user.service';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html'
})
export class PersonalDetailsComponent implements OnInit {
  http: any;

  user: IUser;
 
  showAdd:boolean = false;
  editPersonalDetails: boolean = true;
  savePersonalDetails: boolean = false;
  myform:boolean = false;
 public userIDCookie;
 userIDlast: any;
  constructor(private userService : UserService, private cookieService: CookieService) { }

  ngOnInit() {
    this.loadPersonalDetails();
  }

  loadPersonalDetails()
{
  console.log("userIDCookie check")
  this.userIDCookie = this.cookieService.get('userID');
  console.log(this.userIDCookie);
 
    this.userService.getUserById(this.userIDCookie).subscribe((returnedUser) =>{
      this.user = returnedUser; 

      console.log("userName" + this.user.name)
      })
  }

 
  editUserDetails(){
    this.savePersonalDetails = true;
    this.editPersonalDetails = false;
  }

  updateUser(name, street, city, county, eircode, email,) {

    this.userIDCookie = this.cookieService.get('userID');
    var user = {
      iduser: this.userIDCookie,
      name: name.value,
      street: street.value,
      city: city.value,
      county: county.value,
      eircode: eircode.value,
      email: email.value,
    };
    this.userService.updateUser(user).subscribe(res=>{
      var res = res;
      console.log(res);
    })
  };

 /* updateUser() {
    this.userService.updateUser(1, "John").subscribe(() => {
      console.log("component edit user")
    });
  }*/
  
  showAddress(){
    this.showAdd = true; 
  }

 

}
