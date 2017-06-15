import { Injectable } from '@angular/core';
import { UserModule } from "./user/user.module";

@Injectable()
export class UserService {

    public isLoggedIn: boolean = false;
    public user : UserModule = {};

  constructor() { }

}
