"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/components/cart-provider";
import { useState } from "react";

// WhatsApp number
const WHATSAPP_NUMBER = "070470775560"; // Format: country code + number

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clearCart } = useCart();
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const formatWhatsAppMessage = () => {
    if (items.length === 0) return "";

    let message = "🎵 *Music Order Request*\n\n";
    message += `*Customer Name:* ${customerName || "Not provided"}\n`;
    message += `*Email:* ${customerEmail || "Not provided"}\n\n`;
    message += "*Selected Tracks:*\n\n";

    items.forEach((item, index) => {
      message += `${index + 1}. *${item.title}*\n`;
      message += `   Artist: ${item.artist}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: $${item.price.toFixed(2)} each\n`;
      message += `   Subtotal: $${(item.price * item.quantity).toFixed(2)}\n\n`;
    });

    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `*Total Amount: $${total.toFixed(2)}*\n\n`;
    message += `Please confirm this order and provide payment instructions.`;

    return encodeURIComponent(message);
  };

  const handleProceedToWhatsApp = () => {
    if (items.length === 0) {
      alert("Your cart is empty. Please add items to your cart first.");
      return;
    }

    if (!customerName.trim()) {
      alert("Please enter your name before proceeding.");
      return;
    }

    const message = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    // Clear cart after redirect
    clearCart();
    
    // Optionally redirect to home after a delay
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#0a1128] via-[#1e3a8a] to-[#0a1128] text-white py-12">
        <div className="mx-auto max-w-3xl px-4">
          <div className="bg-[#0a1128]/80 border border-[#d4af37]/20 rounded-2xl p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🛒</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-white/70 mb-8">Add some tracks to your cart before checkout.</p>
            <button
              onClick={() => router.push("/music")}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1e40af] to-[#3b82f6] px-8 py-3 text-white font-semibold hover:shadow-lg shadow-[#d4af37]/30 transition-all"
            >
              Browse Music
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a1128] via-[#1e3a8a] to-[#0a1128] text-white py-12">
      <div className="mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.push("/music")}
            className="text-white/70 hover:text-[#d4af37] transition-colors mb-4 inline-flex items-center gap-2"
          >
            ← Back to Music
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Checkout</h1>
          <p className="text-white/70">Complete your purchase by providing your details below</p>
        </div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8">
          {/* Customer Information */}
          <div className="space-y-6">
            <div className="bg-[#0a1128]/80 border border-[#d4af37]/20 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-[#d4af37]">Customer Information</span>
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-white/90 mb-2">
                    Full Name <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a1128] border border-[#d4af37]/20 text-white placeholder-white/40 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white/90 mb-2">
                    Email Address <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a1128] border border-[#d4af37]/20 text-white placeholder-white/40 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all"
                  />
                </div>

                <div className="bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-xl p-4 mt-6">
                  <p className="text-sm text-white/90 leading-relaxed">
                    <strong className="text-[#d4af37]">Note:</strong> After clicking "Proceed to Buy", 
                    you will be redirected to WhatsApp where your order details will be automatically 
                    formatted. You can then complete the payment process directly with us.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-[#0a1128]/90 border border-[#d4af37]/30 rounded-2xl p-6 backdrop-blur-md shadow-2xl shadow-[#d4af37]/20">
              <h3 className="text-xl font-bold mb-6">Order Summary</h3>
              
              <div className="space-y-3 mb-6 max-h-64 overflow-y-auto pr-2">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#0a1128]/50 border border-[#d4af37]/20 rounded-xl p-3"
                  >
                    <h4 className="font-semibold text-white text-sm mb-1 line-clamp-1">
                      {item.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs text-white/60">
                      <span>Qty: {item.quantity}</span>
                      <span className="text-[#d4af37] font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
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
                  <span className="text-lg font-bold text-white">Total</span>
                  <span className="text-2xl font-bold text-[#d4af37]">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleProceedToWhatsApp}
                disabled={!customerName.trim()}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-bold text-lg shadow-lg shadow-[#d4af37]/30 hover:shadow-[#d4af37]/50 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                <span>💬</span>
                Proceed to Buy via WhatsApp
              </button>

              <p className="text-xs text-white/50 text-center mt-4">
                You'll be redirected to WhatsApp to complete your order
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

