import React from 'react';
import { Card, CardBody, Button } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const LocationMap: React.FC = () => {
  return (
    <section id="location" className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
        <p className="text-foreground-500 max-w-2xl mx-auto">
          Visit us to experience our perfectly pressed burritos in person.
          We're conveniently located in the heart of Charleston.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardBody className="p-0 overflow-hidden">
              <div className="bg-default-100 rounded-lg overflow-hidden" style={{ height: '500px' }}>
                <iframe
                  src="https://www.google.com/maps/embed/v1/search?key=AIzaSyCbSGMNp5nACfY5Ubn9yKO1UmeMDb3krAQ&q=221+Coming+St+Charleston+SC+29403&zoom=15&maptype=roadmap"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Press Restaurant Location"
                ></iframe>
              </div>
            </CardBody>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-semibold mb-6">Contact & Hours</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon icon="lucide:map-pin" className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Address</h4>
                    <p className="text-foreground-500">221 Coming St</p>
                    <p className="text-foreground-500">Charleston, SC 29403</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon icon="lucide:phone" className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Phone</h4>
                    <p className="text-foreground-500">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon icon="lucide:mail" className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <p className="text-foreground-500">hello@thepresseatery.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon icon="lucide:clock" className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Hours</h4>
                    <p className="text-foreground-500">Monday - Friday: 11AM - 10PM</p>
                    <p className="text-foreground-500">Saturday - Sunday: 10AM - 11PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  color="primary" 
                  fullWidth
                  startContent={<Icon icon="lucide:navigation" />}
                  as="a"
                  href="https://www.google.com/maps/dir/?api=1&destination=221+Coming+St,+Charleston,+SC+29403"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </Button>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};