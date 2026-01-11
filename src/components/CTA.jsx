import React from 'react'
import { cn } from '../utils'
import { Coffee, Utensils } from 'lucide-react'

export default function CTA() {
  return (
    <section id="reservation" className="py-24 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Забронируйте стол
          </h2>
          <p className="text-xl text-slate-700 mb-10">
            Удобная система бронирования позволяет выбрать время и место за 3 минуты
          </p>
          <button className="px-8 py-4 bg-amber-600 text-white rounded-3xl hover:bg-amber-700 transition-colors">
            Забронировать сейчас
          </button>
        </div>
      </div>
    </section>
  )
}