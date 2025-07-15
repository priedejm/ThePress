import React from 'react';
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { Menu } from './components/menu';
import { OrderSection } from './components/order-section';
import { InstagramFeed } from './components/instagram-feed';
import { LocationMap } from './components/location-map';
import { Footer } from './components/footer';
import { Divider } from '@heroui/react';
import { OrderProvider } from './components/order-context';
import { AboutSection } from './components/about-section';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <OrderProvider>
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <Menu />
          <Divider className="my-8" />
          <OrderSection />
          <Divider className="my-8" />
          <InstagramFeed />
          <Divider className="my-8" />
          <LocationMap />
        </main>
        <Footer />
      </OrderProvider>
    </div>
  );
};

export default App;