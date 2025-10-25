"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Product {
  name: string;
  price: string;
  image: string;
}

interface ProductSectionProps {
  selectedCategory: string;
}

export function ProductSection({ selectedCategory }: ProductSectionProps) {
  // Product data organized by category
  const productsByCategory = {
    Chair: [
      { name: "Armless Solid Dining Chair", price: "₹1,250.00", image: "/products/Chair 1 1.png" },
      { name: "Elle Decor Roux Arm Chair", price: "₹1,250.00", image: "/products/Chair 2 1.png" },
      { name: "Modern Office Chair", price: "₹2,500.00", image: "/products/5b801fa33bc9927e3a61242146b13fb1-removebg-preview 1.png" },
      { name: "Accent Chair", price: "₹1,800.00", image: "/products/61d212246144d8255ace27d234fb297f-removebg-preview 1.png" },
    ],
    Sofa: [
      { name: "Velvet Midnight Natural Sofa", price: "₹5,000.00", image: "/products/8d2e32ba9e3def94b92308bcf1545a87-removebg-preview 1.png" },
      { name: "Modern 3-Seater Sofa", price: "₹4,500.00", image: "/products/a9ad41c23c7abd44289d04ebc01374ca-removebg-preview 1.png" },
      { name: "Sectional Sofa Set", price: "₹6,500.00", image: "/products/f8d0dcd7fd9e1fc7fb1990b5a44db933-removebg-preview 1.png" },
      { name: "L-Shaped Sofa", price: "₹5,500.00", image: "/products/blue.png" },
    ],
    Table: [
      { name: "Solid Wood Dining Table", price: "₹3,200.00", image: "/products/Chair 1 1.png" },
      { name: "Modern Coffee Table", price: "₹2,100.00", image: "/products/Chair 2 1.png" },
      { name: "Office Desk", price: "₹2,800.00", image: "/products/5b801fa33bc9927e3a61242146b13fb1-removebg-preview 1.png" },
      { name: "Side Table", price: "₹1,500.00", image: "/products/61d212246144d8255ace27d234fb297f-removebg-preview 1.png" },
    ],
    Bed: [
      { name: "King Size Bed Frame", price: "₹4,500.00", image: "/products/8d2e32ba9e3def94b92308bcf1545a87-removebg-preview 1.png" },
      { name: "Queen Size Bed", price: "₹3,800.00", image: "/products/a9ad41c23c7abd44289d04ebc01374ca-removebg-preview 1.png" },
      { name: "Single Bed", price: "₹2,200.00", image: "/products/f8d0dcd7fd9e1fc7fb1990b5a44db933-removebg-preview 1.png" },
      { name: "Bunk Bed", price: "₹3,500.00", image: "/products/blue.png" },
    ],
    Lamp: [
      { name: "Modern Table Lamp", price: "₹1,200.00", image: "/products/Chair 1 1.png" },
      { name: "Floor Lamp", price: "₹1,800.00", image: "/products/Chair 2 1.png" },
      { name: "Pendant Light", price: "₹2,500.00", image: "/products/5b801fa33bc9927e3a61242146b13fb1-removebg-preview 1.png" },
      { name: "Desk Lamp", price: "₹800.00", image: "/products/61d212246144d8255ace27d234fb297f-removebg-preview 1.png" },
    ],
  };

  const latestProducts: Product[] = [
    {
      name: "Velvet Midnight Natural Sofa",
      price: "₹5,000.00",
      image: "/products/8d2e32ba9e3def94b92308bcf1545a87-removebg-preview 1.png",
    },
    { name: "Modern Furniture", price: "₹5,000.00", image: "/products/a9ad41c23c7abd44289d04ebc01374ca-removebg-preview 1.png" },
    { name: "Modern Furniture Set", price: "₹5,000.00", image: "/products/f8d0dcd7fd9e1fc7fb1990b5a44db933-removebg-preview 1.png" },
    { name: "Furniture Sofa Set", price: "₹5,000.00", image: "/products/blue.png" },
  ];

  // Get products for the selected category
  const popularProducts = productsByCategory[selectedCategory as keyof typeof productsByCategory] || productsByCategory.Chair;

  const ProductCard = ({
    product,
    featured = false,
  }: {
    product: Product;
    featured?: boolean;
  }) => (
    <Card
      className="overflow-hidden group hover:shadow-xl hover:border-2 hover:border-blue-500 transition-all duration-300"
    >
      <div className='aspect-square bg-gray-100 relative overflow-hidden'>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent'></div>
      </div>
      <div className='p-3 text-center sm:p-4 bg-white'>
        <h3 className='font-semibold text-gray-900 mb-2 text-xs sm:text-sm md:text-base line-clamp-2'>
          {product.name}
        </h3>
        <p className='text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-3'>
          Price: {product.price}
        </p>
        <Button className='w-full bg-cyan-700 hover:bg-cyan-800 text-white text-sm py-2'>
          Add to Cart
        </Button>
      </div>
    </Card>
  );

  return (
    <section className='py-12 sm:py-16 lg:py-20 bg-gray-50'>
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='flex items-center justify-between mb-6 sm:mb-8'>
          <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900'>
            Popular {selectedCategory}s
          </h2>
          <button className='text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base'>
            See all
          </button>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16 lg:mb-20'>
          {popularProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        <div className='flex items-center justify-between mb-6 sm:mb-8'>
          <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900'>
            Latest Product
          </h2>
          <button className='text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base'>
            See all
          </button>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6'>
          {latestProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
