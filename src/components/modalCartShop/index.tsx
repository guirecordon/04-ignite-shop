import axios from "axios";
import Image from "next/future/image";
import { X } from "phosphor-react";
import { useContext } from "react";
import { CartItemsContext } from "../../contexts/CartItemsContext";
import { CartItemsContainer, EmptyCartLiner, FooterLineOne, FooterLineTwo, ImgWrap, ModalContainer, ModalFooter, ProductContainer, ProductDetailsWrap, XWrap } from "./styles";

export default function ModalCartShop({ open, onClose }) {
  const { cartItems, handleRemoveItem } = useContext(CartItemsContext);
  const totalPrice = cartItems.reduce((acc, currVal) => {
    const formattedPrice = currVal.price.slice(3).replace(',', '.');
    const numberPrice = parseFloat(formattedPrice, 10);
    return acc += numberPrice;
  }, 0)

  async function goToCart() {
    const myListItems = cartItems.map(item => {
      return {
        price: item.defaultPriceId,
        quantity: 1,
      }
    })

    const response = await axios.post('/api/checkout', {
      myListItems,
    })

    const { checkoutUrl } = response.data;

    window.location.href = checkoutUrl;
  }


  return open && (
    <ModalContainer>
      <XWrap onClick={onClose}>
        <X size={24} weight="bold" />
      </XWrap>

      <h2>Sacola de Compras</h2>
      {cartItems.length > 0 ? (
        <CartItemsContainer>
          {cartItems.map((item) => {
            return (
              <ProductContainer key={item.name}>
                <ImgWrap>
                  <Image src={item.image} width={95} height={95} alt="" />
                </ImgWrap>
      
                <ProductDetailsWrap> 
                  <h4>{item.name}</h4>
                  <span>{item.price}</span>
                  <p onClick={() => handleRemoveItem(item.defaultPriceId)}>
                    Remover
                  </p>
                </ProductDetailsWrap>
              </ProductContainer>
            )
          })}
        </CartItemsContainer>
      ) : (
        <EmptyCartLiner>Seu carrinho de compras está vazio.</EmptyCartLiner>
      )}


      <ModalFooter>
        <div>
          <FooterLineOne>
            <h4>Quantidade</h4>
            <span>{cartItems.length} item(s)</span>
          </FooterLineOne>
          <FooterLineTwo>
            <h4>Valor Total</h4>
            <span>{totalPrice}</span>
          </FooterLineTwo>
        </div>

        <button onClick={goToCart}>
          Finalizar compra
        </button>
      </ModalFooter>
    </ModalContainer>
  )
}