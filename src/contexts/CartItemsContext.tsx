import { createContext, ReactNode, useState } from "react"

interface Item {
  name: string
  price: string
  image: string
}

interface CartItemsContextType {
  cartItems: Item[]
  addCartItem: (data: CartItemProps) => (void)
}

interface CartItemProps {
  name: string
  price: string
  image: string
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
      image: data.image
    }])
  }

  console.log(cartItems);


  return (
    <CartItemsContext.Provider value={{ cartItems, addCartItem }}>
      {children}
    </CartItemsContext.Provider>
  )
}