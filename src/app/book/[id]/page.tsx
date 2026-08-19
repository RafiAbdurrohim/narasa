"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { experiences } from "@/data/mockExperiences";
import { useBooking } from "@/context/BookingContext";
import { ChevronLeft, Calendar, Clock, Users, User, Info, MapPin } from "lucide-react";

export default function BookPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const { setBookingDetails } = useBooking();
  const exp = experiences.find(e => e.id === resolvedParams.id);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  if (!exp) return <div>Experience not found</div>;

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time || !name || !email || !phone) {
      alert("Mohon lengkapi semua data");
      return;
    }
    
    setBookingDetails({
      experience: exp,
      date,
      time,
      guests,
      customer: { name, email, phone }
    });
    
    router.push('/checkout');
  };

  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      {/* Checkout Navbar */}
      <nav className="bg-white border-b border-black/5 sticky top-0 z-40">
        <div className="container mx-auto px-6 h-[72px] flex items-center justify-between">
          <Link href={`/experience/${exp.id}`} className="flex items-center text-sm font-bold text-foreground/50 hover:text-primary transition-colors">
            <ChevronLeft size={18} className="mr-1" /> Batal
          </Link>
          <div className="flex items-center gap-2 font-bold text-sm">
            <span className="text-primary border-b-2 border-primary pb-1">1. Isi Data</span>
            <span className="text-foreground/30 px-2">{"->"}</span>
            <span className="text-foreground/30">2. Bayar</span>
            <span className="text-foreground/30 px-2">{"->"}</span>
            <span className="text-foreground/30">3. Selesai</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 pt-10 pb-20 max-w-5xl">
        <div className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Lengkapi Data Pemesanan</h1>
          <p className="text-foreground/60 font-medium text-lg">Pastikan data Anda sudah benar sebelum melanjutkan ke pembayaran.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Form Content */}
          <div className="flex-1">
            <form id="booking-form" onSubmit={handleContinue} className="space-y-10">
              
              {/* Jadwal & Tamu */}
              <div className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm">
                <h3 className="font-serif text-2xl font-bold mb-6 flex items-center gap-3 border-b border-black/5 pb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Calendar size={20}/></div>
                  Pilih Jadwal
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-foreground/70 mb-2">Tanggal Kehadiran</label>
                    <input type="date" required value={date} onChange={e=>setDate(e.target.value)} className="w-full bg-background border border-black/10 rounded-xl p-4 text-foreground font-medium focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground/70 mb-2">Waktu Sesi</label>
                    <select required value={time} onChange={e=>setTime(e.target.value)} className="w-full bg-background border border-black/10 rounded-xl p-4 text-foreground font-medium focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                      <option value="">Pilih Jam</option>
                      <option value="09:00">09:00 WIB (Sesi Pagi)</option>
                      <option value="13:00">13:00 WIB (Sesi Siang)</option>
                      <option value="15:30">15:30 WIB (Sesi Sore)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground/70 mb-2">Jumlah Tamu</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
                    <input type="number" min="1" max="20" required value={guests} onChange={e=>setGuests(parseInt(e.target.value))} className="w-full bg-background border border-black/10 rounded-xl py-4 pl-12 pr-4 text-foreground font-medium focus:ring-2 focus:ring-primary outline-none transition-all" />
                  </div>
                </div>
              </div>

              {/* Data Pemesan */}
              <div className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm">
                <h3 className="font-serif text-2xl font-bold mb-6 flex items-center gap-3 border-b border-black/5 pb-4">
                  <div className="w-10 h-10 rounded-full bg-cta/10 flex items-center justify-center text-cta"><User size={20}/></div>
                  Informasi Pemesan
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-foreground/70 mb-2">Nama Lengkap (Sesuai KTP)</label>
                    <input type="text" required value={name} onChange={e=>setName(e.target.value)} placeholder="Misal: Budi Santoso" className="w-full bg-background border border-black/10 rounded-xl p-4 text-foreground font-medium focus:ring-2 focus:ring-primary outline-none transition-all" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-foreground/70 mb-2">Alamat Email</label>
                      <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="budi@email.com" className="w-full bg-background border border-black/10 rounded-xl p-4 text-foreground font-medium focus:ring-2 focus:ring-primary outline-none transition-all" />
                      <p className="text-xs text-foreground/50 mt-2 font-medium">Tiket akan dikirimkan ke email ini.</p>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-foreground/70 mb-2">Nomor WhatsApp</label>
                      <input type="tel" required value={phone} onChange={e=>setPhone(e.target.value)} placeholder="081234567890" className="w-full bg-background border border-black/10 rounded-xl p-4 text-foreground font-medium focus:ring-2 focus:ring-primary outline-none transition-all" />
                    </div>
                  </div>
                </div>
              </div>

            </form>
          </div>

          {/* Order Summary Snapshot */}
          <div className="w-full lg:w-[380px] shrink-0">
            <div className="bg-white rounded-[2rem] border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] sticky top-28 overflow-hidden">
              <div className="p-6 bg-black/5 border-b border-black/5">
                <div className="flex gap-4 mb-2">
                  <img src={exp.image} alt={exp.title} className="w-20 h-20 object-cover rounded-xl shadow-sm" />
                  <div>
                    <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest bg-primary/10 px-2 py-1 rounded mb-2 inline-block">{exp.category}</span>
                    <h3 className="font-bold text-sm leading-tight line-clamp-2 text-foreground">{exp.title}</h3>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-foreground/60 mt-3">
                  <MapPin size={14} className="text-primary"/> {exp.provider.name}
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="font-serif font-bold text-lg mb-4">Rincian Harga</h4>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-sm font-medium text-foreground/70">
                    <span>Harga per tiket</span>
                    <span>Rp {exp.price.toLocaleString("id-ID")}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium text-foreground/70">
                    <span>Jumlah Tamu</span>
                    <span>x {guests} orang</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center font-bold text-xl border-t border-black/5 pt-6 text-foreground">
                  <span>Total Bayar</span>
                  <span className="text-2xl text-cta">Rp {(exp.price * guests).toLocaleString("id-ID")}</span>
                </div>

                <div className="mt-8">
                  <Button type="submit" form="booking-form" variant="primary" size="lg" className="w-full h-14 rounded-full font-bold shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all">Lanjut ke Pembayaran</Button>
                </div>
                
                <div className="mt-6 flex items-start gap-3 bg-primary/5 p-4 rounded-xl">
                  <Info size={16} className="text-primary shrink-0 mt-0.5"/>
                  <p className="text-xs font-medium text-foreground/70 leading-relaxed">Pembatalan gratis hingga 24 jam sebelum jadwal dimulai.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
