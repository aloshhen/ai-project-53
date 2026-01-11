import React from 'react'
import { cn } from '../utils'
import { Coffee, Utensils, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://source.unsplash.com/1600x900/?coffee,cafe"
          alt="Кофейня"
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            ☕ Кофе
            <span className="text-amber-600">ручной обжарки</span>
          </h1>
          <p className="text-xl text-slate-700 mb-10">
            В нашем уютном кафе вы найдете ароматные кофе, свежие десерты и удобные зоны отдыха
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-amber-600 text-white rounded-3xl hover:bg-amber-700 transition-colors">
              Забронировать стол
            </button>
            <button className="px-8 py-4 border-2 border-amber-600 text-amber-600 rounded-3xl hover:bg-amber-50 transition-colors">
              Посмотреть меню
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}