import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TreeComponent} from "./tree/tree.component";
import {SaleComponent} from "./sale/sale.component";
import {PaypalComponent} from "./paypal/paypal.component";

const routes: Routes = [
    {path: 'paypal', component: PaypalComponent},
    {path: 'tree', component: TreeComponent},
    {path: 'sale', component: SaleComponent},
    {path: '**', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
