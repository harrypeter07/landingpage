"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const handlePhoneClick = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleEmailClick = () => {
    const email = 'info@touchwoodfurnitures.com';
    const subject = 'Inquiry about Touchwood Furnitures';
    const body = 'Hello,\n\nI am interested in your furniture products. Please provide more information.\n\nThank you!';
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_self');
  };

  const handleMapClick = () => {
    const address = 'Touchwood Furnitures, Paradsinga, Nagpur - 440016, Maharashtra, India';
    const encodedAddress = encodeURIComponent(address);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(mapUrl, '_blank');
  };

  return (
    <footer className='bg-slate-100 mx-8 mb-8 rounded-3xl py-6 sm:py-8 border-t border-slate-200'>
      <div className='container mx-auto px-4 sm:px-6'>
        {/* Contact Information */}
        <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 text-xs sm:text-sm text-gray-700 mb-6'>
          <div 
            className='flex items-start gap-2 w-full lg:w-auto cursor-pointer hover:text-blue-600 transition-colors'
            onClick={handleMapClick}
            title="Click to view on Google Maps"
          >
            <MapPin className='w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0' />
            <div className='flex flex-wrap gap-1'>
              <span className='font-medium'>Address:</span>
              <span className='break-words hover:underline'>
                Touchwood Furnitures, Paradsinga, Nagpur - 440016
              </span>
            </div>
          </div>

          <div className='flex items-start gap-2 w-full lg:w-auto'>
            <Phone className='w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0' />
            <div className='flex flex-wrap gap-1'>
              <span className='font-medium'>Phone:</span>
              <div className='flex flex-wrap gap-2'>
                <span 
                  className='break-words cursor-pointer hover:text-blue-600 hover:underline transition-colors'
                  onClick={() => handlePhoneClick('+91987654321')}
                  title="Click to call"
                >
                  +91 987654321
                </span>
                <span className='text-gray-400'>|</span>
                <span 
                  className='break-words cursor-pointer hover:text-blue-600 hover:underline transition-colors'
                  onClick={() => handlePhoneClick('+91123456789')}
                  title="Click to call"
                >
                  +91 123456789
                </span>
              </div>
            </div>
          </div>

          <div 
            className='flex items-start gap-2 w-full lg:w-auto cursor-pointer hover:text-blue-600 transition-colors'
            onClick={handleEmailClick}
            title="Click to send email"
          >
            <Mail className='w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0' />
            <div className='flex flex-wrap gap-1'>
              <span className='font-medium'>Email:</span>
              <span className='break-words hover:underline'>
                info@touchwoodfurnitures.com
              </span>
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
}
