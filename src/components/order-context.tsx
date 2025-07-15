// New context file to manage order state across components
import React from 'react';

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  options?: string[];
  quantity: number;
}

interface OrderContextType {
  items: OrderItem[];
  addItem: (item: Omit<OrderItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearOrder: () => void;
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
  orderType: 'pickup' | 'delivery';
  setOrderType: (type: 'pickup' | 'delivery') => void;
}

const OrderContext = React.createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = React.useState<OrderItem[]>([]);
  const [orderType, setOrderType] = React.useState<'pickup' | 'delivery'>('pickup');
  
  const addItem = React.useCallback((newItem: Omit<OrderItem, 'quantity'>) => {
    setItems(prevItems => {
      // Check if item already exists
      const existingItemIndex = prevItems.findIndex(item => 
        item.id === newItem.id && 
        JSON.stringify(item.options) === JSON.stringify(newItem.options)
      );
      
      if (existingItemIndex >= 0) {
        // Increment quantity if item exists
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        // Add new item with quantity 1
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });
  }, []);
  
  const removeItem = React.useCallback((id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);
  
  const updateQuantity = React.useCallback((id: string, quantity: number) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      ).filter(item => item.quantity > 0)
    );
  }, []);
  
  const clearOrder = React.useCallback(() => {
    setItems([]);
  }, []);
  
  // Calculate order totals
  const subtotal = React.useMemo(() => {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }, [items]);
  
  const tax = React.useMemo(() => subtotal * 0.09, [subtotal]);
  const deliveryFee = orderType === 'delivery' ? 4.99 : 0;
  const total = subtotal + tax + deliveryFee;
  
  const value = React.useMemo(() => ({
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearOrder,
    subtotal,
    tax,
    deliveryFee,
    total,
    orderType,
    setOrderType
  }), [items, addItem, removeItem, updateQuantity, clearOrder, subtotal, tax, deliveryFee, total, orderType, setOrderType]);
  
  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = React.useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};