import React from 'react'
import { cn } from '../utils'
import { Sparkles, Coffee, Utensils, Clock } from 'lucide-react'

export default function About() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Как это работает
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">1. Выберите место</h3>
                <p className="text-slate-600">
                  На нашем сайте вы можете выбрать удобное время и место для посещения
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <Coffee className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">2. Закажите напиток</h3>
                <p className="text-slate-600">
                  Сделайте предварительный заказ кофе или десерта через приложение
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">3. Приходите и наслаждайтесь</h3>
                <p className="text-slate-600">
                  Приходите в назначенное время и получите ваш заказ за считанные минуты
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://source.unsplash.com/800x600/?coffee,cafe"
              alt="Кофейня"
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}