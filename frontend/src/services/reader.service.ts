import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
	providedIn: 'root'
})

export class ReaderService{
	constructor(private webReqService: WebRequestService){}

	getJson(){
		this.webReqService.get('/readJson');
	}
}