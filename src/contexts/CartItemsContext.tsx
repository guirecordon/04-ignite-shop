import { createContext, ReactNode, useState } from "react"

interface Item {
  myId: number
  id: string
  name: string
  price: string
  image: string
  defaultPriceId: string
}

interface CartItemsContextType {
  cartItems: Item[]
  isSendDisabled: boolean
  addCartItem: (data: CartItemProps) => (void)
  handleRemoveItem: (productMyId: number) => (void)
}

interface CartItemProps {
  id: string
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
  const [uniqueId, setUniqueId] = useState(0)
  const [isSendDisabled, setIsSendDisabled] = useState(true)


  function addCartItem(data: CartItemProps) {
    setIsSendDisabled(false)
    
    setUniqueId(uniqueId + 1);

    setCartItems([...cartItems, {
      myId: uniqueId,
      id: data.id,
      name: data.name,
      price: data.price, 
      image: data.image,
      defaultPriceId: data.defaultPriceId,
    }])
  }

  console.log(cartItems);

  function handleRemoveItem(productMyId) {
    const filteredList = cartItems.filter(item => item.myId != productMyId);
    setCartItems(filteredList);
  }


  return (
    <CartItemsContext.Provider value={{ cartItems, addCartItem, handleRemoveItem, isSendDisabled }}>
      {children}
    </CartItemsContext.Provider>
  )
}