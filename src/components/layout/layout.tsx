import Image from "next/future/image";
import { Handbag } from "phosphor-react";
import { CartIconContainer, Container, Header } from "../../styles/pages/app";
import igniteLogo from '../../assets/igniteLogo.svg';
import ModalCartShop from "../modalCartShop";
import { useContext, useState } from "react";
import { CartCounter } from "../../styles/components/layout";
import { CartItemsContext } from "../../contexts/CartItemsContext";


export default function Layout({children}) {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(CartItemsContext);

  function toggleCart() {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <ModalCartShop open={isOpen} onClose={toggleCart}  />
    
      <Header>
        <Image src={igniteLogo} alt="" />

        <CartIconContainer onClick={toggleCart}>
          <Handbag size={24} weight="bold" color="#8D8D99"/>
          {cartItems.length > 0 &&  <CartCounter>{cartItems.length}</CartCounter>}
          
        </CartIconContainer>
        
      </Header>

      {children}
    </Container>




  )
}