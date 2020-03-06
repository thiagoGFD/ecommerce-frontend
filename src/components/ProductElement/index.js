import React, { useState } from 'react';

import Button from "../Button";

import { useTranslation } from 'react-i18next';

function ProductElement({product}) {
  // TODO criar custom hook
  const [cartProducts, setCartProducts] = useState([]);
  const { t } = useTranslation();

  const addProduct = (product) => {
    console.log('product added ' , product)
    setCartProducts([
      ...cartProducts,
      product
    ]);
  }

  return (
    <li>
      <img src={product.image.xs} alt={product.description} />
      <span>{product.name}</span>
      <Button label={t('productElement.add')} handleClick={()=>{addProduct(product)}}/>
    </li>
  );
}

export default ProductElement;