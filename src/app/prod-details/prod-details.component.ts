import { Component, OnInit } from '@angular/core';
import { ProductService } from '../myServices/product.service';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {

  searchText: string = '';
  products = [];
  empErrorMsg: any = '';
  SortbyParam: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      success => this.products = success,
      error => this.empErrorMsg = error
    )
  } 

}
