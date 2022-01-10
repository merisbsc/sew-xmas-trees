import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.scss']
})
export class SaleFormComponent implements OnInit {

  addressForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required]
  });

  constructor(private readonly fb: FormBuilder,
              private readonly router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
