import React from 'react'
import { cn } from '../utils'
import { Coffee, Menu } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Coffee className="w-8 h-8 text-amber-600" />
          <span className="text-xl font-bold gradient-text">Браун</span>
        </div>
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <div className="hidden md:flex gap-8">
          <a href="#" className="text-slate-700 hover:text-amber-600 transition-colors">Главная</a>
          <a href="#menu" className="text-slate-700 hover:text-amber-600 transition-colors">Меню</a>
          <a href="#reservation" className="text-slate-700 hover:text-amber-600 transition-colors">Бронирование</a>
        </div>
      </div>
    </nav>
  )
}