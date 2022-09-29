import { createContext, ReactNode, useState } from "react"

interface Item {
  name: string
  price: string
  image: string
  defaultPriceId: string
}

interface CartItemsContextType {
  cartItems: Item[]
  addCartItem: (data: CartItemProps) => (void)
  handleRemoveItem: (priceId: string) => (void)
}

interface CartItemProps {
  name: string
  price: string
  image: string
  defaultPriceId: string
}

interface CartItemsProviderProps {
  children: ReactNode
}

export const CartItemsContext = createContext({} as CartItemsContextType)

export default function CartItemsProvider({ children }: CartItemsProviderProps) {
  const [cartItems, setCartItems] = useState<Item[]>([])

  function addCartItem(data: CartItemProps) {
    setCartItems([...cartItems, {
      name: data.name,
      price: data.price, 
      image: data.image,
      defaultPriceId: data.defaultPriceId,
    }])
  }

  console.log(cartItems);

  function handleRemoveItem(priceId) {
    const filteredList = cartItems.filter(item => item.defaultPriceId != priceId);
    setCartItems(filteredList);
  }


  return (
    <CartItemsContext.Provider value={{ cartItems, addCartItem, handleRemoveItem }}>
      {children}
    </CartItemsContext.Provider>
  )
}