import React from 'react';
import { Link } from '@heroui/react';
import { Icon } from '@iconify/react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-content2 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="#" className="font-bold text-inherit flex items-center gap-2 mb-4">
              <Icon icon="lucide:sandwich" className="text-primary text-2xl" />
              <span className="text-xl">THE PRESS</span>
            </Link>
            <p className="text-foreground-500 mb-4">
              Perfectly pressed burritos for lunch or dinner. Huge, flavorful, and satisfying.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Instagram" className="text-foreground hover:text-primary transition-colors">
                <Icon icon="lucide:instagram" className="text-xl" />
              </Link>
              <Link href="#" aria-label="Facebook" className="text-foreground hover:text-primary transition-colors">
                <Icon icon="lucide:facebook" className="text-xl" />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-foreground hover:text-primary transition-colors">
                <Icon icon="lucide:twitter" className="text-xl" />
              </Link>
              <Link href="#" aria-label="Yelp" className="text-foreground hover:text-primary transition-colors">
                <Icon icon="logos:yelp" className="text-xl" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#menu" color="foreground" className="hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#order" color="foreground" className="hover:text-primary transition-colors">
                  Order Online
                </Link>
              </li>
              <li>
                <Link href="#instagram" color="foreground" className="hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#location" color="foreground" className="hover:text-primary transition-colors">
                  Location
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Icon icon="lucide:map-pin" className="text-primary" />
                <span>221 Coming St, Charleston, SC 29403</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:phone" className="text-primary" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:mail" className="text-primary" />
                <span>hello@thepresseatery.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:clock" className="text-primary" />
                <span>Mon-Sun: 11AM - 10PM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-foreground-500 mb-4">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-medium border border-default-200 flex-1 focus:outline-none focus:border-primary"
              />
              <button 
                type="submit" 
                className="bg-primary text-white px-4 py-2 rounded-medium hover:bg-primary-600 transition-colors"
              >
                <Icon icon="lucide:send" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-default-200 mt-8 pt-8 text-center text-foreground-500">
          <p>&copy; {new Date().getFullYear()} The Press Eatery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};