import React from 'react';
import { Card, CardBody, CardFooter, Button, Tabs, Tab } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useOrder } from './order-context';
import { Toast, addToast } from '@heroui/react';

interface BurritoOption {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}

export const Menu: React.FC = () => {
  const [selected, setSelected] = React.useState("all");
  const { addItem } = useOrder();
  const [selectedProtein, setSelectedProtein] = React.useState<string | null>(null);
  
  const burritoOptions: BurritoOption[] = [
    {
      id: "classic",
      name: "The Classic Press",
      description: "Our signature pressed burrito with seasoned rice, black beans, cheese, pico de gallo, and your choice of protein.",
      price: 12.99,
      image: "https://img.heroui.chat/image/food?w=600&h=400&u=2",
      tags: ["all", "signature"]
    },
    {
      id: "spicy",
      name: "Spicy Chipotle Press",
      description: "Kicked up with chipotle sauce, jalapeños, pepper jack cheese, rice, beans, and your choice of protein.",
      price: 13.99,
      image: "https://img.heroui.chat/image/food?w=600&h=400&u=3",
      tags: ["all", "spicy"]
    },
    {
      id: "veggie",
      name: "Garden Press",
      description: "Loaded with grilled vegetables, guacamole, rice, beans, and cheese for a satisfying vegetarian option.",
      price: 11.99,
      image: "https://img.heroui.chat/image/food?w=600&h=400&u=4",
      tags: ["all", "veggie"]
    },
    {
      id: "breakfast",
      name: "Breakfast Press",
      description: "Start your day with scrambled eggs, chorizo, potatoes, cheese, and salsa in our perfectly pressed burrito.",
      price: 10.99,
      image: "https://img.heroui.chat/image/food?w=600&h=400&u=5",
      tags: ["all", "breakfast"]
    }
  ];

  const filteredBurritos = selected === "all" 
    ? burritoOptions 
    : burritoOptions.filter(burrito => burrito.tags.includes(selected));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const handleAddToOrder = (burrito: BurritoOption) => {
    const options = selectedProtein ? [`Protein: ${selectedProtein}`] : [];
    
    addItem({
      id: burrito.id,
      name: burrito.name,
      price: burrito.price + (selectedProtein === 'Steak (+$2)' ? 2 : 0),
      options
    });
    
    // Show toast notification
    addToast({
      title: "Added to Order",
      description: `${burrito.name} has been added to your order.`,
      color: "success",
      timeout: 3000
    });
  };

  return (
    <section id="menu" className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Menu</h2>
        <p className="text-foreground-500 max-w-2xl mx-auto">
          We specialize in one thing: perfectly pressed burritos that are huge, flavorful, and satisfying.
          Choose your favorite style below.
        </p>
      </div>
      
      <div className="overflow-x-auto mb-8">
        <Tabs 
          aria-label="Burrito options" 
          selectedKey={selected} 
          onSelectionChange={setSelected as any}
          color="primary"
          variant="light"
          classNames={{
            base: "w-full",
            tabList: "flex-nowrap w-max mx-auto justify-start sm:justify-center",
            tab: "flex-shrink-0 whitespace-nowrap w-auto"
          }}
        >
          <Tab key="all" title="All Burritos" />
          <Tab key="signature" title="Signature" />
          <Tab key="spicy" title="Spicy" />
          <Tab key="veggie" title="Vegetarian" />
          <Tab key="breakfast" title="Breakfast" />
        </Tabs>
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {filteredBurritos.map((burrito) => (
          <motion.div key={burrito.id} variants={item}>
            <Card className="h-full">
              <img 
                src={burrito.image} 
                alt={burrito.name}
                className="w-full h-48 object-cover"
              />
              <CardBody className="p-4">
                <h3 className="text-xl font-semibold mb-2">{burrito.name}</h3>
                <p className="text-foreground-500 text-sm mb-4">{burrito.description}</p>
                <p className="text-primary font-bold text-lg">${burrito.price.toFixed(2)}</p>
              </CardBody>
              <CardFooter className="pt-0">
                <Button 
                  color="primary" 
                  variant="flat" 
                  fullWidth
                  startContent={<Icon icon="lucide:plus" />}
                  onPress={() => handleAddToOrder(burrito)}
                >
                  Add to Order
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-12 text-center">
        <Card className="max-w-2xl mx-auto bg-primary/5">
          <CardBody className="p-6">
            <h3 className="text-xl font-semibold mb-2">Customize Your Burrito</h3>
            <p className="mb-4">
              Choose your protein: Grilled Chicken, Steak, Carnitas, Ground Beef, or Plant-Based
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {["Grilled Chicken", "Steak (+$2)", "Carnitas", "Ground Beef", "Plant-Based"].map(protein => (
                <Button 
                  key={protein}
                  size="sm" 
                  variant={selectedProtein === protein ? "solid" : "flat"} 
                  color="primary"
                  onPress={() => setSelectedProtein(protein === selectedProtein ? null : protein)}
                >
                  {protein}
                </Button>
              ))}
            </div>
            <p className="text-foreground-500 text-sm">
              All burritos come with our signature press treatment for the perfect crispy exterior.
              {selectedProtein && <span className="text-primary font-medium"> Selected: {selectedProtein}</span>}
            </p>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};