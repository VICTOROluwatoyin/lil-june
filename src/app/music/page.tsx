"use client";

import Image from "next/image";
import Link from "next/link";
import { albums, type Track } from "@/lib/catalog";
import { useCart } from "@/components/cart-provider";
import { useState } from "react";

export default function MusicPage() {
  const album = albums[0];
  const { items: cart, addToCart, removeFromCart, updateQuantity, total } = useCart();
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a1128] via-[#1e3a8a] to-[#0a1128] text-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#d4af37] to-white bg-clip-text text-transparent">
            Music Store
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Browse and select your favorite tracks. Add them to your cart and proceed to purchase.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Album Card */}
            <div className="bg-[#0a1128]/80 border border-[#d4af37]/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative h-64 w-full md:w-64 rounded-xl overflow-hidden shadow-xl shadow-[#d4af37]/20">
                  <Image
                    src={album.coverImage}
                    alt={album.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 256px"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm uppercase tracking-wider text-[#d4af37] mb-2">Featured Album</p>
                  <h2 className="text-3xl font-bold mb-2">{album.title}</h2>
                  <p className="text-white/70 mb-4">{album.artist}</p>
                  <p className="text-white/80 leading-relaxed">
                    Discover the latest collection of tracks from Lil June. Each song tells a story 
                    and brings a unique energy to your playlist.
                  </p>
                </div>
              </div>
            </div>

            {/* Track List */}
            <div className="bg-[#0a1128]/80 border border-[#d4af37]/20 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[#d4af37]">Tracklist</span>
                <span className="text-sm font-normal text-white/60">({album.tracks.length} tracks)</span>
              </h3>
              
              <div className="space-y-3">
                {album.tracks.map((track, index) => {
                  const inCart = cart.find((item) => item.id === track.id);
                  const quantity = inCart?.quantity || 0;
                  
                  return (
                    <div
                      key={track.id}
                      className={`group flex items-center justify-between p-4 rounded-xl border transition-all ${
                        selectedTrack?.id === track.id
                          ? "border-[#d4af37] bg-[#d4af37]/10 shadow-lg shadow-[#d4af37]/20"
                          : "border-[#d4af37]/20 bg-[#0a1128]/50 hover:border-[#d4af37]/40 hover:bg-[#0a1128]/70"
                      }`}
                      onClick={() => setSelectedTrack(track)}
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1e40af] to-[#d4af37] flex items-center justify-center text-sm font-bold text-white">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">{track.title}</h4>
                          <div className="flex items-center gap-4 text-sm text-white/70">
                            <span>{track.artist}</span>
                            <span>•</span>
                            <span>{track.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-xl font-bold text-[#d4af37]">${track.price.toFixed(2)}</p>
                        </div>
                        
                        {quantity > 0 ? (
                          <div className="flex items-center gap-3 bg-[#0a1128] border border-[#d4af37]/30 rounded-lg px-3 py-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                updateQuantity(track.id, quantity - 1);
                              }}
                              className="w-8 h-8 rounded-full bg-[#d4af37]/20 hover:bg-[#d4af37]/30 text-[#d4af37] font-bold transition-colors"
                            >
                              −
                            </button>
                            <span className="w-8 text-center font-semibold">{quantity}</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                updateQuantity(track.id, quantity + 1);
                              }}
                              className="w-8 h-8 rounded-full bg-[#d4af37]/20 hover:bg-[#d4af37]/30 text-[#d4af37] font-bold transition-colors"
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart(track);
                              setSelectedTrack(track);
                            }}
                            className="px-6 py-2 rounded-full bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-semibold hover:shadow-lg shadow-[#d4af37]/30 hover:scale-105 transition-all"
                          >
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-[#0a1128]/90 border border-[#d4af37]/30 rounded-2xl p-6 backdrop-blur-md shadow-2xl shadow-[#d4af37]/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Your Cart</h3>
                {cart.length > 0 && (
                  <span className="px-3 py-1 rounded-full bg-[#d4af37]/20 text-[#d4af37] text-sm font-semibold">
                    {cart.length} {cart.length === 1 ? "item" : "items"}
                  </span>
                )}
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🎵</span>
                  </div>
                  <p className="text-white/70 mb-2">Your cart is empty</p>
                  <p className="text-sm text-white/50">Add tracks to get started</p>
                </div>
              ) : (
                <>
                  <div className="space-y-3 mb-6 max-h-96 overflow-y-auto pr-2">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="bg-[#0a1128]/50 border border-[#d4af37]/20 rounded-xl p-4"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h4 className="font-semibold text-white mb-1 line-clamp-1">
                              {item.title}
                            </h4>
                            <p className="text-sm text-white/60">{item.artist}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-white/40 hover:text-red-400 transition-colors ml-2"
                            aria-label="Remove from cart"
                          >
                            ✕
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 rounded-full bg-[#d4af37]/20 hover:bg-[#d4af37]/30 text-[#d4af37] text-sm font-bold transition-colors"
                            >
                              −
                            </button>
                            <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 rounded-full bg-[#d4af37]/20 hover:bg-[#d4af37]/30 text-[#d4af37] text-sm font-bold transition-colors"
                            >
                              +
                            </button>
                          </div>
                          <p className="text-[#d4af37] font-bold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-[#d4af37]/20 pt-4 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/80">Subtotal</span>
                      <span className="text-white/80">${total.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-white">Total</span>
                      <span className="text-2xl font-bold text-[#d4af37]">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Link
                    href="/checkout"
                    className="block w-full text-center py-4 rounded-full bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-bold text-lg shadow-lg shadow-[#d4af37]/30 hover:shadow-[#d4af37]/50 hover:scale-105 transition-all"
                  >
                    Proceed to Buy
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

