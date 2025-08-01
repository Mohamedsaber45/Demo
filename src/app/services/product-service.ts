import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: IProduct[] = [
    {
      id: 1,
      name: "Women's Handbag",
      imageURL: "/assets/Images/pexels-catscoming-1204464.jpg",
      price: 95,
      description: "Trendy leather handbag with multiple pockets",
      category: "Fashion"
    },
    {
      id: 2,
      name: "Camping Tent",
      imageURL: "/assets/Images/pexels-cliford-mervil-988071-2398220.jpg",
      price: 70,
      description: "4-person tent with waterproof fabric",
      category: "Sports & Outdoors"
    },
    {
      id: 3,
      name: "Electric Kettle",
      imageURL: "/assets/Images/pexels-conojeghuo-221445.jpg",
      price: 265,
      description: "1.7L stainless steel kettle with auto shut-off",
      category: "Home Appliances"
    },
    {
      id: 4,
      name: "Air Fryer 5L",
      imageURL: "/assets/Images/pexels-fotios-photos-29461935.jpg",
      price: 599,
      description: "5-liter air fryer with digital controls",
      category: "Home Appliances"
    },
    {
      id: 5,
      name: "Wireless Headphones",
      imageURL: "/assets/Images/pexels-garrettmorrow-1649771.jpg",
      price: 49,
      description: "Noise-canceling over-ear headphones",
      category: "Electronics"
    },
    {
      id: 6,
      name: "Women's Dress",
      imageURL: "/assets/Images/pexels-kowalievska-1148957.jpg",
      price: 55,
      description: "Elegant floral summer dress for women",
      category: "Fashion"
    },
    {
      id: 7,
      name: "Wooden Coffee Table",
      imageURL: "/assets/Images/pexels-matvalina-18234201.jpg",
      price: 1199,
      description: "Minimalist coffee table with oak finish",
      category: "Furniture"
    },
    {
      id: 8,
      name: "Casual Sneakers",
      imageURL: "/assets/Images/pexels-melvin-buezo-1253763-2529148.jpg",
      price: 359,
      description: "Comfortable sneakers in various colors",
      category: "Fashion"
    },
    {
      id: 9,
      name: "Facial Cleanser",
      imageURL: "/assets/Images/pexels-monirathnak-14836430.jpg",
      price: 250,
      description: "Gentle cleanser for all skin types",
      category: "Health & Beauty"
    },
    {
      id: 10,
      name: "Modern Sofa",
      imageURL: "/assets/Images/pexels-olly-3757055.jpg",
      price: 390,
      description: "3-seater sofa with fabric upholstery",
      category: "Furniture"
    },
    {
      id: 11,
      name: "Hair Dryer",
      imageURL: "/assets/Images/pexels-sanjula-thiwanka-2148212934-31941805.jpg",
      price: 350,
      description: "Professional hair dryer with ionic technology",
      category: "Health & Beauty"
    },
    {
      id: 12,
      name: "Vitamin C Serum",
      imageURL: "/assets/Images/pexels-shiny-diamond-3762879.jpg",
      price: 140,
      description: "Brightening serum with 20% Vitamin C",
      category: "Health & Beauty"
    }
  ]

  getProductById(id: number): IProduct | undefined {
    return this.products.find(product => product.id === id);
  }
}
