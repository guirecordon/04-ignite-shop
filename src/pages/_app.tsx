import { AppProps } from "next/app";
import CartItemsProvider from "../contexts/CartItemsContext";
import { globalStyles } from "../styles/global";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartItemsProvider>
      <Component {...pageProps} />
    </CartItemsProvider>
  )
}
