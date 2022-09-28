import Image from "next/future/image";
import { Handbag } from "phosphor-react";
import { CartIconContainer, Container, Header } from "../../styles/pages/app";
import igniteLogo from '../../assets/igniteLogo.svg';
import ModalCartShop from "../modalCartShop";
import { useState } from "react";
import { CartCounter } from "../../styles/components/layout";


export default function Layout({children}) {
  const [isOpen, setIsOpen] = useState(false);

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
          <CartCounter>1</CartCounter>
        </CartIconContainer>
        
      </Header>

      {children}
    </Container>




  )
}