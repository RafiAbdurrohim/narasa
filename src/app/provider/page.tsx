"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { experiences } from "@/data/mockExperiences";
import { 
  Wallet, 
  Users, 
  Star, 
  Plus, 
  CheckCircle2, 
  TrendingUp, 
  Calendar, 
  MapPin, 
  MoreVertical,
  Mail,
  ArrowRight
} from "lucide-react";

export default function ProviderDashboard() {
  // Data simulasi untuk provider spesifik (Abah Rahman)
  const providerActiveExps = experiences.slice(0, 2);

  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      {/* Minimal Navbar */}
      <nav className="bg-white border-b border-black/5 sticky top-0 z-40">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-2xl font-serif text-foreground tracking-tight">
            NARASA<span className="text-primary">.</span> <span className="text-sm font-sans font-medium text-foreground/40 ml-2">Mitra Portal</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/explore">
              <span className="text-sm font-bold text-foreground/60 hover:text-primary transition-colors cursor-pointer mr-4">Lihat Eksplorasi</span>
            </Link>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
              AR
            </div>
          </div>
        </div>
      </nav>

      {/* Provider Cover Section - Premium Profile */}
      <section className="relative bg-white border-b border-black/5 pb-10">
         <div className="w-full h-[25vh] min-h-[220px] relative">
           <img src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
         </div>
         
         <div className="container mx-auto px-6 lg:px-8 relative z-10">
           <div className="flex flex-row justify-between items-end mb-4">
             {/* Profile Avatar (Overlaps Cover) */}
             <div className="-mt-16 w-28 h-28 md:w-32 md:h-32 rounded-[2rem] border-4 border-white overflow-hidden bg-white shadow-xl shrink-0">
               <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="Profile" />
             </div>
             
             {/* Action Buttons (Below Cover) */}
             <div className="flex gap-2 md:gap-3">
               <Button variant="outline" className="rounded-full shadow-sm font-bold border-black/10 px-4 md:px-6">Edit Profil</Button>
               <Button variant="primary" className="rounded-full shadow-lg shadow-primary/20 font-bold px-4 md:px-6">
                 <Plus size={18} className="md:mr-2" /> <span className="hidden md:inline">Buat Paket Baru</span>
               </Button>
             </div>
           </div>

           {/* Profile Info (Below Avatar) */}
           <div className="mt-2">
             <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
               <h1 className="font-serif text-3xl font-bold text-foreground">Abah Rahman</h1>
               <Badge className="bg-primary/10 text-primary border-primary/20 shadow-sm w-fit"><CheckCircle2 size={12} className="mr-1.5"/> Verified Local Guide</Badge>
             </div>
             <p className="text-foreground/60 font-medium">Pengrajin & Pegiat Budaya • Bergabung sejak 2024</p>
           </div>
         </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-8">
           
           {/* Bento Stats */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
             <Card className="rounded-[2rem] border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-green-50/50">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6"><Wallet size={28}/></div>
                  <h3 className="text-foreground/50 text-xs font-extrabold uppercase tracking-widest mb-2">Pendapatan (Bulan Ini)</h3>
                  <div className="font-serif text-4xl font-extrabold text-foreground mb-3">Rp 4.250.000</div>
                  <div className="flex items-center text-sm font-bold text-green-600"><TrendingUp size={16} className="mr-1.5"/> +15% dari bulan lalu</div>
                </CardContent>
             </Card>
             
             <Card className="rounded-[2rem] border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-orange-50/50">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-cta/10 text-cta rounded-2xl flex items-center justify-center mb-6"><Users size={28}/></div>
                  <h3 className="text-foreground/50 text-xs font-extrabold uppercase tracking-widest mb-2">Total Tamu Booking</h3>
                  <div className="font-serif text-4xl font-extrabold text-foreground mb-3">128 <span className="text-lg font-sans font-medium text-foreground/50">Orang</span></div>
                  <div className="flex items-center text-sm font-bold text-orange-500">12 booking aktif menanti</div>
                </CardContent>
             </Card>

             <Card className="rounded-[2rem] border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-yellow-50/50">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mb-6"><Star size={28} className="fill-current"/></div>
                  <h3 className="text-foreground/50 text-xs font-extrabold uppercase tracking-widest mb-2">Rating Rata-Rata</h3>
                  <div className="font-serif text-4xl font-extrabold text-foreground mb-3">4.9<span className="text-lg font-sans font-medium text-foreground/50">/5.0</span></div>
                  <div className="flex items-center text-sm font-bold text-yellow-600">Berdasarkan 86 Ulasan</div>
                </CardContent>
             </Card>
           </div>

           {/* Main Layout Grid */}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
             
             {/* Left Column: Recent Bookings */}
             <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-3xl font-bold text-foreground">Jadwal Terdekat</h2>
                  <Button variant="outline" size="sm" className="rounded-full font-bold">Lihat Semua</Button>
                </div>
                
                <Card className="rounded-[2rem] border-black/5 shadow-sm overflow-hidden bg-white">
                  <div className="divide-y divide-black/5">
                    {[
                      { name: "Budi Santoso", date: "Hari ini, 09:00", exp: "Jelajah Sejarah Kampung Ketupat", pax: 2, total: "Rp 300.000", status: "Menunggu" },
                      { name: "Keluarga Wijaya", date: "Besok, 14:00", exp: "Workshop Anyaman Ketupat Otentik", pax: 4, total: "Rp 400.000", status: "Confirmed" },
                      { name: "Siti Aminah", date: "24 Aug, 10:00", exp: "Jelajah Sejarah Kampung Ketupat", pax: 1, total: "Rp 150.000", status: "Confirmed" },
                    ].map((booking, idx) => (
                      <div key={idx} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-black/[0.02] transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                            {booking.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-lg mb-1">{booking.name}</div>
                            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-foreground/50">
                              <span className="flex items-center"><Calendar size={12} className="mr-1"/> {booking.date}</span>
                              <span className="w-1 h-1 rounded-full bg-black/20"></span>
                              <span className="flex items-center"><Users size={12} className="mr-1"/> {booking.pax} Pax</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:items-end gap-1">
                          <div className="font-bold text-foreground">{booking.total}</div>
                          <div className="text-xs text-foreground/50 truncate max-w-[150px]">{booking.exp}</div>
                        </div>
                        
                        <div className="flex items-center gap-2 mt-2 md:mt-0">
                          {booking.status === "Menunggu" ? (
                            <Button size="sm" variant="primary" className="rounded-full shadow-md text-xs px-4 h-9">Check-in</Button>
                          ) : (
                            <Badge variant="outline" className="bg-white border-black/10 text-foreground/60 h-9 flex items-center px-4 rounded-full shadow-sm"><CheckCircle2 size={14} className="mr-1.5"/> Confirmed</Badge>
                          )}
                          <Button size="sm" variant="outline" className="rounded-full w-9 h-9 p-0 border-black/10"><MoreVertical size={16}/></Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
             </div>

             {/* Right Column: Active Experiences */}
             <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-3xl font-bold text-foreground">Etalase Aktif</h2>
                </div>
                
                <div className="space-y-4">
                  {providerActiveExps.map(exp => (
                    <Card key={exp.id} className="rounded-3xl border-black/5 shadow-sm overflow-hidden group cursor-pointer hover:shadow-lg hover:border-primary/20 transition-all bg-white">
                      <div className="flex h-32">
                        <div className="w-1/3 relative overflow-hidden bg-black/5">
                          <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="w-2/3 p-4 flex flex-col justify-center">
                          <span className="text-[10px] font-extrabold text-cta uppercase tracking-widest mb-1">{exp.category}</span>
                          <h3 className="font-bold leading-tight mb-2 line-clamp-2 text-foreground group-hover:text-primary transition-colors">{exp.title}</h3>
                          <div className="font-serif font-bold text-foreground/80 mt-auto">Rp {exp.price.toLocaleString("id-ID")}</div>
                        </div>
                      </div>
                    </Card>
                  ))}

                  {/* Add New Experience Ghost Card */}
                  <div className="rounded-3xl border-2 border-dashed border-black/10 p-6 flex flex-col items-center justify-center text-center h-32 cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all group">
                    <div className="w-10 h-10 rounded-full bg-black/5 group-hover:bg-primary/10 flex items-center justify-center mb-2 transition-colors">
                      <Plus size={20} className="text-foreground/50 group-hover:text-primary" />
                    </div>
                    <span className="text-sm font-bold text-foreground/50 group-hover:text-primary">Buat Baru</span>
                  </div>
                </div>
             </div>
             
           </div>
        </div>
      </section>

      {/* Rich Footer (Consistent with Homepage & Explore) */}
      <footer className="bg-foreground text-white pt-24 pb-10 mt-10">
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
