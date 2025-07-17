import React from 'react';
import { Card, CardBody, Button, Input, Textarea, Checkbox, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Badge } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useOrder, OrderItem } from './order-context'; // Add this import

// Order Section Component
export const OrderSection: React.FC = () => {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    subtotal, 
    tax, 
    deliveryFee, 
    total,
    orderType,
    setOrderType,
    clearOrder
  } = useOrder();
  
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [specialInstructions, setSpecialInstructions] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [orderNumber, setOrderNumber] = React.useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Generate a random order number
    const newOrderNumber = `TP${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderNumber(newOrderNumber);
      setShowSuccessModal(true);
    }, 1500);
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    // Reset form
    setName('');
    setPhone('');
    setAddress('');
    setSpecialInstructions('');
    // Clear the order
    clearOrder();
  };

  const handleQuantityChange = (item: OrderItem, change: number) => {
    const newQuantity = item.quantity + change;
    if (newQuantity >= 1) {
      updateQuantity(item.id, newQuantity);
    } else {
      removeItem(item.id);
    }
  };
  
  return (
    <>
      <section id="order" className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Order Now</h2>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            Get your perfectly pressed burrito delivered or ready for pickup.
            Place your order below and we'll have it ready in no time.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardBody className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Order Summary Section - Mobile First */}
                  <div className="lg:order-2">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-semibold">Order Summary</h3>
                      {items.length > 0 && (
                        <Badge color="primary" content={items.reduce((sum, item) => sum + item.quantity, 0)}>
                          <Icon icon="lucide:shopping-cart" className="text-xl" />
                        </Badge>
                      )}
                    </div>
                    
                    {items.length === 0 ? (
                      <div className="text-center py-8">
                        <Icon icon="lucide:shopping-bag" className="text-default-300 text-5xl mx-auto mb-4" />
                        <p className="text-foreground-500">Your order is empty</p>
                        <p className="text-sm text-foreground-400 mb-4">Add items from the menu above</p>
                        <Button 
                          as="a" 
                          href="#menu" 
                          color="primary" 
                          variant="flat"
                          startContent={<Icon icon="lucide:utensils" />}
                        >
                          Browse Menu
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4 mb-6">
                        {items.map((item) => (
                          <div key={item.id + JSON.stringify(item.options)} className="flex justify-between items-center pb-2 border-b border-default-200">
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <p className="font-medium">{item.name}</p>
                                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                              </div>
                              {item.options && item.options.length > 0 && (
                                <p className="text-sm text-foreground-500">{item.options.join(', ')}</p>
                              )}
                              <div className="flex items-center gap-2 mt-1">
                                <Button 
                                  size="sm" 
                                  isIconOnly 
                                  variant="light" 
                                  onPress={() => handleQuantityChange(item, -1)}
                                >
                                  <Icon icon="lucide:minus" className="text-base" />
                                </Button>
                                <span className="text-sm w-6 text-center">{item.quantity}</span>
                                <Button 
                                  size="sm" 
                                  isIconOnly 
                                  variant="light" 
                                  onPress={() => handleQuantityChange(item, 1)}
                                >
                                  <Icon icon="lucide:plus" className="text-base" />
                                </Button>
                                <Button 
                                  size="sm" 
                                  isIconOnly 
                                  variant="light" 
                                  color="danger" 
                                  className="ml-auto"
                                  onPress={() => removeItem(item.id)}
                                >
                                  <Icon icon="lucide:trash-2" className="text-base" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between">
                        <p>Subtotal</p>
                        <p className="font-medium">${subtotal.toFixed(2)}</p>
                      </div>
                      
                      <div className="flex justify-between">
                        <p>Tax</p>
                        <p className="font-medium">${tax.toFixed(2)}</p>
                      </div>
                      
                      {orderType === 'delivery' && (
                        <div className="flex justify-between">
                          <p>Delivery Fee</p>
                          <p className="font-medium">${deliveryFee.toFixed(2)}</p>
                        </div>
                      )}
                      
                      <div className="flex justify-between pt-2 border-t border-default-200">
                        <p className="font-bold">Total</p>
                        <p className="font-bold text-lg">
                          ${total.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-primary/5 p-4 rounded-medium">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon icon="lucide:info" className="text-primary" />
                        <p className="font-medium">Estimated Time</p>
                      </div>
                      <p className="text-foreground-500">
                        {orderType === 'pickup' ? 'Ready for pickup in 15-20 minutes' : 'Delivery in 30-45 minutes'}
                      </p>
                    </div>
                  </div>

                  {/* Order Form Section */}
                  <div className="lg:order-1">
                    <h3 className="text-xl font-semibold mb-6">Place Your Order</h3>
                    
                    <div className="flex gap-4 mb-6">
                      <Button
                        color={orderType === 'pickup' ? 'primary' : 'default'}
                        variant={orderType === 'pickup' ? 'solid' : 'flat'}
                        className="flex-1"
                        startContent={<Icon icon="lucide:shopping-bag" />}
                        onPress={() => setOrderType('pickup')}
                      >
                        Pickup
                      </Button>
                      <Button
                        color={orderType === 'delivery' ? 'primary' : 'default'}
                        variant={orderType === 'delivery' ? 'solid' : 'flat'}
                        className="flex-1"
                        startContent={<Icon icon="lucide:truck" />}
                        onPress={() => setOrderType('delivery')}
                      >
                        Delivery
                      </Button>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <Input
                        label="Full Name"
                        placeholder="Enter your full name"
                        value={name}
                        onValueChange={setName}
                        isRequired
                        startContent={<Icon icon="lucide:user" className="text-default-400" />}
                      />
                      
                      <Input
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        value={phone}
                        onValueChange={setPhone}
                        isRequired
                        startContent={<Icon icon="lucide:phone" className="text-default-400" />}
                      />
                      
                      {orderType === 'delivery' && (
                        <Input
                          label="Delivery Address"
                          placeholder="Enter your delivery address"
                          value={address}
                          onValueChange={setAddress}
                          isRequired
                          startContent={<Icon icon="lucide:map-pin" className="text-default-400" />}
                        />
                      )}
                      
                      <Textarea
                        label="Special Instructions"
                        placeholder="Any special requests or dietary restrictions?"
                        value={specialInstructions}
                        onValueChange={setSpecialInstructions}
                        className="min-h-[100px]"
                      />
                      
                      <div className="pt-2">
                        <Checkbox defaultSelected>
                          Send me updates about special offers and promotions
                        </Checkbox>
                      </div>
                      
                      <Button
                        type="submit"
                        color="primary"
                        fullWidth
                        size="lg"
                        isLoading={isSubmitting}
                        isDisabled={items.length === 0}
                      >
                        {isSubmitting ? 'Processing Order...' : 'Place Order'}
                      </Button>
                      
                      {items.length === 0 && (
                        <p className="text-danger text-center text-sm mt-2">
                          Please add items to your order from the menu
                        </p>
                      )}
                    </form>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Success Modal */}
      <Modal 
        isOpen={showSuccessModal} 
        onClose={handleModalClose}
        placement="center"
        backdrop="blur"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col items-center text-center pb-2">
            <div className="bg-success/10 p-4 rounded-full mb-4">
              <Icon icon="lucide:check-circle" className="text-success text-4xl" />
            </div>
            <h3 className="text-2xl font-bold text-success">Order Confirmed!</h3>
          </ModalHeader>
          <ModalBody className="text-center pb-2">
            <p className="text-lg mb-2">
              Thank you for your order, <span className="font-semibold">{name}</span>!
            </p>
            <div className="bg-primary/5 p-4 rounded-lg mb-4">
              <p className="text-sm text-foreground-500 mb-1">Order Number</p>
              <p className="text-xl font-bold text-primary">{orderNumber}</p>
            </div>
            <p className="text-foreground-600 mb-2">
              We've received your order and will contact you shortly at <span className="font-medium">{phone}</span>.
            </p>
            <div className="flex items-center justify-center gap-2 text-foreground-500">
              <Icon icon="lucide:clock" />
              <span>
                {orderType === 'pickup' 
                  ? 'Ready for pickup in 15-20 minutes' 
                  : 'Delivery in 30-45 minutes'
                }
              </span>
            </div>
            {orderType === 'delivery' && (
              <div className="flex items-start justify-center gap-2 mt-2 text-foreground-500">
                <Icon icon="lucide:map-pin" className="mt-0.5" />
                <span className="text-sm">{address}</span>
              </div>
            )}
          </ModalBody>
          <ModalFooter className="flex flex-col gap-2">
            <Button 
              color="primary" 
              fullWidth
              onPress={handleModalClose}
              startContent={<Icon icon="lucide:utensils" />}
            >
              Order More
            </Button>
            <Button 
              variant="light" 
              fullWidth
              onPress={handleModalClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};