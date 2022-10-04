import axios from "axios";
import Image from "next/future/image";
import { X } from "phosphor-react";
import { useContext } from "react";
import { CartItemsContext } from "../../contexts/CartItemsContext";
import { CartItemsContainer, EmptyCartLiner, FooterLineOne, FooterLineTwo, ImgWrap, ModalContainer, ModalFooter, ProductContainer, ProductDetailsWrap, XWrap } from "./styles";

export default function ModalCartShop({ open, onClose }) {
  const { cartItems, handleRemoveItem, isSendDisabled } = useContext(CartItemsContext);

  const totalPrice = cartItems.reduce((acc, currVal) => {
    const formattedPrice = currVal.price.slice(3).replace(',', '.');
    const numberPrice = parseFloat(formattedPrice, 10);
    return acc += numberPrice;
  }, 0)

  async function goToCart() {
    const myListItems = cartItems.map(item => {
      return item.defaultPriceId
    })

    const countedProducts = myListItems.reduce((allProducts, name) => {
      const currCount = allProducts[name] ?? 0;
      return {
        ...allProducts,
        [name]: currCount + 1,
      };
    }, {});

    console.log(countedProducts)

    const myArrayWithNoDuplicates = myListItems.reduce(
      (previousValue, currentValue) => {
        if (!previousValue.includes(currentValue)) {
          return [...previousValue, currentValue];
        }
        return previousValue;
      },
      [],
    );

    console.log(myArrayWithNoDuplicates)


    const finalListItems = myArrayWithNoDuplicates.map(item => {
      return {
        price: item,
        quantity: countedProducts[item],
      }
    })

    console.log(finalListItems)


    const response = await axios.post('/api/checkout', {
      finalListItems,
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
              <ProductContainer key={item.myId}>
                <ImgWrap>
                  <Image src={item.image} width={95} height={95} alt="" />
                </ImgWrap>
      
                <ProductDetailsWrap> 
                  <h4>{item.name}</h4>
                  <span>{item.price}</span>
                  <p onClick={() => handleRemoveItem(item.myId)}>
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

        <button onClick={goToCart} disabled={isSendDisabled}>
          Finalizar compra
        </button>
      </ModalFooter>
    </ModalContainer>
  )
}