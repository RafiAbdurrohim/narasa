import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { experiences } from "@/data/mockExperiences";
import { ArrowRight, MapPin, HeartHandshake, Compass, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Editorial Navbar (Transparent/Minimal) */}
      <nav className="absolute top-0 w-full z-50 pt-6 md:pt-8 pb-4">
        <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
          <div className="font-serif font-bold text-2xl tracking-tighter text-foreground">
            NARASA<span className="text-primary">.</span>
          </div>
          <div className="flex items-center gap-6 md:gap-10 text-sm font-medium text-foreground/80">
            <Link href="/explore" className="hover:text-primary transition-colors hidden sm:block">Eksplorasi</Link>
            <Link href="/provider" className="hover:text-primary transition-colors hidden sm:block">Mitra</Link>
            <Link href="/explore">
              <span className="pb-1 border-b-2 border-foreground hover:border-primary transition-colors cursor-pointer text-xs md:text-sm font-bold md:font-medium">
                Pesan Sekarang
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero - Editorial & Cinematic */}
      <section className="pt-28 md:pt-32 lg:pt-40 pb-16 md:pb-20 relative">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-5xl mx-auto mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
              <span className="h-[1px] w-6 md:w-8 bg-primary"></span>
              <span className="text-primary font-bold md:font-medium tracking-widest text-[10px] md:text-xs uppercase">Muslim-Friendly Local Experience</span>
              <span className="h-[1px] w-6 md:w-8 bg-primary"></span>
            </div>
            <h1 className="font-serif text-5xl sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] leading-[1.1] md:leading-[0.9] tracking-tight text-foreground">
              Kampung Ketupat.<br />
              <span className="text-primary italic font-light">Soul of Local.</span>
            </h1>
          </div>

          {/* Panoramic Hero Image */}
          <div className="w-full h-[40vh] sm:h-[50vh] md:h-[65vh] rounded-[2rem] overflow-hidden relative group">
            <img 
              src="https://metroikn.co/wp-content/uploads/2025/09/Kampung-Ketupat.jpg" 
              alt="Kampung Ketupat Landscape" 
              className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Floating Glassmorphism Booking Bar */}
            <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 w-[92%] sm:w-[80%] md:w-[600px] bg-white/90 md:bg-white/80 backdrop-blur-xl p-2 md:p-3 rounded-full shadow-2xl flex items-center justify-between border border-white/50">
              <div className="pl-4 md:pl-6 flex items-center gap-2 md:gap-3 text-foreground/60 font-medium text-sm md:text-base">
                <Compass size={18} className="text-primary shrink-0" />
                <span className="hidden sm:inline">Temukan pengalaman berkesan...</span>
                <span className="sm:hidden text-xs">Cari pengalaman...</span>
              </div>
              <Link href="/explore">
                <Button variant="primary" className="rounded-full px-5 md:px-8 h-10 md:h-12 shadow-lg shadow-cta/20 font-bold text-xs md:text-sm">
                  Jelajah
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories - Editorial Mosaic Grid */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-tight">
              Pilih <br className="hidden md:block"/>Petualanganmu.
            </h2>
            <p className="text-foreground/60 max-w-sm md:text-right font-medium">
              Dari kelezatan kuliner halal hingga kerajinan tangan otentik, temukan daya tarik Kampung Ketupat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[500px]">
            {/* Large Featured Category */}
            <Link href="/explore" className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group h-[300px] md:h-auto block">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTezhMZud0wXnwNgRL243R4pcBpoNBLcFDyiNZZm5CQSA&s=10" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Culinary" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="text-white/80 text-sm font-semibold tracking-widest uppercase mb-2">01. Kategori</div>
                <h3 className="font-serif text-4xl text-white">Local Culinary</h3>
              </div>
            </Link>

            {/* Medium Category 1 */}
            <Link href="/explore" className="md:col-span-2 relative rounded-3xl overflow-hidden group h-[250px] md:h-auto block">
              <img src="https://asset.tribunnews.com/QySuwLvVAPtI5KXU9vkG9If9jq4=/1200x675/filters:upscale():quality(30):format(webp):focal(0.5x0.5:0.5x0.5)/banjarmasin/foto/bank/originals/anyaman-ketupat-dari-daun-nipahsafas.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Craft" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="text-white/80 text-sm font-semibold tracking-widest uppercase mb-1">02. Kategori</div>
                <h3 className="font-serif text-3xl text-white">Authentic Craft</h3>
              </div>
            </Link>

            {/* Small Category 1 */}
            <Link href="/explore" className="relative rounded-3xl overflow-hidden group h-[200px] md:h-auto block">
              <img src="https://www.indonesia.travel/contentassets/ec44797b4af641779299983bb1829630/kampung-ketupat-kalimantan-timur-wisata-kuliner-unik.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Culture" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-serif text-2xl text-white">Culture</h3>
              </div>
            </Link>

            {/* Small Category 2 */}
            <Link href="/explore" className="relative rounded-3xl overflow-hidden bg-primary/10 group h-[200px] md:h-auto flex items-center justify-center text-center p-6 border border-primary/20 hover:bg-primary transition-colors">
              <div>
                <h3 className="font-serif text-2xl text-primary group-hover:text-white transition-colors mb-2">Semua<br/>Kategori</h3>
                <div className="w-10 h-10 rounded-full border border-primary text-primary group-hover:border-white group-hover:text-white mx-auto flex items-center justify-center transition-colors">
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Experiences - Bespoke Magazine Layout */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-4">Pengalaman Unggulan.</h2>
            <p className="text-foreground/60 max-w-xl mx-auto font-medium">Koleksi aktivitas terbaik yang telah diverifikasi langsung, menjamin kenyamanan wisata Muslim-friendly Anda.</p>
          </div>

          <div className="space-y-24">
            {experiences.slice(0, 3).map((exp, index) => (
              <div key={exp.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-16 items-center`}>
                
                {/* Large Image View */}
                <Link href={`/experience/${exp.id}`} className="w-full md:w-3/5 h-[40vh] md:h-[60vh] rounded-[2rem] overflow-hidden relative group block shadow-xl">
                  <img src={exp.image} alt={exp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  {exp.isMuslimFriendly && (
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-primary flex items-center gap-2 shadow-sm">
                      <HeartHandshake size={16} /> VERIFIED HALAL
                    </div>
                  )}
                </Link>

                {/* Typography & Info Content */}
                <div className="w-full md:w-2/5 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-sm font-bold text-cta uppercase tracking-widest">{exp.category}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-black/20"></span>
                    <span className="text-sm font-medium text-foreground/60">{exp.duration}</span>
                  </div>
                  
                  <Link href={`/experience/${exp.id}`}>
                    <h3 className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-6 hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                  </Link>
                  
                  <p className="text-foreground/70 leading-relaxed mb-8 line-clamp-3">
                    {exp.description}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-black/10 pt-8">
                    <div>
                      <div className="text-sm font-medium text-foreground/50 mb-1">Harga mulai</div>
                      <div className="font-serif text-2xl font-medium">Rp {exp.price.toLocaleString("id-ID")}</div>
                    </div>
                    <Link href={`/experience/${exp.id}`}>
                      <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                        <ArrowRight size={20} />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <Link href="/explore">
              <Button variant="outline" className="rounded-full px-10 h-14 font-bold border-black/20 hover:border-primary hover:text-primary">
                Eksplorasi Semua Experience
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Destination Info - Immersive Style */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 bg-pattern-ketupat opacity-10" style={{ filter: "invert(1)" }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="flex-1 text-white">
              <Badge className="bg-white/20 text-white border-none mb-6 hover:bg-white/30">Destinasi Utama</Badge>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                Jantung Pelestarian <br/>Budaya Lokal
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed font-medium">
                Kampung Ketupat bukan sekadar tempat wisata. Ini adalah denyut nadi komunitas lokal di mana tradisi masa lalu dirawat dan disajikan dengan standar layanan modern & inklusif.
              </p>
              <Link href="/explore">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 h-14 rounded-full">
                  Mulai Rencanakan Kunjungan
                </Button>
              </Link>
            </div>
            
            <div className="w-full md:w-[400px] shrink-0 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img src="https://metroikn.co/wp-content/uploads/2025/09/Kampung-Ketupat.jpg" alt="Kampung Ketupat" className="w-full h-full object-cover" />
              </div>
              
              {/* Floating info card */}
              <div className="absolute -left-10 bottom-10 bg-white p-5 rounded-2xl shadow-xl max-w-[200px] hidden lg:block animate-pulse" style={{animationDuration: '4s'}}>
                <div className="font-extrabold text-2xl text-cta mb-1">15+</div>
                <div className="text-sm font-bold text-foreground/70 leading-snug">Mitra Lokal Tersertifikasi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action / Register */}
      <section className="py-32 bg-white relative overflow-hidden border-t border-black/5">
        <div className="absolute inset-0 bg-pattern-ketupat opacity-[0.02] pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-foreground tracking-tight leading-tight">
            Tertarik Memulai <br className="hidden sm:block"/> Perjalanan Anda?
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
            Bergabunglah dengan ekosistem wisata inklusif kami. Buat akun sekarang untuk kemudahan pemesanan, mendapatkan promo khusus, dan merencanakan liburan bermakna.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/explore">
              <Button size="lg" variant="primary" className="w-full sm:w-auto rounded-full px-12 h-16 font-bold text-lg shadow-2xl shadow-cta/20 hover:-translate-y-1 transition-all">
                Daftar Sekarang
              </Button>
            </Link>
            <Link href="/provider">
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-10 h-16 font-bold text-lg border-black/10 hover:border-primary hover:text-primary hover:-translate-y-1 transition-all bg-white">
                Tertarik Menjadi Mitra?
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Rich Footer */}
      <footer className="bg-foreground text-white pt-24 pb-10 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
            {/* Brand Column */}
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
            
            {/* Links Column 1 */}
            <div>
              <h4 className="font-bold text-lg mb-8 text-white">Eksplorasi</h4>
              <ul className="space-y-4 text-white/60 font-medium">
                <li><Link href="/explore" className="hover:text-primary transition-colors">Semua Pengalaman</Link></li>
                <li><Link href="/explore" className="hover:text-primary transition-colors">Kuliner Halal</Link></li>
                <li><Link href="/explore" className="hover:text-primary transition-colors">Warisan Budaya</Link></li>
                <li><Link href="/explore" className="hover:text-primary transition-colors">Kerajinan Tangan</Link></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <h4 className="font-bold text-lg mb-8 text-white">Untuk Mitra</h4>
              <ul className="space-y-4 text-white/60 font-medium">
                <li><Link href="/provider" className="hover:text-primary transition-colors">Provider Dashboard</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Cara Bergabung</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Panduan Layanan</Link></li>
                <li><Link href="/admin" className="hover:text-primary transition-colors">Admin Portal</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
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
