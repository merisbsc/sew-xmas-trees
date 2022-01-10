import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent implements OnInit {

  paypal = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required]
  });

  constructor(
      private readonly fb: FormBuilder,
      private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.router.navigate(['']);
    alert("Payment completed")
  }
}
