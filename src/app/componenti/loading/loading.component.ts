import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  isLoading:boolean = false;

  startLoading(){
    this.isLoading = true;
  }

  stopLoading(){
    this.isLoading = false;
  }

  ngOnInit(){
    this.startLoading();
    setTimeout(() =>{
      this.stopLoading();
    }, 3000);
  }
}
