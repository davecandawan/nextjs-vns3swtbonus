import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav
      className="w-full bg-[#0a0a0a] shadow-md relative py-0 sm:py-[15px]"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col sm:flex-row justify-between items-center py-5 sm:py-[5px] sm:min-h-[70px] w-full">
          <div className="flex items-center pl-8 sm:pl-12">
            <Image
              src="/White-VNSH-Logo.webp"
              alt="VNSH Logo"
              className="w-[180px] sm:w-[220px] h-auto hover:opacity-90"
              width={220}
              height={60}
              priority
            />
          </div>
          <span className="text-white text-lg sm:text-xl font-medium mt-3 sm:mt-0 pr-8 sm:pr-12">
            Questions? | 888-526-1885
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
