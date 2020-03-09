import React from 'react';

import Button from "../Button";

import { useTranslation } from 'react-i18next';

function ProductElement({product, addProduct}) {
  const { t } = useTranslation();

  return (
    <li>
      <img src={product.image.xs} alt={product.description} />
      <span>{product.name}</span>
      <Button label={t('productElement.add')} handleClick={()=>{addProduct(product)}}/>
    </li>
  );
}

export default ProductElement;