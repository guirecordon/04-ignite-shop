import { styled } from "..";

export const CartCounter = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  background: '$green300',
  width: 27,
  height: 27,
  borderRadius: '50%',
  border: 'solid 3px',
  borderColor: '$gray900',
  transform: 'translate(40%, -30%)',
  color: '$gray100',
  fontWeight: 700,
  fontSize: 14,
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})