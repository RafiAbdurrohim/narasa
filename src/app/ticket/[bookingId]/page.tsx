"use client";

import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useBooking } from "@/context/BookingContext";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, QrCode, MapPin, Calendar, Users, Download, ArrowRight } from "lucide-react";

export default function TicketPage({ params }: { params: Promise<{ bookingId: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const { bookingDetails, resetBooking } = useBooking();

  const isDemoValid = bookingDetails.experience !== null;

  useEffect(() => {
    if (!isDemoValid) {
      router.push("/explore");
    }
  }, [isDemoValid, router]);

  if (!isDemoValid) return null;

  const exp = bookingDetails.experience!;
  const customer = bookingDetails.customer;

  return (
    <main className="min-h-screen bg-background py-12 selection:bg-primary selection:text-white">
      <div className="container mx-auto px-6 max-w-lg flex flex-col items-center">
        
        {/* Success Header */}
        <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 text-white rounded-full mb-6 shadow-xl shadow-green-500/30 ring-8 ring-green-50">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">Pembayaran Berhasil!</h1>
          <p className="text-foreground/60 font-medium text-lg">E-Tiket Anda sudah aktif. Tunjukkan kode QR ini kepada staf di lokasi.</p>
        </div>

        {/* E-Ticket Card - Boarding Pass Style */}
        <div className="w-full bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden border border-black/5 relative animate-in fade-in zoom-in-95 duration-700 delay-150 fill-mode-both">
          
          {/* Top Brand Band */}
          <div className="bg-foreground text-white px-8 py-5 flex items-center justify-between">
            <div className="font-serif font-bold text-xl tracking-tight">NARASA<span className="text-primary">.</span></div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/50">E-Ticket</div>
          </div>
          
          <div className="p-8">
            <div className="flex justify-center mb-8">
              {/* Dummy QR Code */}
              <div className="p-5 border-2 border-dashed border-black/10 rounded-3xl bg-background">
                <QrCode size={160} className="text-foreground" />
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="inline-block text-xs font-extrabold uppercase tracking-widest bg-primary/10 text-primary px-3 py-1 rounded-full mb-3">
                ID: {resolvedParams.bookingId}
              </div>
              <h3 className="font-serif font-bold text-2xl mb-1 leading-tight">{exp.title}</h3>
              <p className="font-medium text-foreground/50">{exp.provider.name}</p>
            </div>

            {/* Ticket Details Grid */}
            <div className="grid grid-cols-2 gap-4 bg-background p-6 rounded-2xl border border-black/5">
              <div>
                <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider mb-1">Tanggal</div>
                <div className="font-bold flex items-center gap-1.5"><Calendar size={14} className="text-primary"/> {bookingDetails.date}</div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider mb-1">Waktu</div>
                <div className="font-bold">{bookingDetails.time} WIB</div>
              </div>
              <div className="col-span-2 pt-2 border-t border-black/5">
                <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider mb-1">Pemesan</div>
                <div className="font-bold flex items-center gap-1.5"><Users size={14} className="text-primary"/> {customer.name} ({bookingDetails.guests} Pax)</div>
              </div>
              <div className="col-span-2 pt-2 border-t border-black/5">
                <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider mb-1">Titik Kumpul</div>
                <div className="font-bold flex items-start gap-1.5 text-sm"><MapPin size={16} className="text-primary shrink-0 mt-0.5"/> {exp.meetingPoint}</div>
              </div>
            </div>
          </div>

          {/* Perforated Edge Effect */}
          <div className="relative flex items-center justify-between px-2">
            <div className="w-6 h-6 rounded-full bg-background absolute -left-3 border-r border-black/5"></div>
            <div className="w-full border-t-[3px] border-dashed border-black/10 mx-6"></div>
            <div className="w-6 h-6 rounded-full bg-background absolute -right-3 border-l border-black/5"></div>
          </div>

          {/* Action Buttons */}
          <div className="p-8 bg-[#FAFAFA]">
            <Button variant="primary" className="w-full gap-2 font-bold h-14 rounded-xl text-base shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all mb-3">
              <Download size={20} /> Unduh Tiket (PDF)
            </Button>
            <Link href="/">
              <Button variant="outline" className="w-full font-bold h-14 rounded-xl text-base bg-white" onClick={resetBooking}>
                Kembali ke Beranda <ArrowRight size={18} className="ml-1" />
              </Button>
            </Link>
          </div>

        </div>

        <p className="text-sm font-medium text-foreground/40 mt-10">
          Tiket ini juga telah dikirimkan ke email <strong>{customer.email}</strong>
        </p>

      </div>
    </main>
  );
}
