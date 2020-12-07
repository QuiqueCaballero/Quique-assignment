import { Component, OnInit } from '@angular/core';
import { ReaderService } from 'src/services/reader.service';

@Component({
  selector: 'app-root',
  templateUrl: '../epa.html',
  styleUrls: ['./css/main.css', './css/normalize.min.css']
})

/*@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})*/

export class AppComponent implements OnInit {
  
  constructor(private readerService: ReaderService){}

  ngOnInit(){}

  readJson(){
  	this.readerService.getJson().subscribe((response: any) => {
  		console.log(response);
  	});
  }
}
