import { Component, OnInit } from '@angular/core';
import { IUser } from 'app/user';
import { UserService } from 'app/user.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html'
})
export class PersonalDetailsComponent implements OnInit {
  http: any;

  user: IUser;
  /*address: string;
  city: string;
  name: string;*/
  showAdd:boolean = false;
  editPersonalDetails: boolean = true;
  savePersonalDetails: boolean = false;
  myform:boolean = false;
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.loadPersonalDetails();
  }

  loadPersonalDetails() : void {
    this.userService.getUser(5).subscribe((returnedUser) =>{
      this.user = returnedUser; 

      })
  }
  editUserDetails(){
    this.savePersonalDetails = true;
    this.editPersonalDetails = false;
  }

  updateUser(name, street, city, county, eircode, email,) {
    
    var user = { 
      iduser: "5",
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
