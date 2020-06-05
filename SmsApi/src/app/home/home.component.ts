import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string;

  constructor() {
    this.title = 'Wygląda na to, że wszystko działa jak należy!';
  }

  @ViewChild('f', { static: false }) carForm: NgForm;

  onSubmit(form: NgForm) {
    console.log('Marka samochodu: ' + form.value.carBrand);
    console.log('Opis samochodu: ' + form.value.carDescription);
    console.log('Wielkość zamówienia: ' + form.value.carAmount);
  }

  onClear() {
    this.carForm.reset();
  }
  ngOnInit() {
  }

}
