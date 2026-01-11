import React from 'react'
import { cn } from '../utils'
import { Coffee, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-800 text-slate-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-8 h-8 text-amber-400" />
              <span className="text-xl font-bold text-white">Браун</span>
            </div>
            <p className="text-slate-400">
              Уютная кофейня с ручной обжаркой и удобным бронированием
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>ул. Кофейная, 12, Москва</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-amber-400" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-amber-400" />
                <span>info@browncafe.ru</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Работаем</h3>
            <p className="text-slate-400 mb-2">Пн-Пт: 9:00 - 22:00</p>
            <p className="text-slate-400">Сб-Вс: 10:00 - 23:00</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-500">© 2024 Кофейня Браун. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}