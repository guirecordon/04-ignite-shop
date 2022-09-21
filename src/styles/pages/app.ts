import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const CartIconContainer = styled('div', {
  background: '$gray800',
  padding: '0.75rem',
  borderRadius: 6,
  cursor: 'pointer',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})