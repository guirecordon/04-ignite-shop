import { styled } from "../../styles";

export const ModalContainer = styled('section', {
  position: 'absolute',
  right: 0,
  zIndex: 2000,
  width: 'calc((100vw / 3) + 82px)',
  height: '100vh',
  background: '$gray800',
  padding: '0 3rem',

  h2: {
    color: '$gray100',
    fontSize: '$lg',
    marginBottom: '1.5rem',
  }
})

export const XWrap = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  cursor: 'pointer',
  marginRight: '-1rem',
  color: '$gray300',
  padding: '1.25rem 0',
})

export const CartItemsContainer = styled('div', {
  overflowY: 'auto',
})

export const ProductContainer = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  paddingBottom: '1.5rem',
})

export const ImgWrap = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  width: 102,
  height: 93,
  borderRadius: 8,
})

export const ProductDetailsWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  

  h4: {
    fontSize: '1.125rem',
    color: '$gray300',
    lineHeight: 1.6,
  },

  span: {
    color: '$gray100',
    fontSize: '1.125rem',
    fontWeight: 'bold',
  },

  p: {
    color: '$green500',
    outline: 'none',
    border: 'none',
    background: 'transparent',
    padding: 0,
    margin: 0,
    fontWeight: 'bold',
    fontSize: '1rem',
    lineHeight: 1.6,
    cursor: 'pointer',
  }
})

export const ModalFooter = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  button: {
    background: '$green500',
    color: '$white',
    fontSize: '1.25rem',
    border: 'none',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
  
    '&:hover': {
      background: '$green300',
    }
  }
})

export const FooterLineOne = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  color: '$gray300',

  h4: {
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.6,
  },

  span: {
    fontSize: '1.125rem',
    lineHeight: 1.6,
  }
})

export const FooterLineTwo = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  span: {
    fontSize: '1.5rem',
    lineHeight: 1.6,
    fontWeight: 'bold',
  }
})

export const EmptyCartLiner = styled('p', {
  padding: '3.5rem 0',
  textAlign: 'center',
})
