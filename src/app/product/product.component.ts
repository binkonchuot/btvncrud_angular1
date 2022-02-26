import { Component, OnInit } from '@angular/core';

class Product {
  name: string;
  img : string;
  price : number;
  description: string;



  constructor(name: string, price: number, img: string, description: string){
    this.name = name;
    this.price = price;
    this.img = img;
    this.description = description;
  }
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products : Product[] = [];
   name:string = '';
   img:string = '';
   price:number = 0;
  description:string = '';

  constructor() {
    this.products.push(new Product('Sapa',2000000,'http://divui.com/blog/wp-content/uploads/2018/10/sapa.jpg','dep'));
    this.products.push(new Product('Ninh Binh',1600000,'https://onevivu.vn/wp-content/uploads/2020/10/Du-lich-Trang-An-Ninh-Binh-7.jpg','nang'));
    this.products.push(new Product('Ha Giang',2000000,'https://kenh14cdn.com/2018/11/15/photo-1-15422570576251671050126.jpg','mua'));
    this.products.push(new Product('Quy Nhon',3500000,'http://thegioinhadat247.com.vn/upload/product/580773523055.jpg','bao'));
    this.products.push(new Product('Moc Chau',1200000,'https://travelgear.vn/blog/wp-content/uploads/2019/02/chup-anh-o-moc-chau.jpg','gio'));
  }
  ngOnInit(): void {
  }

  showDelete(name: string){
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name){
        this.name = this.products[i].name;
        this.img = this.products[i].img;
        this.price = this.products[i].price;
        this.description = this.products[i].description;
        return;
      }
    }
  }

  submitDelete(name: string){
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name){
        // this.name = this.products[i].name;
        // this.img = this.products[i].img;
        // this.price = this.products[i].price;
        // this.description = this.products[i].description;
        this.products.splice(i, 1);
        return;
      }
    }
  }
  createProduct() {
    this.products.push(new Product(this.name,this.price,this.img,this.description));
    this.name = '';
    this.img = '';
    this.price = 0;
    this.description = '';
  }

  showEdit(name: string){
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name){
        this.name = this.products[i].name;
        this.img = this.products[i].img;
        this.price = this.products[i].price;
        this.description = this.products[i].description;
        return;
      }
    }
  }
  submitEdit(name: string){
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name){
        this.products[i] = new Product(this.name,this.price,this.img,this.description);
        this.name = '';
        this.img = '';
        this.price = 0;
        this.description = '';
        return;
      }
    }
  }
}
