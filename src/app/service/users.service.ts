import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  public userList = [
    {id: 1, name: 'John' , img: 'https://i.pinimg.com/originals/11/0b/c0/110bc044a40f3668c39ae70df646765f.png'},
    {id: 2, name: 'Juan' , img: 'https://i.ytimg.com/vi/zHBYczxgFog/maxresdefault.jpg'}
  ];

  getUsers(){
    return this.userList;
  }
}

