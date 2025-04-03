'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://source.unsplash.com/random/1920x1080?nature',
  'https://source.unsplash.com/random/1920x1080?city',
  'https://source.unsplash.com/random/1920x1080?technology',
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-screen mx-auto overflow-hidden rounded-lg shadow-lg">
      <motion.div
        key={current}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${images[current]})` }}
      />

      {/* Botões de Navegação */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#260707] text-white p-3 rounded-full"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#260707] text-white p-3 rounded-full"
      >
        &#8594;
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              current === index ? 'bg-[#BF9411]' : 'bg-[#A67926]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}