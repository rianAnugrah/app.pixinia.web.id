"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const AuctionLandingPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 30,
    seconds: 45
  });

  const [currentBid, setCurrentBid] = useState(15000000);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Countdown timer simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const featuredAuctions = [
    {
      id: 1,
      title: "Lukisan Antik Raden Saleh",
      currentBid: 25000000,
      timeLeft: "2 hari 14 jam",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=300&h=200&fit=crop",
      category: "Seni & Antik"
    },
    {
      id: 2,
      title: "Mobil Klasik Mercedes 1960",
      currentBid: 350000000,
      timeLeft: "5 hari 8 jam",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=300&h=200&fit=crop",
      category: "Otomotif"
    },
    {
      id: 3,
      title: "Jam Tangan Rolex Vintage",
      currentBid: 85000000,
      timeLeft: "1 hari 22 jam",
      image: "https://images.unsplash.com/photo-1523170335258-f5c6c6bd6eaf?w=300&h=200&fit=crop",
      category: "Perhiasan"
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
      <Head>
        <title>AuctionHub - Platform Lelang Terpercaya Indonesia</title>
        <meta name="description" content="Platform lelang online terpercaya untuk barang antik, seni, kendaraan, dan koleksi berharga lainnya di Indonesia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="text-2xl font-bold text-blue-600">
                  🔨 AuctionHub
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#beranda" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Beranda</a>
                  <a href="#lelang" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Lelang Aktif</a>
                  <a href="#kategori" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Kategori</a>
                  <a href="#tentang" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Tentang</a>
                  <a href="#kontak" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Kontak</a>
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-4">
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Masuk
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Daftar
                </button>
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-blue-600"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#beranda" className="block px-3 py-2 text-gray-900 hover:text-blue-600">Beranda</a>
                <a href="#lelang" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Lelang Aktif</a>
                <a href="#kategori" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Kategori</a>
                <a href="#tentang" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tentang</a>
                <a href="#kontak" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Kontak</a>
                <hr className="my-2" />
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Masuk</a>
                <a href="#" className="block px-3 py-2 bg-blue-600 text-white rounded-lg">Daftar</a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="beranda" className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Platform Lelang
                <span className="block text-yellow-400">Terpercaya Indonesia</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Temukan barang antik, seni, kendaraan klasik, dan koleksi berharga lainnya. 
                Bergabunglah dengan ribuan kolektor di seluruh Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                  Mulai Lelang Sekarang
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                  Jelajahi Lelang
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Auction Highlight */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    🔥 LELANG UNGGULAN
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Koleksi Emas Antik Majapahit
                  </h2>
                  <p className="text-xl mb-6">
                    Perhiasan emas bersejarah dari era Kerajaan Majapahit. Kesempatan langka untuk kolektor sejarah Indonesia.
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{currentBid.toLocaleString('id-ID')}</div>
                      <div className="text-sm opacity-90">Bid Saat Ini</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="text-center bg-white bg-opacity-20 rounded-lg p-3">
                      <div className="text-2xl font-bold">{timeLeft.days}</div>
                      <div className="text-sm">Hari</div>
                    </div>
                    <div className="text-center bg-white bg-opacity-20 rounded-lg p-3">
                      <div className="text-2xl font-bold">{timeLeft.hours}</div>
                      <div className="text-sm">Jam</div>
                    </div>
                    <div className="text-center bg-white bg-opacity-20 rounded-lg p-3">
                      <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                      <div className="text-sm">Menit</div>
                    </div>
                    <div className="text-center bg-white bg-opacity-20 rounded-lg p-3">
                      <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                      <div className="text-sm">Detik</div>
                    </div>
                  </div>
                  <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                    Ikuti Lelang Ini
                  </button>
                </div>
                <div className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=400&fit=crop" 
                    alt="Koleksi Emas Antik"
                    className="rounded-xl shadow-2xl mx-auto hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Auctions */}
        <section id="lelang" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Lelang Terpopuler
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Temukan berbagai barang menarik yang sedang dilelang dengan harga terbaik
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredAuctions.map((auction) => (
                <div key={auction.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className="relative">
                    <img 
                      src={auction.image} 
                      alt={auction.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {auction.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {auction.timeLeft}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{auction.title}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Bid Saat Ini</p>
                        <p className="text-2xl font-bold text-blue-600">{formatCurrency(auction.currentBid)}</p>
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                      Ikuti Lelang
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Lihat Semua Lelang
              </button>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="kategori" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kategori Lelang
              </h2>
              <p className="text-xl text-gray-600">
                Jelajahi berbagai kategori barang yang tersedia untuk dilelang
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Seni & Antik", icon: "🎨", count: "150+" },
                { name: "Otomotif", icon: "🚗", count: "80+" },
                { name: "Perhiasan", icon: "💎", count: "200+" },
                { name: "Elektronik", icon: "📱", count: "120+" },
                { name: "Fashion", icon: "👕", count: "90+" },
                { name: "Koleksi", icon: "🏆", count: "60+" },
                { name: "Furniture", icon: "🪑", count: "45+" },
                { name: "Lainnya", icon: "📦", count: "100+" }
              ].map((category, index) => (
                <div key={index} className="bg-gray-50 hover:bg-blue-50 rounded-xl p-6 text-center cursor-pointer transition-all transform hover:scale-105">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-blue-600 font-semibold">{category.count} item</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Cara Kerja Lelang
              </h2>
              <p className="text-xl opacity-90">
                Proses sederhana untuk mulai berpartisipasi dalam lelang
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Daftar & Verifikasi",
                  description: "Buat akun dan verifikasi identitas Anda untuk keamanan transaksi"
                },
                {
                  step: "2", 
                  title: "Pilih Lelang",
                  description: "Jelajahi berbagai kategori dan pilih barang yang Anda inginkan"
                },
                {
                  step: "3",
                  title: "Menang & Bayar",
                  description: "Ikuti lelang, menang, dan selesaikan pembayaran dengan aman"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-yellow-400 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="opacity-90">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "10,000+", label: "Pengguna Aktif" },
                { number: "5,000+", label: "Barang Terjual" },
                { number: "50+", label: "Kategori" },
                { number: "99%", label: "Kepuasan Pelanggan" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Memulai Lelang Pertama Anda?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Bergabunglah dengan komunitas kolektor dan temukan barang impian Anda hari ini
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                Daftar Gratis Sekarang
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-4">
                  🔨 AuctionHub
                </div>
                <p className="text-gray-300 mb-4">
                  Platform lelang online terpercaya di Indonesia untuk berbagai koleksi berharga.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">📘</a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">📷</a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">🐦</a>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Layanan</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Lelang Online</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Penilaian Barang</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Konsultasi</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Asuransi</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Bantuan</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Cara Lelang</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Hubungi Kami</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Live Chat</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Kontak</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>📧 info@auctionhub.id</li>
                  <li>📞 +62 21 1234 5678</li>
                  <li>📍 Jakarta, Indonesia</li>
                  <li>🕒 24/7 Online Support</li>
                </ul>
              </div>
            </div>
            
            <hr className="border-gray-700 my-8" />
            
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">
                © 2025 AuctionHub. Semua hak dilindungi.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Kebijakan Privasi</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Syarat & Ketentuan</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AuctionLandingPage;