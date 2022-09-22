import Image from "next/future/image";
import { X } from "phosphor-react";
import { CartItemsContainer, FooterLineOne, FooterLineTwo, ImgWrap, ModalContainer, ModalFooter, ProductContainer, ProductDetailsWrap, XWrap } from "./styles";

export default function ModalCartShop({ open, onClose }) {
  return open && (
    <ModalContainer>
      <XWrap onClick={onClose}>
        <X size={24} weight="bold" />
      </XWrap>

      <h2>Sacola de Compras</h2>
      <CartItemsContainer>
        <ProductContainer>
          <ImgWrap>

          </ImgWrap>

          <ProductDetailsWrap> 
            <h4>Camiseta Beyond the Limits</h4>
            <span>R$ 79,90</span>
            <p>Remover</p>
          </ProductDetailsWrap>
        </ProductContainer>

        <ProductContainer>
          <ImgWrap>

          </ImgWrap>

          <ProductDetailsWrap> 
            <h4>Camiseta Beyond the Limits</h4>
            <span>R$ 79,90</span>
            <p>Remover</p>
          </ProductDetailsWrap>
        </ProductContainer>

        <ProductContainer>
          <ImgWrap>

          </ImgWrap>

          <ProductDetailsWrap> 
            <h4>Camiseta Beyond the Limits</h4>
            <span>R$ 79,90</span>
            <p>Remover</p>
          </ProductDetailsWrap>
        </ProductContainer>
      </CartItemsContainer>

      <ModalFooter>
        <div>
          <FooterLineOne>
            <h4>Quantidade</h4>
            <span>3 items</span>
          </FooterLineOne>
          <FooterLineTwo>
            <h4>Valor Total</h4>
            <span>R$ 270,00</span>
          </FooterLineTwo>
        </div>

        <button>
          Finalizar compra
        </button>
      </ModalFooter>
    </ModalContainer>
  )
}