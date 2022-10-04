import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/future/image"
import Head from "next/head"
import { useContext, useState } from "react"
import Stripe from "stripe"
import Layout from "../../components/layout/layout"
import { CartItemsContext } from "../../contexts/CartItemsContext"
import { stripe } from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  }
}

export default function Product({ product }: ProductProps) {
  const { addCartItem } = useContext(CartItemsContext)

  function handleSendToCart(e, name, description, id, price, image, defaultPriceId) {
    e.preventDefault();
    const data = {name, description, id, price, image, defaultPriceId}
    
    addCartItem(data);
  }


  return (
    <Layout>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>
            {product.description}
          </p>

          <button onClick={(e) => handleSendToCart(e, product.name, product.description, product.id, product.price, product.imageUrl, product.defaultPriceId)}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
  const productId = params.id;
  
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}