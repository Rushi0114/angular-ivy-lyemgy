import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_model/user';

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }


   getAll():Observable<User[]> {
   return this.http.get<User[]>(`/users`);
  }

  registerUser(user:User):Observable<Object>{
    return this.http.post(`/users/register`,user);
  }

   delete(id: number) {
        return this.http.delete(`/users/${id}`);
    }

}