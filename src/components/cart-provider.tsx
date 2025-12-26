"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Track } from "@/lib/catalog";

export type CartItem = Track & { quantity: number };

type CartContextValue = {
  items: CartItem[];
  total: number;
  addToCart: (track: Track) => void;
  removeFromCart: (trackId: string) => void;
  updateQuantity: (trackId: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (track: Track) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === track.id);
      if (existing) {
        return prev.map((item) =>
          item.id === track.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...track, quantity: 1 }];
    });
  };

  const removeFromCart = (trackId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== trackId));
  };

  const updateQuantity = (trackId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(trackId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === trackId ? { ...item, quantity } : item,
      ),
    );
  };

  const clearCart = () => setItems([]);

  const value = useMemo(() => {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    return { items, total, addToCart, removeFromCart, updateQuantity, clearCart };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
