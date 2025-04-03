'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTree, FaCity, FaMicrochip } from 'react-icons/fa';

const slides = [
  { icon: <FaTree className="text-[#400C0C] text-9xl" />, label: "Natureza" },
  { icon: <FaCity className="text-[#400C0C] text-9xl" />, label: "Cidade" },
  { icon: <FaMicrochip className="text-[#400C0C] text-9xl" />, label: "Tecnologia" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-100 rounded-lg shadow-lg">
      <motion.div
        key={current}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        {slides[current].icon}
        <span className="mt-4 text-2xl font-semibold">{slides[current].label}</span>
      </motion.div>

      {/* Botões de Navegação */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#260707] text-white p-3 rounded-full hover:bg-[#BF9411]"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#260707] text-white p-3 rounded-full hover:bg-[#BF9411]"
      >
        &#8594;
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              current === index ? 'bg-[#A67926]' : 'bg-[#A67926]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
