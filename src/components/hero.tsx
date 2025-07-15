import React from 'react';
import { Button, Card, CardBody } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden h-[80vh] min-h-[600px]">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 z-10" 
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.7) 100%)'
          }}
        />
        <img 
          src="assets/images/press.webp" 
          alt="Delicious pressed burrito" 
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Perfectly Pressed <span className="text-primary">Burritos</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg">
              Savor the ultimate lunch or dinner experience with our signature pressed burritos. 
              Huge, flavorful, and perfectly crisp.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                as="a" 
                href="#menu" 
                color="primary" 
                size="lg"
                startContent={<Icon icon="lucide:utensils" />}
              >
                View Menu
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <Card className="bg-content1/90 backdrop-blur-sm">
              <CardBody className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Icon icon="lucide:clock" className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Opening Hours</h3>
                    <p className="text-foreground-500">Mon-Sun: 11AM - 10PM</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Icon icon="lucide:map-pin" className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-foreground-500">221 Coming St, Charleston</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Icon icon="lucide:phone" className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Contact</h3>
                    <p className="text-foreground-500">(555) 123-4567</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};