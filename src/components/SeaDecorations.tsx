import React from 'react';

const SeaDecorations = () => {
  return (
    <>
      {/* Floating Submarines */}
      <div className="absolute top-1/4 left-0 animate-[swim_20s_linear_infinite] pointer-events-none z-0">
        <div className="text-2xl md:text-4xl opacity-15 hover:opacity-30 transition-opacity duration-300">
          🚢
        </div>
      </div>
      
      <div className="absolute top-3/4 right-0 animate-[swim-reverse_25s_linear_infinite] pointer-events-none z-0">
        <div className="text-3xl md:text-5xl opacity-20 hover:opacity-40 transition-opacity duration-300">
          ⚓
        </div>
      </div>

      {/* Treasure and Jewels */}
      <div className="absolute bottom-1/3 left-1/4 animate-[gentle-bob_12s_ease-in-out_infinite] pointer-events-none z-0">
        <div className="text-2xl md:text-4xl opacity-25 hover:opacity-50 transition-opacity duration-300">
          💎
        </div>
      </div>
      
      <div className="absolute top-1/2 right-1/3 animate-[gentle-bob_8s_ease-in-out_infinite_2s] pointer-events-none z-0">
        <div className="text-xl md:text-3xl opacity-20 hover:opacity-40 transition-opacity duration-300">
          🏴‍☧️
        </div>
      </div>

      {/* Pearls scattered */}
      <div className="absolute top-1/3 left-1/6 animate-[float_6s_ease-in-out_infinite] pointer-events-none z-0">
        <div className="text-lg md:text-2xl opacity-30 hover:opacity-60 transition-opacity duration-300">
          🔮
        </div>
      </div>
      
      <div className="absolute bottom-1/4 right-1/6 animate-[float_8s_ease-in-out_infinite_1s] pointer-events-none z-0">
        <div className="text-xl md:text-3xl opacity-25 hover:opacity-50 transition-opacity duration-300">
          ⚱️
        </div>
      </div>

      {/* Little Mermaids */}
      <div className="absolute top-2/3 left-1/3 animate-[sway_10s_ease-in-out_infinite] pointer-events-none z-0">
        <div className="text-2xl md:text-4xl opacity-20 hover:opacity-40 transition-opacity duration-300">
          🧜‍♀️
        </div>
      </div>
      
      <div className="absolute top-1/5 right-1/4 animate-[sway_14s_ease-in-out_infinite_3s] pointer-events-none z-0">
        <div className="text-xl md:text-3xl opacity-15 hover:opacity-35 transition-opacity duration-300">
          🧜‍♂️
        </div>
      </div>

      {/* Treasure Boxes */}
      <div className="absolute bottom-1/5 left-1/5 animate-[gentle-bob_16s_ease-in-out_infinite_1s] pointer-events-none z-0">
        <div className="text-2xl md:text-4xl opacity-25 hover:opacity-50 transition-opacity duration-300">
          📦
        </div>
      </div>
      
      <div className="absolute bottom-2/3 right-1/5 animate-[gentle-bob_18s_ease-in-out_infinite_2s] pointer-events-none z-0">
        <div className="text-xl md:text-3xl opacity-20 hover:opacity-40 transition-opacity duration-300">
          🗝️
        </div>
      </div>

      {/* Sea Creatures */}
      <div className="absolute top-1/4 left-2/3 animate-[swim_22s_linear_infinite] pointer-events-none z-0">
        <div className="text-2xl md:text-4xl opacity-15 hover:opacity-30 transition-opacity duration-300">
          🐠
        </div>
      </div>
      
      <div className="absolute bottom-1/2 left-1/2 animate-[tentacle-wave_12s_ease-in-out_infinite] pointer-events-none z-0">
        <div className="text-xl md:text-3xl opacity-20 hover:opacity-40 transition-opacity duration-300">
          🐙
        </div>
      </div>

      {/* Floating Bubbles */}
      <div className="absolute top-1/6 left-1/4 animate-[float_4s_ease-in-out_infinite] pointer-events-none z-0">
        <div className="w-3 h-3 bg-cyan-300/20 rounded-full"></div>
      </div>
      
      <div className="absolute bottom-1/6 right-1/3 animate-[float_5s_ease-in-out_infinite_1.5s] pointer-events-none z-0">
        <div className="w-4 h-4 bg-blue-400/25 rounded-full"></div>
      </div>
      
      <div className="absolute top-2/3 right-2/3 animate-[float_3s_ease-in-out_infinite_0.5s] pointer-events-none z-0">
        <div className="w-2 h-2 bg-teal-300/30 rounded-full"></div>
      </div>

      {/* Coral Decorations */}
      <div className="absolute bottom-1/4 left-2/3 animate-[sway_8s_ease-in-out_infinite] pointer-events-none z-0">
        <div className="text-lg md:text-2xl opacity-25 hover:opacity-45 transition-opacity duration-300">
          🪸
        </div>
      </div>
    </>
  );
};

export default SeaDecorations;