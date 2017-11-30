import { Component, OnInit } from '@angular/core';
import { IUser } from 'app/user';
import { UserService } from 'app/user.service';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html'
})
export class PersonalDetailsComponent implements OnInit {

  user: IUser;
  /*address: string;
  city: string;
  name: string;*/
  showAdd:boolean = false;
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.loadPersonalDetails();
  }

  loadPersonalDetails() : void {
    this.userService.getUser(2).subscribe((returnedUser) =>{
      this.user = returnedUser; 

      })
  }

  updateUser() {
    this.userService.updateUser(1, this.user).subscribe(()=>{
      console.log(this.user);
    })
  };

  showAddress(){
    this.showAdd = true; 
  }

 

}
