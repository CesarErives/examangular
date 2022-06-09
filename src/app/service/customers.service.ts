import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() { }
  public customerList = [
    {id: 1, name: 'Coca-Cola' , img:'https://i0.wp.com/www.numeroservicioalcliente.com/wp-content/uploads/2017/07/logo_cocacola-nuevo.png?fit=300%2C300&ssl=1'},
    {id: 2, name: 'Pepsi' , img: 'https://image.shutterstock.com/image-photo/konotop-ukraine-march-13-2016-260nw-389825848.jpg'}
  ];

  getCustomers(){
    return this.customerList;
  }
}

