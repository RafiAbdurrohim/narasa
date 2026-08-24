"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { experiences } from "@/data/mockExperiences";
import { Search, MapPin, Star, HeartHandshake, Compass, ArrowRight, Mail } from "lucide-react";

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = ["Semua", "Heritage", "Culinary", "Craft", "Culture", "Family"];

  const filteredExperiences = experiences.filter((exp) => {
    const matchSearch = exp.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = selectedCategory === "Semua" || exp.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  const featuredExperience = experiences[3]; // The Full Day Tour
  const gridExperiences = filteredExperiences.filter((exp) => exp.id !== featuredExperience.id);

  return (
    <main className="min-h-screen bg-background">
      {/* Editorial Navbar */}
      <nav className="absolute top-0 w-full z-50 pt-8 pb-4">
        <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
          <Link href="/">
            <div className="font-serif font-bold text-2xl tracking-tighter text-white drop-shadow-md">
              NARASA<span className="text-primary">.</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white/90 drop-shadow-md">
            <Link href="/" className="hover:text-primary transition-colors">
              Beranda
            </Link>
            <Link href="/provider" className="hover:text-primary transition-colors">
              Mitra
            </Link>
            <Link href="/admin" className="hover:text-primary transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </nav>

      {/* Cinematic Header */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0">
          <img src="https://www.kutairaya.com/newsphoto/20250811tempat.jpeg" alt="Kampung Ketupat Banner" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 w-full max-w-4xl mt-16">
          <h1 className="font-serif text-5xl md:text-7xl text-white font-bold tracking-tight mb-6 leading-tight drop-shadow-lg">
            Temukan <span className="italic font-light">Pengalamanmu.</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 drop-shadow-md">Pilih dari koleksi aktivitas budaya, kuliner, dan sejarah terbaik yang dikurasi khusus untuk kenyamanan Muslim-friendly Anda.</p>

          {/* Search Bar Glassmorphism */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground/50" size={24} />
            <input
              type="text"
              placeholder="Cari pengalaman, lokasi, atau panduan..."
              className="w-full pl-16 pr-6 py-5 rounded-full bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/20 text-lg text-foreground font-medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-8 pb-32">
        {/* Category Pills - Interactive & Beautiful */}
        <div className="flex items-center gap-4 overflow-x-auto pb-4 mb-16 scrollbar-hide snap-x">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`snap-center px-8 py-3.5 rounded-full text-base font-bold whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat ? "bg-foreground text-white shadow-lg shadow-black/10 scale-105" : "bg-white border border-black/5 hover:bg-black/5 text-foreground/70 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Banner Experience (Breaks the grid monotony) */}
        {selectedCategory === "Semua" && searchQuery === "" && (
          <div className="mb-20 group cursor-pointer block">
            <h3 className="text-lg font-bold text-foreground/50 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Star size={18} className="text-yellow-500 fill-current" /> Pengalaman Populer Minggu Ini
            </h3>
            <Link href={`/experience/${featuredExperience.id}`}>
              <div className="relative rounded-[2.5rem] overflow-hidden bg-black h-[400px] shadow-2xl">
                <img src={featuredExperience.image} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Featured" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="text-white max-w-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-primary/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                        <HeartHandshake size={14} /> Muslim-Friendly
                      </span>
                      <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">{featuredExperience.category}</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">{featuredExperience.title}</h2>
                    <p className="text-white/80 text-lg line-clamp-2">{featuredExperience.description}</p>
                  </div>

                  <div className="shrink-0 flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-white/60 text-sm font-medium">Mulai dari</div>
                      <div className="text-white font-serif text-3xl font-bold">Rp {featuredExperience.price.toLocaleString("id-ID")}</div>
                    </div>
                    <Button variant="primary" className="rounded-full h-14 px-8 font-bold text-lg shadow-lg shadow-primary/20">
                      Lihat Detail
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Grid Experiences */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-3xl font-bold text-foreground">{selectedCategory === "Semua" ? "Koleksi Lengkap" : `Kategori: ${selectedCategory}`}</h2>
          <span className="text-foreground/50 font-medium">{selectedCategory === "Semua" ? experiences.length : filteredExperiences.length} Aktivitas</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {(selectedCategory === "Semua" && searchQuery === "" ? gridExperiences : filteredExperiences).map((exp) => (
            <Link href={`/experience/${exp.id}`} key={exp.id} className="block group">
              <Card className="flex flex-col h-full rounded-[2rem] border-black/5 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 bg-white overflow-hidden">
                <div className="aspect-[4/3] relative overflow-hidden bg-black/5">
                  <img src={exp.image} alt={exp.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" />

                  {/* Floating Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {exp.isMuslimFriendly && (
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-[11px] font-bold text-primary flex items-center gap-1.5 shadow-sm">
                      <HeartHandshake size={14} /> VERIFIED
                    </div>
                  )}

                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-2 py-1.5 rounded-xl text-xs font-bold text-foreground flex flex-col items-center shadow-sm">
                    <Star size={14} className="text-yellow-500 fill-current mb-0.5" />
                    {exp.rating}
                  </div>
                </div>

                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-cta uppercase tracking-widest bg-cta/10 px-3 py-1.5 rounded-lg">{exp.category}</span>
                    <span className="text-xs font-semibold text-foreground/50">{exp.duration}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold leading-tight mb-4 line-clamp-2 group-hover:text-primary transition-colors">{exp.title}</h3>

                  <div className="flex items-center text-sm text-foreground/60 mb-8 gap-2 font-medium">
                    <MapPin size={16} className="text-primary/70 shrink-0" />
                    <span className="truncate">{exp.meetingPoint}</span>
                  </div>

                  <div className="mt-auto pt-6 border-t border-black/5 flex items-end justify-between">
                    <div>
                      <span className="text-xs text-foreground/50 font-semibold uppercase tracking-wider block mb-1">Mulai dari</span>
                      <div className="font-extrabold text-foreground text-xl">Rp {exp.price.toLocaleString("id-ID")}</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredExperiences.length === 0 && (
          <div className="py-32 text-center flex flex-col items-center">
            <Compass size={64} className="text-black/10 mb-6" />
            <h3 className="font-serif text-3xl font-bold mb-2">Pencarian Tidak Ditemukan</h3>
            <p className="text-foreground/60 text-lg">Coba gunakan kata kunci atau kategori yang berbeda.</p>
          </div>
        )}
      </div>

      {/* New Section: Custom Itinerary CTA */}
      <section className="container mx-auto px-6 lg:px-8 pb-32">
        <div className="bg-primary/5 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 border border-primary/10 relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] -z-10 translate-x-1/3 -translate-y-1/3" />

          <div className="max-w-2xl relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-primary/20 text-primary text-sm font-bold mb-6 shadow-sm">Layanan Personal</div>
            <h3 className="font-serif text-4xl md:text-5xl font-extrabold mb-6 text-foreground leading-[1.1]">
              Bingung Memilih <br />
              Pengalaman yang Tepat?
            </h3>
            <p className="text-foreground/70 text-lg mb-8 font-medium leading-relaxed">
              Tim lokal kami siap membantu merancang rencana perjalanan khusus (<i>custom itinerary</i>) untuk keluarga atau rombongan Anda selama di Kampung Ketupat.
            </p>
            <Button size="lg" variant="primary" className="rounded-full px-10 h-16 text-lg font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-transform">
              Hubungi Local Guide
            </Button>
          </div>

          <div className="hidden lg:block relative z-10 shrink-0">
            <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl relative">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" alt="Customer Service" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce" style={{ animationDuration: "3s" }}>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <HeartHandshake size={24} />
              </div>
              <div className="text-sm font-bold leading-tight">
                100%
                <br />
                <span className="text-foreground/50 font-normal">Respon Cepat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rich Footer (Consistent with Homepage) */}
      <footer className="bg-foreground text-white pt-24 pb-10 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
            <div className="lg:col-span-1">
              <div className="font-serif font-bold text-3xl mb-6 tracking-tighter">
                NARASA<span className="text-primary">.</span>
              </div>
              <p className="text-white/60 font-medium leading-relaxed mb-8 max-w-xs">Platform pengalaman lokal Muslim-friendly pertama yang menghubungkan Anda langsung dengan keaslian budaya Kampung Ketupat.</p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8 text-white">Eksplorasi</h4>
              <ul className="space-y-4 text-white/60 font-medium">
                <li>
                  <Link href="/explore" className="hover:text-primary transition-colors">
                    Semua Pengalaman
                  </Link>
                </li>
                <li>
                  <Link href="/explore" className="hover:text-primary transition-colors">
                    Kuliner Halal
                  </Link>
                </li>
                <li>
                  <Link href="/explore" className="hover:text-primary transition-colors">
                    Warisan Budaya
                  </Link>
                </li>
                <li>
                  <Link href="/explore" className="hover:text-primary transition-colors">
                    Kerajinan Tangan
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8 text-white">Untuk Mitra</h4>
              <ul className="space-y-4 text-white/60 font-medium">
                <li>
                  <Link href="/provider" className="hover:text-primary transition-colors">
                    Provider Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Cara Bergabung
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Panduan Layanan
                  </Link>
                </li>
                <li>
                  <Link href="/admin" className="hover:text-primary transition-colors">
                    Admin Portal
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8 text-white">Hubungi Kami</h4>
              <ul className="space-y-5 text-white/60 font-medium">
                <li className="flex items-start gap-4">
                  <Mail size={20} className="text-primary shrink-0 mt-0.5" />
                  <span>
                    hello@narasa.id
                    <br />
                    <span className="text-sm text-white/40">Respon dalam 24 jam</span>
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                  <span>
                    Kampung Ketupat
                    <br />
                    <span className="text-sm text-white/40">Samarinda, Kalimantan Timur</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40 font-medium">
            <p>© 2026 NARASA. Hak Cipta Dilindungi.</p>
            <div className="flex items-center gap-8">
              <Link href="#" className="hover:text-white transition-colors">
                Syarat & Ketentuan
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
