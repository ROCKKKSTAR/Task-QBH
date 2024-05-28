import { Component, Input, SimpleChanges } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormComponent, TableComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userData: any[] =[]
  showTable: boolean = false;
  newUser: boolean = false;
  dataSourceUserData: any;

  constructor( private userService: UserService) { }

  ngOnInit() {
    this.newUser = true
    // console.log('userData', this.userData)
  }

  ngOnChange(change: SimpleChanges){
    this.userData = this.userService.getUsers();
    // this.dataSourceUserData = new MatTableDataSource(this.userData)
  }

  showUserData(inputValue: Event): void {
    console.log('inputValue', inputValue)
    const formEvent = inputValue as Event & { status: boolean,formData: any };
    // this.userData.push(formEvent.formData);
    
    this.userData = this.userService.getUsers();
    this.showTable = formEvent.status
    this.newUser = false
  }

  addNewUserData(value: Event): void{
    const formEvent = value as Event & { status: boolean};
    this.newUser = formEvent.status

  }

}
