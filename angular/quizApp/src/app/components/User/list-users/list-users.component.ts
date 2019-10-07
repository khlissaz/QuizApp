import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modeles/user';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  currentUser: User;
  users: User[];

  ModForm: FormGroup;
  searchKey:String;
  p: number = 1;
  constructor(private userService: UserService,private dialog: MatDialog,public authService: AuthenticationService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.ModForm = new FormGroup({
      _id:new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      userName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    
      
    })


  }

  listData: MatTableDataSource<any>;

  ngOnInit() {
    this.loadAllUsers();

  }


  loadAllUsers() {
    this.userService.getAll().subscribe((result:User[]) => {
      this.users = result;
      console.log(this.users);
    });
  }
  DevenirAdmin(user){
 
user.role="Admin";

this.userService.update(user).subscribe(() => { 
  this.loadAllUsers() ;
   
});
}

  DevenirUser(user){
    
   user.role="User";
   
   this.userService.update(user);
   this. loadAllUsers()
     }
  deleteUser(user) {
    if(confirm('Are you sure to delete this User?')){
    this.userService.delete(user).subscribe(() => { 
        this.loadAllUsers() 
    });
  }
}


edit(user) {
  console.log(user.email);
 
  //console.log(user.admin);
  this.userService.populateForm(user);
console.log(user)
 this.ModForm.setValue({
    _id:user._id,
  firstName: user.firstName,
  lastName: user.lastName,
  userName: user.userName,
  email: user.email,
  password: user.password,

});

}

updateUser( ) {
  if (confirm('Are you sure to update this user?')){
  this.userService.update(this.ModForm.value).subscribe(() => { 
   
    this.loadAllUsers() ;
     
  });
}
}


}
