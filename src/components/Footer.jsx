import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>
          &copy; {new Date().getFullYear()} Alatree Ventures. All rights
          reserved.
        </p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
