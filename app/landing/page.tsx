// App.jsx
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-gray-100">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Husky-CNOOC Madura Limited (HCML)</h1>
        <p className="text-lg">Kontraktor Kontrak Kerja Sama Hulu Migas Indonesia</p>
      </header>

      {/* Metro Grid Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        <div className="bg-green-500 text-white p-6 shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-semibold">Tentang HCML</h2>
          <p className="mt-2 text-sm">
            HCML adalah KKKS yang ditunjuk oleh SKK Migas untuk mengeksplorasi dan
            mengeksploitasi minyak dan gas di Selat Madura, Jawa Timur.
          </p>
        </div>

        <div className="bg-yellow-400 text-gray-800 p-6 shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-semibold">Kantor</h2>
          <ul className="mt-2 text-sm space-y-1">
            <li><strong>Jakarta:</strong> BEI Tower 1, Sudirman</li>
            <li><strong>Surabaya:</strong> Intiland Tower, Panglima Sudirman</li>
          </ul>
        </div>

        <div className="bg-red-500 text-white p-6 shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-semibold">Operasi</h2>
          <p className="mt-2 text-sm">
            Lapangan BD & MDA/MBH mensuplai gas dan kondensat ke Jawa Timur dengan total kapasitas lebih dari 220 MMSCFD.
          </p>
        </div>

        <div className="bg-purple-600 text-white p-6 shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-semibold">Program Sosial</h2>
          <p className="mt-2 text-sm">
            Pelatihan jaring nelayan, sekolah komunitas, dan sertifikasi NEBOSH untuk keselamatan kerja.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white p-8 text-center mt-8">
        <h2 className="text-2xl font-bold mb-4">Bergabunglah Bersama Kami</h2>
        <p className="text-gray-700 mb-6">
          Kunjungi portal rekrutmen kami di <a href="https://recruitment.hcml.co.id" className="text-blue-600 underline">recruitment.hcml.co.id</a> atau email ke recruitment@hcml.co.id
        </p>
        <a
          href="https://recruitment.hcml.co.id"
          className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition"
        >
          Daftar Sekarang
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <p>COPYRIGHT ©2025 HCML - ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
