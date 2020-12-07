import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
	providedIn: 'root'
})
export class WebRequestService {

	readonly ROOT_URL: string;
	
	constructor(private http: HttpClient) {
		this.ROOT_URL = 'http://localhost:3977/api';
	}

	get(uri: string){
		return this.http.get(`${this.ROOT_URL}/${uri}`);
	}

}