import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white p-4">
      <Image
        src="/fon2.jpg"
        alt=""
        layout="fill"
        className="fixed top-0 left-0 object-cover z-[0]"
      />
      <div className="max-w-md mx-auto space-y-6 py-4 ">
        {/* Logo */}
        <div className="text-center mb-4 glass-effect p-8 rounded-2xl">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white via-gray-200 to-gray-400 text-transparent bg-clip-text">
            REEBOK
          </h1>
          <p className="text-gray-400 text-lg">
        Добро пожаловать к официальному дилеру REEBOK и Daniel's!
          </p>
        </div>

        {/* Contact Links */}
        <Link href="tel:+998990000096" 
          className="link-item flex items-center gap-4 p-5 rounded-xl group hover:bg-white/10 transition-colors relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1 bg-white animate-line"></div>
          <div className="w-10 h-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
          </div>
          <div>
            <div className="font-medium text-lg group-hover:text-white transition-colors">Позвонить нам</div>
            <div className="text-white/60 group-hover:text-white/80 transition-colors">+998 99 000 00 96</div>
          </div>
        </Link>

        <Link href="https://t.me/salvatini_uz" 
          className="link-item flex items-center gap-4 p-5 rounded-xl group hover:bg-white/10 transition-colors relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1 bg-white animate-line"></div>
          <div className="w-10 h-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.015-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.241-1.865-.44-.751-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.119.098.152.228.166.331.016.122.033.391.019.591z"/>
            </svg>
          </div>
          <div>
            <div className="font-medium text-lg group-hover:text-white transition-colors">Telegram</div>
            <div className="text-white/60 group-hover:text-white/80 transition-colors">Цены и новости</div>
          </div>
        </Link>

        <Link href="https://instagram.com/salvatini.uz" 
          className="link-item flex items-center gap-4 p-5 rounded-xl group hover:bg-white/10 transition-colors relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1 bg-white animate-line"></div>
          <div className="w-10 h-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
          <div>
            <div className="font-medium text-lg group-hover:text-white transition-colors">Instagram</div>
            <div className="text-white/60 group-hover:text-white/80 transition-colors">Новости</div>
          </div>
        </Link>

        <Link href="https://yandex.com/maps/-/CDe5rS9y" 
          className="link-item flex items-center gap-4 p-5 rounded-xl group hover:bg-white/10 transition-colors relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1 bg-white animate-line"></div>
          <div className="w-10 h-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </div>
          <div>
            <div className="font-medium text-lg group-hover:text-white transition-colors">Адрес</div>
            <div className="text-white/60 group-hover:text-white/80 transition-colors">Yandex Maps</div>
          </div>
        </Link>

        <Link href="https://maps.google.com/?q=Salvatini" 
          className="link-item flex items-center gap-4 p-5 rounded-xl group hover:bg-white/10 transition-colors relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1 bg-white animate-line"></div>
          <div className="w-10 h-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </div>
          <div>
            <div className="font-medium text-lg group-hover:text-white transition-colors">Адрес</div>
            <div className="text-white/60 group-hover:text-white/80 transition-colors">Google Maps</div>
          </div>
        </Link>

        {/* Working Hours */}
        <div className="text-center text-gray-400 mt-8 relative z-10">
          <p>Время работы: 18:00 - 22:00</p>
          <p>Выходной: отдыхаем 7/1</p>
        </div>

        {/* Company Info */}
        <div className="text-center text-gray-400 mt-4 relative z-10">
          <p>© 2025 SALVATINI. Все права защищены.</p>
        </div>

      </div>
    </div>
  );
}
