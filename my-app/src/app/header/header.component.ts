import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
 
})
export class HeaderComponent implements OnInit {

  @Output() fileEmit = new EventEmitter<File>();

  constructor() { }

  ngOnInit() {
  }
  handleFileInput(files: any){
    debugger
    this.fileEmit.emit(files);
  }
}
