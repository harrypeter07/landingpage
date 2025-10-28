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
      {
        name: "Armless Solid Dining Chair",
        price: "₹1,250.00",
        image: "https://unsplash.com/photos/brown-armless-chair-Q9ZTQ_Hh4Ew/download?force=true&w=800",
      }, // Brown armless chair[web:14]
      {
        name: "Elle Decor Roux Arm Chair",
        price: "₹1,250.00",
        image: "https://unsplash.com/photos/white-wooden-armchair-9489sFfgk4c/download?force=true&w=800",
      }, // White wooden armchair[web:7]
      {
        name: "Modern Office Chair",
        price: "₹2,500.00",
        image: "https://unsplash.com/photos/a-modern-office-chair-is-featured-in-green-YrXPGShView/download?force=true&w=800",
      }, // Modern office chair[web:8]
      {
        name: "Accent Chair",
        price: "₹1,800.00",
        image: "https://unsplash.com/photos/copper-wired-accent-chair-L0BaowhFe4c/download?force=true&w=800",
      }, // Copper wired accent chair[web:17]
    ],
    Sofa: [
      {
        name: "Velvet Midnight Natural Sofa",
        price: "₹5,000.00",
        image: "https://unsplash.com/photos/orange-velvet-couch-with-a-tufted-design-7qmvjq3cGrA/download?force=true&w=800",
      }, // Orange velvet couch[web:10]
      {
        name: "Modern 3-Seater Sofa",
        price: "₹4,500.00",
        image: "https://unsplash.com/photos/beige-3-seat-sofa-near-the-window-Wv65tpVIdDg/download?force=true&w=800",
      }, // Beige 3-seat sofa[web:19]
      {
        name: "Sectional Sofa Set",
        price: "₹6,500.00",
        image: "https://unsplash.com/photos/a-cozy-living-room-with-a-brown-sectional-sofa-FI4ZN6aaWQ0/download?force=true&w=800",
      }, // Brown sectional sofa[web:12]
      {
        name: "L-Shaped Sofa",
        price: "₹5,500.00",
        image: "https://unsplash.com/photos/a-living-room-filled-with-furniture-and-a-fire-place-Alp8v3dpGh0/download?force=true&w=800",
      }, // Living room with L-shaped sofa[web:20]
    ],
    Table: [
      {
        name: "Solid Wood Dining Table",
        price: "₹3,200.00",
        image: "https://unsplash.com/photos/photo-1533928298208-27ff66555d8d/download?force=true&w=800",
      }, // Wood dining table[web:1]
      {
        name: "Modern Coffee Table",
        price: "₹2,100.00",
        image: "https://unsplash.com/photos/photo-1532372320572-cda25653a26d/download?force=true&w=800",
      }, // Coffee table [web:1]
      {
        name: "Office Desk",
        price: "₹2,800.00",
        image: "https://unsplash.com/photos/photo-1524758631624-e2822e304c36/download?force=true&w=800",
      }, // Office desk [web:1]
      {
        name: "Side Table",
        price: "₹1,500.00",
        image: "https://unsplash.com/photos/photo-1567538096630-e0c55bd6374c/download?force=true&w=800",
      }, // Side table [web:1]
    ],
    Bed: [
      {
        name: "King Size Bed Frame",
        price: "₹4,500.00",
        image: "https://unsplash.com/photos/photo-1519710164239-da123dc03ef4/download?force=true&w=800",
      }, // King size bed [web:1]
      {
        name: "Queen Size Bed",
        price: "₹3,800.00",
        image: "https://unsplash.com/photos/photo-1506744038136-46273834b3fb/download?force=true&w=800",
      }, // Queen bed [web:1]
      {
        name: "Single Bed",
        price: "₹2,200.00",
        image: "https://unsplash.com/photos/photo-1522771739844-6a9f6d5f14af/download?force=true&w=800",
      }, // Single bed [web:1]
      {
        name: "Bunk Bed",
        price: "₹3,500.00",
        image: "https://unsplash.com/photos/photo-1519710164239-da123dc03ef4/download?force=true&w=800",
      }, // Bunk bed [web:1]
    ],
    Lamp: [
      {
        name: "Modern Table Lamp",
        price: "₹1,200.00",
        image: "https://unsplash.com/photos/photo-1507003211169-0a1dd7228f2d/download?force=true&w=800",
      }, // Modern table lamp [web:1]
      {
        name: "Floor Lamp",
        price: "₹1,800.00",
        image: "https://unsplash.com/photos/photo-1519710164239-da123dc03ef4/download?force=true&w=800",
      }, // Floor lamp [web:1]
      {
        name: "Pendant Light",
        price: "₹2,500.00",
        image: "https://unsplash.com/photos/photo-1519125323398-675f0ddb6308/download?force=true&w=800",
      }, // Pendant light [web:1]
      {
        name: "Desk Lamp",
        price: "₹800.00",
        image: "https://unsplash.com/photos/photo-1464983953574-0892a716854b/download?force=true&w=800",
      }, // Desk lamp [web:1]
    ],
  };
  

  const latestProducts: Product[] = [
    {
      name: "Velvet Midnight Natural Sofa",
      price: "₹5,000.00",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop",
    },
    { name: "Modern Furniture", price: "₹5,000.00", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop" },
    { name: "Modern Furniture Set", price: "₹5,000.00", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=800&fit=crop" },
    { name: "Furniture Sofa Set", price: "₹5,000.00", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=800&fit=crop" },
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
