"use client";

import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { CartHandle } from './styles'; // Added import

interface CartItem {
  id: number;
  name: string;
  price: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const newTotal = cartItems.reduce((sum, item) => sum + item.price, 0);
      setTotal(newTotal);
    };

    calculateTotal();
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <S.Container>
      <S.CartHandle /> {/* Added CartHandle component */}
      <S.TitleContainer>
        <ShoppingCart size={24} />
        <S.Title>Carrinho de Compras</S.Title>
      </S.TitleContainer>
      <S.CartList>
        {cartItems.map((item) => (
          <S.CartItem key={item.id}>
            <S.ItemInfo>
              <S.ItemName>{item.name}</S.ItemName>
              <S.ItemPrice>
                {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </S.ItemPrice>
            </S.ItemInfo>
            <S.RemoveButton onClick={() => removeFromCart(item.id)}>
              <Trash2 size={18} />
            </S.RemoveButton>
          </S.CartItem>
        ))}
      </S.CartList>
      <S.Total>
        <span>Total:</span>
        <span>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
      </S.Total>
      <S.CheckoutButton onClick={() => console.log('Finalizar compra')}>
        Finalizar Compra
      </S.CheckoutButton>
    </S.Container>
  );
};

export default Cart;

