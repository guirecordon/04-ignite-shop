import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: '656',
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    right: '0.25rem',
    left: '0.25rem',
    padding: '2rem',
    color: '$gray300',

    borderRadius: 6,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
});

export const LeftSideFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    fontSize: '$lg',
    lineHeight: 1.6,
  },

  span: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$green300',
    lineHeight: 1.4,
  },
})

export const HandbagContainer = styled('div', {
  padding: '0.75rem',
  background: '$green500',
  borderRadius: 6,

  '&:hover': {
    opacity: 0.7,
  }
})

export const CartModalContainer = styled('section', {
  color: '$white',
})