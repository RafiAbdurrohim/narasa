export interface Experience {
  id: string;
  title: string;
  description: string;
  category: "Heritage" | "Culinary" | "Craft" | "Culture" | "Family";
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  isMuslimFriendly: boolean;
  image: string;
  provider: {
    name: string;
    avatar?: string;
  };
  meetingPoint: string;
  included: string[];
  itinerary: { time: string; activity: string }[];
}

export const experiences: Experience[] = [
  {
    id: "p1",
    title: "NARASA Discover",
    description: "Langkah awal mengenal Kampung Ketupat. Jelajahi sudut-sudut kampung bersama pemandu lokal sambil mendengar cerita dan sejarah singkat di baliknya.",
    category: "Heritage",
    duration: "1.5 Jam",
    price: 40000,
    rating: 4.7,
    reviews: 18,
    isMuslimFriendly: true,
    image: "https://www.indonesia.travel/contentassets/ec44797b4af641779299983bb1829630/kampung-ketupat-kalimantan-timur-wisata-kuliner-unik.jpg",
    provider: { name: "NARASA" },
    meetingPoint: "Gapura Utama Kampung Ketupat",
    included: ["Pengalaman dengan pemandu lokal", "Eksplorasi Kampung Ketupat", "Pengenalan budaya & cerita lokal"],
    itinerary: [
      { time: "09:00", activity: "Kumpul di Gapura Utama" },
      { time: "09:15", activity: "Eksplorasi Kampung Ketupat bersama pemandu" },
      { time: "10:15", activity: "Pengenalan budaya & cerita lokal" },
      { time: "10:30", activity: "Selesai" }
    ]
  },
  {
    id: "p2",
    title: "NARASA Experience",
    description: "Paket inti NARASA — kombinasi jelajah budaya, praktik langsung membuat kerajinan ketupat, dan cicip kuliner lokal dalam satu rencana perjalanan yang sudah dikurasi.",
    category: "Culture",
    duration: "3 Jam",
    price: 90000,
    rating: 4.9,
    reviews: 55,
    isMuslimFriendly: true,
    image: "https://asset.tribunnews.com/QySuwLvVAPtI5KXU9vkG9If9jq4=/1200x675/filters:upscale():quality(30):format(webp):focal(0.5x0.5:0.5x0.5)/banjarmasin/foto/bank/originals/anyaman-ketupat-dari-daun-nipahsafas.jpg",
    provider: { name: "NARASA" },
    meetingPoint: "Gapura Utama Kampung Ketupat",
    included: ["Pengalaman dengan pemandu lokal", "Rencana perjalanan terkurasi", "Kegiatan membuat kerajinan ketupat", "Mencicipi kuliner lokal", "Informasi ramah Muslim"],
    itinerary: [
      { time: "09:00", activity: "Kumpul & pengenalan rencana perjalanan" },
      { time: "09:30", activity: "Jelajah budaya bersama pemandu lokal" },
      { time: "10:30", activity: "Kegiatan membuat kerajinan ketupat" },
      { time: "11:30", activity: "Mencicipi kuliner lokal" },
      { time: "12:00", activity: "Selesai" }
    ]
  },
  {
    id: "p3",
    title: "NARASA Signature",
    description: "Perjalanan lengkap ala lokal — dari tur warisan budaya, workshop kerajinan, kuliner otentik, hingga souvenir khas untuk kenang-kenangan.",
    category: "Culture",
    duration: "5 Jam",
    price: 145000,
    rating: 5.0,
    reviews: 9,
    isMuslimFriendly: true,
    image: "https://www.kutairaya.com/newsphoto/20250811tempat.jpeg",
    provider: { name: "NARASA" },
    meetingPoint: "Gapura Utama Kampung Ketupat",
    included: ["Tur warisan budaya bersama pemandu", "Kegiatan membuat kerajinan ketupat", "Pengalaman mencicipi kuliner lokal", "Souvenir khas lokal", "Informasi ramah Muslim", "Penuturan cerita budaya"],
    itinerary: [
      { time: "09:00", activity: "Kumpul & Sambutan" },
      { time: "09:15", activity: "Tur warisan budaya bersama pemandu" },
      { time: "10:30", activity: "Workshop kerajinan ketupat" },
      { time: "12:00", activity: "Mencicipi kuliner lokal" },
      { time: "13:00", activity: "Penuturan cerita budaya & pembagian souvenir" },
      { time: "14:00", activity: "Selesai" }
    ]
  },
  {
    id: "e1",
    title: "Jelajah Sejarah Kampung Ketupat",
    description: "Temukan jejak sejarah dan nilai-nilai luhur di balik Kampung Ketupat. Tur jalan kaki yang menenangkan menyusuri peninggalan budaya lokal.",
    category: "Heritage",
    duration: "2.5 Jam",
    price: 150000,
    rating: 4.8,
    reviews: 42,
    isMuslimFriendly: true,
    image: "https://www.kutairaya.com/newsphoto/20250811tempat.jpeg",
    provider: { name: "Abah Rahman" },
    meetingPoint: "Gapura Utama Kampung Ketupat",
    included: ["Local Guide", "Air Mineral", "Sumbangan Masjid"],
    itinerary: [
      { time: "09:00", activity: "Kumpul di Gapura Utama" },
      { time: "09:15", activity: "Storytelling Sejarah Kampung" },
      { time: "10:30", activity: "Kunjungan ke rumah tertua" },
      { time: "11:30", activity: "Selesai" }
    ]
  },
  {
    id: "e2",
    title: "Workshop Anyaman Ketupat Otentik",
    description: "Belajar langsung dari pengrajin lokal cara menganyam ketupat yang indah dan presisi. Cocok untuk aktivitas keluarga.",
    category: "Craft",
    duration: "2 Jam",
    price: 100000,
    rating: 4.9,
    reviews: 86,
    isMuslimFriendly: true,
    image: "https://asset.tribunnews.com/QySuwLvVAPtI5KXU9vkG9If9jq4=/1200x675/filters:upscale():quality(30):format(webp):focal(0.5x0.5:0.5x0.5)/banjarmasin/foto/bank/originals/anyaman-ketupat-dari-daun-nipahsafas.jpg",
    provider: { name: "Ibu Siti (Komunitas Pengrajin)" },
    meetingPoint: "Balai Warga RW 03",
    included: ["Bahan Anyaman", "Instruktur Lokal", "Hasil Karya Dibawa Pulang"],
    itinerary: [
      { time: "14:00", activity: "Kumpul di Balai Warga" },
      { time: "14:15", activity: "Pengenalan jenis daun kelapa" },
      { time: "14:30", activity: "Praktek Menganyam" },
      { time: "16:00", activity: "Foto bersama & Selesai" }
    ]
  },
  {
    id: "e3",
    title: "Kuliner Halal Khas Ketupat",
    description: "Cicipi berbagai hidangan lezat berbahan dasar ketupat, dipadukan dengan bumbu rahasia turun-temurun warga lokal.",
    category: "Culinary",
    duration: "1.5 Jam",
    price: 125000,
    rating: 4.7,
    reviews: 53,
    isMuslimFriendly: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTezhMZud0wXnwNgRL243R4pcBpoNBLcFDyiNZZm5CQSA&s=10",
    provider: { name: "Warung Makan Hj. Nani" },
    meetingPoint: "Warung Makan Hj. Nani",
    included: ["3 Menu Ketupat Berbeda", "Minuman Tradisional", "Penjelasan Halal"],
    itinerary: [
      { time: "12:00", activity: "Kumpul di Warung" },
      { time: "12:15", activity: "Presentasi sejarah makanan" },
      { time: "12:30", activity: "Tasting Menu 1 & 2" },
      { time: "13:15", activity: "Tasting Menu 3" },
      { time: "13:30", activity: "Selesai" }
    ]
  },
  {
    id: "e4",
    title: "Full Day Experience Kampung Ketupat",
    description: "Paket lengkap menjelajahi seluruh pesona Kampung Ketupat dalam satu hari. Heritage, Craft, dan Culinary digabung menjadi satu.",
    category: "Culture",
    duration: "6 Jam",
    price: 350000,
    rating: 5.0,
    reviews: 12,
    isMuslimFriendly: true,
    image: "https://www.indonesia.travel/contentassets/ec44797b4af641779299983bb1829630/kampung-ketupat-kalimantan-timur-wisata-kuliner-unik.jpg",
    provider: { name: "Koperasi Warga" },
    meetingPoint: "Gapura Utama Kampung Ketupat",
    included: ["Local Guide", "Makan Siang Halal", "Materi Workshop Anyaman", "Akses Shalat Dzuhur di Masjid Lokal"],
    itinerary: [
      { time: "09:00", activity: "Kumpul & Sambutan" },
      { time: "09:30", activity: "Heritage Tour" },
      { time: "12:00", activity: "Istirahat, Shalat Dzuhur berjamaah & Makan Siang" },
      { time: "13:30", activity: "Workshop Anyaman" },
      { time: "15:00", activity: "Selesai" }
    ]
  },
  {
    id: "e5",
    title: "Kelas Memasak Soto Banjar Otentik",
    description: "Belajar rahasia kuah rempah Soto Banjar langsung dari warga lokal yang telah melestarikan resep turun-temurun. Sesi mencicipi disertakan.",
    category: "Culinary",
    duration: "2 Jam",
    price: 135000,
    rating: 4.8,
    reviews: 31,
    isMuslimFriendly: true,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Soto_Ayam_Savoy_Homann_Hotel.JPG",
    provider: { name: "Dapur Acil" },
    meetingPoint: "Dapur Komunal Kampung",
    included: ["Bahan Masakan", "Tasting Session", "Resep Cetak"],
    itinerary: [
      { time: "10:00", activity: "Pengenalan Bumbu & Rempah" },
      { time: "10:30", activity: "Praktek Memasak Soto" },
      { time: "11:30", activity: "Sesi Makan Bersama" }
    ]
  },
  {
    id: "e6",
    title: "Susur Sungai Mahakam & Kampung Pesisir",
    description: "Nikmati pemandangan sore hari di pinggiran Sungai Mahakam dengan perahu tradisional. Jelajahi keunikan budaya sungai masyarakat setempat.",
    category: "Heritage",
    duration: "1.5 Jam",
    price: 85000,
    rating: 4.9,
    reviews: 112,
    isMuslimFriendly: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9jNiDnWETPbwMkEbGWTOiSpvGj5p1yidkBfyNYgFK-Q&s=10",
    provider: { name: "Paguyuban Klotok" },
    meetingPoint: "Dermaga Kampung Ketupat",
    included: ["Tiket Perahu", "Life Jacket", "Snorkel / Snack Tradisional"],
    itinerary: [
      { time: "16:00", activity: "Kumpul di Dermaga" },
      { time: "16:15", activity: "Mulai Susur Sungai" },
      { time: "17:15", activity: "Menikmati Sunset" },
      { time: "17:30", activity: "Kembali ke Dermaga" }
    ]
  },
  {
    id: "e7",
    title: "Pembuatan Lontong & Ketupat Lebaran",
    description: "Aktivitas keluarga merangkai dan memasak lontong bungkus daun pisang yang harum. Tradisi yang menyenangkan untuk segala usia.",
    category: "Family",
    duration: "2.5 Jam",
    price: 110000,
    rating: 4.6,
    reviews: 24,
    isMuslimFriendly: true,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Lontong.jpg",
    provider: { name: "Komunitas Ibu PKK" },
    meetingPoint: "Balai Serbaguna",
    included: ["Bahan Lontong", "Minuman", "Hasil Bawa Pulang"],
    itinerary: [
      { time: "09:00", activity: "Persiapan Daun Pisang" },
      { time: "09:30", activity: "Mengisi dan Membungkus Lontong" },
      { time: "10:30", activity: "Proses Perebusan & Istirahat" },
      { time: "11:30", activity: "Selesai" }
    ]
  },
  {
    id: "e8",
    title: "Belajar Tari Tradisional Pesisir",
    description: "Kenali gerak dasar tari tradisional pesisir Kalimantan yang anggun. Dipandu oleh penari lokal berpengalaman.",
    category: "Culture",
    duration: "2 Jam",
    price: 90000,
    rating: 4.9,
    reviews: 67,
    isMuslimFriendly: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw3D3xFn_uejXikzkDrSO8GHA-7d-k7pLpT-teAl3M5DZa64m__DUfzfI&s=10",
    provider: { name: "Sanggar Seni Ketupat" },
    meetingPoint: "Sanggar Seni Kampung",
    included: ["Instruktur Tari", "Peminjaman Selendang", "Air Mineral"],
    itinerary: [
      { time: "15:00", activity: "Pemanasan & Pengenalan Tari" },
      { time: "15:30", activity: "Latihan Gerak Dasar" },
      { time: "16:30", activity: "Praktek Menari Bersama" },
      { time: "17:00", activity: "Selesai" }
    ]
  }
];
