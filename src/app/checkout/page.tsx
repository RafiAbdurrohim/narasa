"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useBooking } from "@/context/BookingContext";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, Loader2, CreditCard, ShieldCheck, Wallet, QrCode } from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const { bookingDetails } = useBooking();
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("qris");

  useEffect(() => {
    // If accessed directly without booking data, redirect to explore
    if (!bookingDetails.experience) {
      router.push("/explore");
    }
  }, [bookingDetails, router]);

  if (!bookingDetails.experience) return null;

  const total = bookingDetails.experience.price * bookingDetails.guests;
  const bookingId = `NRS-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      router.push(`/ticket/${bookingId}`);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      {/* Checkout Navbar */}
      <nav className="bg-white border-b border-black/5 sticky top-0 z-40">
        <div className="container mx-auto px-6 h-[72px] flex items-center justify-between">
          <button onClick={() => router.back()} className="flex items-center text-sm font-bold text-foreground/50 hover:text-primary transition-colors">
            <ChevronLeft size={18} className="mr-1" /> Kembali ke Data Pemesanan
          </button>
          <div className="flex items-center gap-2 font-bold text-sm">
            <span className="text-foreground/40">1. Isi Data</span>
            <span className="text-foreground/30 px-2">{"->"}</span>
            <span className="text-primary border-b-2 border-primary pb-1">2. Bayar</span>
            <span className="text-foreground/30 px-2">{"->"}</span>
            <span className="text-foreground/30">3. Selesai</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 pt-10 pb-20 max-w-5xl">
        <div className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Pilih Metode Pembayaran</h1>
          <p className="text-foreground/60 font-medium text-lg">Semua transaksi dienkripsi dan dijamin keamanannya.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Payment Methods */}
          <div className="flex-1">
            <div className="space-y-6">
              
              {/* QRIS Option */}
              <div 
                onClick={() => setSelectedMethod("qris")}
                className={`p-6 rounded-[2rem] border-2 cursor-pointer transition-all duration-300 ${
                  selectedMethod === "qris" 
                  ? "border-primary bg-primary/5 shadow-md" 
                  : "border-black/5 bg-white hover:border-black/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-4 flex items-center justify-center ${selectedMethod === "qris" ? "border-primary bg-white" : "border-black/20"}`}>
                      {selectedMethod === "qris" && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                    </div>
                    <span className="font-bold text-lg">QRIS (OVO, Gopay, Dana, dll)</span>
                  </div>
                  <div className="w-16 h-8 bg-white border border-black/10 rounded overflow-hidden p-1 flex items-center justify-center font-bold text-xs text-red-600 italic">
                    QRIS
                  </div>
                </div>
                
                {selectedMethod === "qris" && (
                  <div className="mt-8 border-t border-primary/10 pt-6 text-center animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="inline-block p-4 bg-white rounded-2xl border border-primary/20 shadow-sm mb-4">
                      <QrCode size={160} className="text-foreground/80 mx-auto" />
                    </div>
                    <p className="font-bold text-foreground mb-1">Scan kode QR di atas</p>
                    <p className="text-sm font-medium text-foreground/60">Buka aplikasi e-wallet atau m-banking Anda untuk memindai.</p>
                  </div>
                )}
              </div>

              {/* Virtual Account Option */}
              <div 
                onClick={() => setSelectedMethod("va")}
                className={`p-6 rounded-[2rem] border-2 cursor-pointer transition-all duration-300 ${
                  selectedMethod === "va" 
                  ? "border-primary bg-primary/5 shadow-md" 
                  : "border-black/5 bg-white hover:border-black/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-4 flex items-center justify-center ${selectedMethod === "va" ? "border-primary bg-white" : "border-black/20"}`}>
                      {selectedMethod === "va" && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                    </div>
                    <span className="font-bold text-lg">Virtual Account (Transfer Bank)</span>
                  </div>
                  <Wallet size={24} className="text-foreground/50" />
                </div>
              </div>

              {/* Credit Card Option */}
              <div 
                onClick={() => setSelectedMethod("cc")}
                className={`p-6 rounded-[2rem] border-2 cursor-pointer transition-all duration-300 ${
                  selectedMethod === "cc" 
                  ? "border-primary bg-primary/5 shadow-md" 
                  : "border-black/5 bg-white hover:border-black/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-4 flex items-center justify-center ${selectedMethod === "cc" ? "border-primary bg-white" : "border-black/20"}`}>
                      {selectedMethod === "cc" && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                    </div>
                    <span className="font-bold text-lg">Kartu Kredit / Debit</span>
                  </div>
                  <CreditCard size={24} className="text-foreground/50" />
                </div>
              </div>

            </div>
          </div>

          {/* Final Order Summary */}
          <div className="w-full lg:w-[400px] shrink-0">
            <div className="bg-white rounded-[2rem] border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] sticky top-28 overflow-hidden">
              <div className="p-8">
                <h3 className="font-serif font-bold text-2xl mb-6 text-foreground">Review Final</h3>
                
                <div className="mb-6">
                  <div className="font-bold text-lg leading-tight mb-2">{bookingDetails.experience.title}</div>
                  <div className="text-sm font-medium text-foreground/60 bg-black/5 px-3 py-1.5 rounded-lg inline-block">
                    {bookingDetails.date} • {bookingDetails.time} WIB
                  </div>
                </div>

                <div className="mb-8 p-4 border border-black/5 rounded-xl bg-background">
                  <div className="text-xs font-bold text-foreground/50 uppercase tracking-widest mb-2">Pemesan</div>
                  <div className="font-bold text-foreground mb-1">{bookingDetails.customer.name}</div>
                  <div className="text-sm font-medium text-foreground/70">{bookingDetails.customer.phone}</div>
                </div>

                <div className="space-y-4 text-sm font-medium border-b border-black/5 pb-6 mb-6">
                  <div className="flex justify-between items-center text-foreground/70">
                    <span>Harga Tiket (x{bookingDetails.guests})</span>
                    <span>Rp {total.toLocaleString("id-ID")}</span>
                  </div>
                  <div className="flex justify-between items-center text-foreground/70">
                    <span>Biaya Layanan Platform</span>
                    <span className="text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">Gratis</span>
                  </div>
                </div>

                <div className="flex justify-between items-end font-bold text-xl mb-8">
                  <span>Total Bayar</span>
                  <span className="text-3xl text-cta">Rp {total.toLocaleString("id-ID")}</span>
                </div>

                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full font-bold h-16 rounded-full shadow-xl shadow-primary/20 text-lg transition-all hover:-translate-y-1"
                  onClick={handlePayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <><Loader2 className="animate-spin mr-3" size={24}/> Memproses...</>
                  ) : (
                    `Bayar Sekarang`
                  )}
                </Button>
                
                <div className="mt-6 flex items-center justify-center gap-2 text-xs font-bold text-green-600 bg-green-50 py-2 rounded-lg">
                  <ShieldCheck size={16} /> 100% Pembayaran Aman
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
