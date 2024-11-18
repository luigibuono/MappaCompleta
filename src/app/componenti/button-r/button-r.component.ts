import { Component } from '@angular/core';

@Component({
  selector: 'app-button-r',
  templateUrl: './button-r.component.html',
  styleUrls: ['./button-r.component.css']
})
export class ButtonRComponent {


  scrollToTop(){
    window.scrollTo({ top:0, behavior:'smooth'})
  }
}
