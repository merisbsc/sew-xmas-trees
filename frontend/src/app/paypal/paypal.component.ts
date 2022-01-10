import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {BackendService, ITree} from "../shared/backend.service";
import {SaleComponent} from "../sale/sale.component";
import {SaleDataService} from "../shared/sell-date.service";

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

  public tree: ITree;

  constructor(
      private readonly fb: FormBuilder,
      private readonly router: Router,
      private readonly backend: BackendService,
      private readonly sale: SaleDataService
  ) {
    this.tree = sale.tree!;
  }

  ngOnInit(): void {
  }

  async onSubmit(): Promise<void> {
    try {
      if (this.tree) {
        this.backend.buyTree(this.tree);
        this.router.navigate(['']);
      }
    } catch (e) {
      console.log(e)
    }
  }
}
