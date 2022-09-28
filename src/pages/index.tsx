import Image from 'next/future/image';
import Link from 'next/link';

import { useKeenSlider } from 'keen-slider/react'

import { CartModalContainer, HandbagContainer, HomeContainer, LeftSideFooter, Product } from '../styles/pages/home';

import 'keen-slider/keen-slider.min.css';
import { stripe } from '../lib/stripe';
import { GetStaticProps } from 'next';
import Stripe from 'stripe';
import Head from 'next/head';
import { Handbag } from 'phosphor-react';
import ModalCartShop from '../components/modalCartShop';
import Layout from '../components/layout/layout';
import { useContext, useState } from 'react';
import { CartItemsContext } from '../contexts/CartItemsContext';


interface HomeProps {
  products: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: string;
    defaultPriceId; string;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [ sliderRef ] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    }
  })

  const { addCartItem } = useContext(CartItemsContext);

  function handleSendToCart(e, name, description, id, price, image, defaultPriceId) {
    e.preventDefault();
    const data = {name, description, id, price, image, defaultPriceId}
    
    addCartItem(data);
  }

  return (
    <Layout>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>


      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
              <Product  className="keen-slider__slide">
                <Image src={product.imageUrl} alt="camiseta 1" width={520} height={480} />

                <footer>
                  <LeftSideFooter>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </LeftSideFooter>
                  <HandbagContainer onClick={(e) => handleSendToCart(e, product.name, product.description, product.id, product.price, product.imageUrl, product.defaultPriceId)}>
                    <Handbag size={32} color="#FFFFFF" weight='bold' />
                  </HandbagContainer>
                </footer>
              </Product>
            </Link>
          )
        })}

        
      </HomeContainer>
    </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      defaultPriceId: price.id,
    }
  })
  
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}