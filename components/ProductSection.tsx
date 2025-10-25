"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
      { name: "Armless Solid Dining Chair", price: "₹1,250.00", image: "#C8B8A0" },
      { name: "Elle Decor Roux Arm Chair", price: "₹1,250.00", image: "#D4A5A5" },
      { name: "Modern Office Chair", price: "₹2,500.00", image: "#E8C4B8" },
      { name: "Accent Chair", price: "₹1,800.00", image: "#8B4513" },
    ],
    Sofa: [
      { name: "Velvet Midnight Natural Sofa", price: "₹5,000.00", image: "#4A6B7C" },
      { name: "Modern 3-Seater Sofa", price: "₹4,500.00", image: "#5F7F8F" },
      { name: "Sectional Sofa Set", price: "₹6,500.00", image: "#D2691E" },
      { name: "L-Shaped Sofa", price: "₹5,500.00", image: "#7B96A8" },
    ],
    Table: [
      { name: "Solid Wood Dining Table", price: "₹3,200.00", image: "#8B7355" },
      { name: "Modern Coffee Table", price: "₹2,100.00", image: "#A0522D" },
      { name: "Office Desk", price: "₹2,800.00", image: "#CD853F" },
      { name: "Side Table", price: "₹1,500.00", image: "#D2691E" },
    ],
    Bed: [
      { name: "King Size Bed Frame", price: "₹4,500.00", image: "#8B4513" },
      { name: "Queen Size Bed", price: "₹3,800.00", image: "#A0522D" },
      { name: "Single Bed", price: "₹2,200.00", image: "#CD853F" },
      { name: "Bunk Bed", price: "₹3,500.00", image: "#8B7355" },
    ],
    Lamp: [
      { name: "Modern Table Lamp", price: "₹1,200.00", image: "#FFD700" },
      { name: "Floor Lamp", price: "₹1,800.00", image: "#FFA500" },
      { name: "Pendant Light", price: "₹2,500.00", image: "#FF6347" },
      { name: "Desk Lamp", price: "₹800.00", image: "#32CD32" },
    ],
  };

  const latestProducts: Product[] = [
    {
      name: "Velvet Midnight Natural Sofa",
      price: "₹5,000.00",
      image: "#4A6B7C",
    },
    { name: "Modern Furniture", price: "₹5,000.00", image: "#5F7F8F" },
    { name: "Modern Furniture Set", price: "₹5,000.00", image: "#D2691E" },
    { name: "Furniture Sofa Set", price: "₹5,000.00", image: "#7B96A8" },
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
      className={`overflow-hidden group hover:shadow-xl transition-all duration-300 ${
        featured ? "border-2 border-blue-500" : ""
      }`}
    >
      <div
        className='aspect-square bg-gray-100 relative overflow-hidden'
        style={{ backgroundColor: product.image }}
      >
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
            <ProductCard key={index} product={product} featured={index === 1} />
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
