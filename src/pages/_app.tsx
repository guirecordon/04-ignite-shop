import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import igniteLogo from '../assets/igniteLogo.svg';
import Image from "next/future/image";
import { CartIconContainer, Container, Header } from "../styles/pages/app";
import { Handbag } from "phosphor-react";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  
  return ( 
    <Container>
      <Header>
        <Image src={igniteLogo} alt="" />

        <CartIconContainer>
          <Handbag size={24} weight="bold" color="#8D8D99"/>
        </CartIconContainer>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
