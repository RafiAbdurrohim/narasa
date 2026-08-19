"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Activity, 
  Users, 
  DollarSign, 
  Clock, 
  ArrowRight, 
  Eye,
  MapPin,
  Mail
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      {/* Admin Navbar */}
      <nav className="bg-foreground text-white border-b border-white/10 sticky top-0 z-40">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-2xl font-serif tracking-tight flex items-center gap-3">
            NARASA<span className="text-primary">.</span>
            <span className="hidden sm:inline-block text-[10px] font-sans font-bold bg-white/10 px-2 py-1 rounded text-white/70 tracking-widest uppercase">Command Center</span>
          </Link>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/explore">
              <span className="text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer hidden sm:inline">Live Preview</span>
            </Link>
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shadow-lg">
              AD
            </div>
          </div>
        </div>
      </nav>

      {/* Admin Hero */}
      <section className="bg-foreground text-white pt-12 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-ketupat opacity-[0.03] pointer-events-none" style={{ filter: "invert(1)" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Platform Overview.</h1>
              <p className="text-white/60 font-medium text-lg max-w-xl leading-relaxed">
                Pusat kendali ekosistem NARASA. Tinjau pengajuan mitra, pantau arus transaksi, dan pastikan standar wisata Muslim-Friendly tetap terjaga.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto mt-4 md:mt-0">
              <Button className="w-full md:w-auto bg-white/10 hover:bg-white/20 text-white border-none rounded-full h-12 px-6 font-bold backdrop-blur-md">Unduh Laporan</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="container mx-auto px-6 lg:px-8 -mt-12 relative z-20 pb-20">
        {/* Bento Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="rounded-[2rem] border-black/5 shadow-xl bg-white overflow-hidden group">
            <CardContent className="p-8 relative h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all duration-500"><DollarSign size={100}/></div>
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6"><DollarSign size={24}/></div>
              <h3 className="text-foreground/50 text-xs font-extrabold uppercase tracking-widest mb-2">Total GMV (Bulan Ini)</h3>
              <div className="font-serif text-4xl font-extrabold text-foreground mb-2">Rp 84.5M</div>
              <div className="flex items-center text-sm font-bold text-green-600">+24% vs bulan lalu</div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-black/5 shadow-xl bg-white overflow-hidden group">
            <CardContent className="p-8 relative h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all duration-500"><Users size={100}/></div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6"><Users size={24}/></div>
              <h3 className="text-foreground/50 text-xs font-extrabold uppercase tracking-widest mb-2">Mitra Aktif</h3>
              <div className="font-serif text-4xl font-extrabold text-foreground mb-2">32</div>
              <div className="flex items-center text-sm font-bold text-foreground/50">Tersebar di 4 zona budaya</div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-black/5 shadow-xl bg-white overflow-hidden group">
            <CardContent className="p-8 relative h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all duration-500"><ShieldCheck size={100}/></div>
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6"><ShieldCheck size={24}/></div>
              <h3 className="text-foreground/50 text-xs font-extrabold uppercase tracking-widest mb-2">Menunggu Verifikasi</h3>
              <div className="font-serif text-4xl font-extrabold text-foreground mb-2">3</div>
              <div className="flex items-center text-sm font-bold text-orange-600">Perlu tinjauan hari ini</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column: Verification Queue */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-3xl font-bold text-foreground">Antrean Kurasi</h2>
              <Button variant="outline" size="sm" className="rounded-full font-bold">Lihat Semua</Button>
            </div>

            <div className="space-y-6">
              {/* Item 1 */}
              <Card className="rounded-[2rem] border-black/5 shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden">
                <div className="flex flex-col md:flex-row h-auto md:h-56">
                  <div className="w-full md:w-64 h-48 md:h-full relative overflow-hidden bg-black/5 shrink-0">
                    <img src="https://asset.tribunnews.com/QySuwLvVAPtI5KXU9vkG9If9jq4=/1200x675/filters:upscale():quality(30):format(webp):focal(0.5x0.5:0.5x0.5)/banjarmasin/foto/bank/originals/anyaman-ketupat-dari-daun-nipahsafas.jpg" className="w-full h-full object-cover" alt="Review" />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-orange-500 text-white border-none shadow-lg"><Clock size={12} className="mr-1.5"/> Pending Review</Badge>
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-extrabold text-cta uppercase tracking-widest bg-cta/10 px-3 py-1 rounded">Authentic Craft</span>
                      <span className="text-xs font-bold text-foreground/40">Diajukan 2 jam lalu</span>
                    </div>
                    <h3 className="font-bold text-2xl leading-tight mb-2">Workshop Anyaman Daun Nipah</h3>
                    <p className="text-sm font-medium text-foreground/60 mb-6 line-clamp-2">Pengajuan kelas kerajinan tangan otentik dengan metode pewarnaan alami oleh Ibu Hamidah.</p>
                    
                    <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">IH</div>
                        <span className="text-sm font-bold">Ibu Hamidah</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-600"><XCircle size={18}/></Button>
                        <Button size="sm" variant="outline" className="rounded-full h-10 px-4 border-black/10"><Eye size={16} className="mr-2"/> Detail</Button>
                        <Button size="sm" variant="primary" className="rounded-full h-10 px-6 font-bold shadow-md shadow-primary/20"><CheckCircle2 size={16} className="mr-2"/> Approve</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Item 2 */}
              <Card className="rounded-[2rem] border-black/5 shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden">
                <div className="flex flex-col md:flex-row h-auto md:h-56">
                  <div className="w-full md:w-64 h-48 md:h-full relative overflow-hidden bg-black/5 shrink-0">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Lontong.jpg" className="w-full h-full object-cover" alt="Review" />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-orange-500 text-white border-none shadow-lg"><Clock size={12} className="mr-1.5"/> Pending Review</Badge>
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-extrabold text-cta uppercase tracking-widest bg-cta/10 px-3 py-1 rounded">Culinary</span>
                      <span className="text-xs font-bold text-foreground/40">Diajukan 5 jam lalu</span>
                    </div>
                    <h3 className="font-bold text-2xl leading-tight mb-2">Kelas Pembuatan Lontong Spesial</h3>
                    <p className="text-sm font-medium text-foreground/60 mb-6 line-clamp-2">Tambahan variasi resep untuk pengalaman kuliner oleh Komunitas PKK lokal.</p>
                    
                    <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">PK</div>
                        <span className="text-sm font-bold">Komunitas PKK</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-600"><XCircle size={18}/></Button>
                        <Button size="sm" variant="outline" className="rounded-full h-10 px-4 border-black/10"><Eye size={16} className="mr-2"/> Detail</Button>
                        <Button size="sm" variant="primary" className="rounded-full h-10 px-6 font-bold shadow-md shadow-primary/20"><CheckCircle2 size={16} className="mr-2"/> Approve</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Column: System Logs */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-3xl font-bold text-foreground">Aktivitas Sistem</h2>
            </div>
            
            <Card className="rounded-[2rem] border-black/5 shadow-sm bg-white overflow-hidden p-8">
              <div className="relative border-l-2 border-black/5 ml-3 space-y-8 pb-2">
                {/* Log 1 */}
                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white bg-green-500"></div>
                  <div className="text-xs font-bold text-foreground/40 mb-1">Baru saja</div>
                  <div className="font-bold text-sm text-foreground mb-1">Pencairan Dana Berhasil</div>
                  <div className="text-xs font-medium text-foreground/60">Rp 4.250.000 ditransfer ke Abah Rahman.</div>
                </div>
                {/* Log 2 */}
                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white bg-blue-500"></div>
                  <div className="text-xs font-bold text-foreground/40 mb-1">1 Jam Lalu</div>
                  <div className="font-bold text-sm text-foreground mb-1">Booking Baru (Budi Santoso)</div>
                  <div className="text-xs font-medium text-foreground/60">Paket Jelajah Sejarah - 2 Pax.</div>
                </div>
                {/* Log 3 */}
                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white bg-primary"></div>
                  <div className="text-xs font-bold text-foreground/40 mb-1">3 Jam Lalu</div>
                  <div className="font-bold text-sm text-foreground mb-1">Pendaftaran Mitra Baru</div>
                  <div className="text-xs font-medium text-foreground/60">Koperasi Nelayan Mahakam mengajukan akun.</div>
                </div>
                {/* Log 4 */}
                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white bg-yellow-500"></div>
                  <div className="text-xs font-bold text-foreground/40 mb-1">Kemarin, 15:30</div>
                  <div className="font-bold text-sm text-foreground mb-1">Ulasan Bintang 5</div>
                  <div className="text-xs font-medium text-foreground/60">"Pengalaman luar biasa!" untuk Workshop Anyaman.</div>
                </div>
              </div>
              <Button variant="outline" className="w-full rounded-full font-bold border-black/10 mt-8 text-sm h-12 hover:bg-black/5">Lihat Semua Log</Button>
            </Card>
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
