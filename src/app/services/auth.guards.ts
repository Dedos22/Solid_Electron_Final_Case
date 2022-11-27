import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {AccountService} from './account.service';
	

@Injectable()
export class AuthGuard implements CanActivate {
	

	constructor(private accountService: AccountService) {}

	canActivate() {
	  return this.accountService.isLoggedIn();
	}
}