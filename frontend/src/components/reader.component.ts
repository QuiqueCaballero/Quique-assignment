import { Component, OnInit } from '@angular/core';
import { ReaderService } from 'src/services/reader.service';

@Component({
  selector: 'app-root',
  templateUrl: './epa.html',
  styleUrls: ['./css/main.css', './css/normalize.min.css']
})
export class ReaderComponent implements OnInit {
  
  constructor(private readerService: ReaderService){}

  ngOnInit(){}

  /*readJson(){
  	this.readerService.getJson().subscribe((data: any) =>{
  		console.log(data);
  	});
  }*/

}