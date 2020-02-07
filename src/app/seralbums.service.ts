import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Albums } from './albums';
import { Photos } from './photos';

@Injectable({
  providedIn: 'root'
})
export class SeralbumsService {
  routeURL="https://jsonplaceholder.typicode.com/albums";
  routeURL2="https://jsonplaceholder.typicode.com/photos";
  constructor(private http:HttpClient) { }
  getUsers():Observable<Albums>{
    return this.http.get<Albums>(this.routeURL);
  }
  getid(id){
    return this.http.get(`${this.routeURL2}/?albumId=${id}`);
  }
  checklogin(uname: string, pwd: string) {
    if (uname == "admin" && pwd == "admin123") {
      localStorage.setItem('username', "admin");
      return true;
    }
    else {
      return false;
    }
  }
  getUsername(){
    localStorage.getItem('username');
  }
  destroyToken(){
    localStorage.removeItem('username');
  }
}
