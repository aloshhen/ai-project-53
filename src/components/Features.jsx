import React from 'react'
import { cn } from '../utils'
import { Utensils, Clock, Coffee, Sparkles } from 'lucide-react'

export default function Features() {
  return (
    <section id="menu" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Наше меню
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-3xl bg-white/50 backdrop-blur-xl border border-slate-200/50 p-8">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <Coffee className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Ароматный кофе</h3>
            <p className="text-slate-600">
              Свежие зерна ручной обжарки, приготовленные опытными бариста
            </p>
          </div>
          <div className="rounded-3xl bg-white/50 backdrop-blur-xl border border-slate-200/50 p-8">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <Utensils className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Десерты</h3>
            <p className="text-slate-600">
              Свежие тарталетки, брауни и пирожные домашнего приготовления
            </p>
          </div>
          <div className="rounded-3xl bg-white/50 backdrop-blur-xl border border-slate-200/50 p-8">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Быстро и удобно</h3>
            <p className="text-slate-600">
              Бронирование столов за 3 клика и быстрая доставка напитков
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}