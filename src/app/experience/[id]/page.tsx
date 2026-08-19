"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { experiences } from "@/data/mockExperiences";
import { 
  MapPin, 
  Clock, 
  Star, 
  HeartHandshake, 
  CheckCircle2, 
  ChevronLeft, 
  ShieldCheck, 
  Mail,
  Share2,
  Heart
} from "lucide-react";

export default function ExperienceDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const exp = experiences.find(e => e.id === resolvedParams.id);

  if (!exp) return notFound();

  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      {/* Editorial Navbar (Transparent/Minimal) */}
      <nav className="absolute top-0 w-full z-50 pt-8 pb-4">
        <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
          <Link href="/explore" className="flex items-center gap-2 text-white/90 hover:text-white font-bold drop-shadow-md bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 transition-all">
            <ChevronLeft size={18} /> Kembali ke Eksplorasi
          </Link>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all"><Share2 size={18}/></button>
            <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all"><Heart size={18}/></button>
          </div>
        </div>
      </nav>

      {/* Cinematic Hero */}
      <div className="w-full h-[60vh] md:h-[75vh] relative">
        <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/20" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:px-20 z-10">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-white uppercase tracking-widest border border-white/30">{exp.category}</span>
              {exp.isMuslimFriendly && (
                <span className="bg-primary/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-white flex items-center gap-1.5 shadow-lg shadow-primary/20">
                  <HeartHandshake size={14} /> Muslim-Friendly Verified
                </span>
              )}
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg max-w-4xl">{exp.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-white/90 font-medium">
              <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <Star size={18} className="text-yellow-400 fill-current" /> {exp.rating} ({exp.reviews} ulasan)
              </div>
              <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <MapPin size={18} /> {exp.meetingPoint}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* Main Content (Left) */}
          <div className="flex-1 max-w-3xl">
            
            {/* Host Info */}
            <div className="flex items-center justify-between pb-10 mb-10 border-b border-black/5">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif font-bold text-2xl shadow-inner border border-primary/20">
                  {exp.provider.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-xl text-foreground mb-1">Diselenggarakan oleh {exp.provider.name}</div>
                  <div className="text-sm text-foreground/60 font-bold flex items-center gap-1"><ShieldCheck size={14} className="text-green-600"/> Mitra Tersertifikasi & Local Guide</div>
                </div>
              </div>
            </div>

            <section className="mb-16">
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Tentang Pengalaman Ini</h2>
              <p className="text-foreground/70 text-lg leading-relaxed font-medium">{exp.description}</p>
            </section>

            <section className="mb-16">
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Fasilitas & Layanan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {exp.included.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-foreground/80 font-medium bg-black/[0.02] p-4 rounded-2xl border border-black/5">
                    <CheckCircle2 size={20} className="text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="font-serif text-3xl font-bold mb-8 text-foreground">Jadwal Kegiatan (Itinerary)</h2>
              <div className="relative border-l-[3px] border-black/10 ml-4 space-y-10 pb-4">
                {exp.itinerary.map((it, idx) => (
                  <div key={idx} className="relative pl-10">
                    <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full border-4 border-background bg-primary shadow-sm"></div>
                    <div className="font-extrabold text-primary mb-1 text-lg">{it.time}</div>
                    <div className="text-foreground/80 font-bold text-lg">{it.activity}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Lokasi & Titik Kumpul</h2>
              <p className="text-foreground/80 font-medium mb-6 flex items-start gap-3 bg-primary/5 p-4 rounded-xl border border-primary/10">
                <MapPin className="text-primary shrink-0 mt-0.5" /> 
                <span>
                  <strong className="block mb-1">Titik Kumpul: {exp.meetingPoint}</strong>
                  Silakan datang 15 menit sebelum jadwal kegiatan dimulai. Panduan lebih lanjut akan dikirim via email setelah pemesanan.
                </span>
              </p>
              <div className="w-full h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-lg relative bg-black/5">
                <iframe 
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(exp.meetingPoint + " Kampung Ketupat Samarinda")}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </section>
            
          </div>

          {/* Booking Widget (Right) */}
          <div className="w-full lg:w-[420px] shrink-0">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-black/5 sticky top-24">
              <div className="flex items-end gap-2 mb-3">
                <div className="text-4xl font-serif font-extrabold text-foreground">Rp {exp.price.toLocaleString("id-ID")}</div>
                <div className="text-foreground/50 font-bold mb-1">/ pax</div>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/60 font-bold mb-8">
                <Clock size={16} /> Durasi Kegiatan: {exp.duration}
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 flex items-start gap-4 mb-8">
                <ShieldCheck size={28} className="text-primary shrink-0" />
                <div className="text-sm font-medium text-foreground/80 leading-relaxed">
                  Pengalaman ini dijamin aman, asli, dan dikurasi secara ketat oleh tim lokal Kampung Ketupat untuk kenyamanan Anda.
                </div>
              </div>

              <Link href={`/book/${exp.id}`} className="block">
                <Button size="lg" variant="primary" className="w-full rounded-full h-16 text-lg font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all">
                  Pesan Sekarang
                </Button>
              </Link>
              
              <p className="text-xs text-center text-foreground/40 mt-6 font-bold">
                Anda belum dikenakan biaya pada tahap ini.
              </p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Rich Footer (Consistent with Homepage) */}
      <footer className="bg-foreground text-white pt-24 pb-10 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
            <div className="lg:col-span-1">
              <div className="font-serif font-bold text-3xl mb-6 tracking-tighter">NARASA<span className="text-primary">.</span></div>
              <p className="text-white/60 font-medium leading-relaxed mb-8 max-w-xs">
                Platform pengalaman lokal Muslim-friendly pertama yang menghubungkan Anda langsung dengan keaslian budaya Kampung Ketupat.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-8 text-white">Eksplorasi</h4>
              <ul className="space-y-4 text-white/60 font-medium">
                <li><Link href="/explore" className="hover:text-primary transition-colors">Semua Pengalaman</Link></li>
                <li><Link href="/explore" className="hover:text-primary transition-colors">Kuliner Halal</Link></li>
                <li><Link href="/explore" className="hover:text-primary transition-colors">Warisan Budaya</Link></li>
                <li><Link href="/explore" className="hover:text-primary transition-colors">Kerajinan Tangan</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8 text-white">Untuk Mitra</h4>
              <ul className="space-y-4 text-white/60 font-medium">
                <li><Link href="/provider" className="hover:text-primary transition-colors">Provider Dashboard</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Cara Bergabung</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Panduan Layanan</Link></li>
                <li><Link href="/admin" className="hover:text-primary transition-colors">Admin Portal</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8 text-white">Hubungi Kami</h4>
              <ul className="space-y-5 text-white/60 font-medium">
                <li className="flex items-start gap-4">
                  <Mail size={20} className="text-primary shrink-0 mt-0.5" /> 
                  <span>hello@narasa.id<br/><span className="text-sm text-white/40">Respon dalam 24 jam</span></span>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin size={20} className="text-primary shrink-0 mt-0.5" /> 
                  <span>Kampung Ketupat<br/><span className="text-sm text-white/40">Samarinda, Kalimantan Timur</span></span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40 font-medium">
            <p>© 2026 NARASA. Hak Cipta Dilindungi.</p>
            <div className="flex items-center gap-8">
              <Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
              <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
