import { GetServerSideProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, MultipleImageContainer, SuccessContainer } from "../styles/pages/success";

interface Product {
  name: string;
  imageUrl: string;
}

interface SuccessProps {
  customerName: string;
  products: Product[],
}

export default function Success({customerName, products}: any) {

console.log(products)

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <MultipleImageContainer>
          {products.map((product) => {
            return (
            <ImageContainer key={product.id} style={{marginLeft: '-30px'}}>
              <Image src={product.price.product.images[0]} width={120} height={110} alt="" />
            </ImageContainer>
            )
          })}
        </MultipleImageContainer>     


        {products.length > 1 ? (
          <p>
            Uhhuul <strong>{ customerName }</strong>, suas <strong>{ products.length } camisetas</strong> já estão a caminho da sua casa.
          </p>
        ) : (
          <p>
            Uhhuul <strong>{ customerName }</strong>, sua <strong>camiseta</strong> já está a caminho da sua casa.
        </p>
        )}  


        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if(!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
  
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name;
  // const product = session.line_items.data[0].price.product as Stripe.Product
  const products = session.line_items.data

  console.log(products)


  return {
    props: {
      customerName,
      products,
    }
  }
}