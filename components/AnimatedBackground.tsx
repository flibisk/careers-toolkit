import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Triangle {
  id: number
  size: number
  left: string
  top: string
  delay: number
  duration: number
  color: string
  imageNumber: number
}

const AnimatedBackground = () => {
  // New color palette from user specifications
  const colors = [
    '#a680f7', // purple
    '#5a00ff', // dark purple
    '#d2bffa', // light purple
    '#c3f000', // lime green
    '#e5f78f', // light yellow-green
    '#e2919c', // pink/salmon
    '#000000', // black
  ]

  // Randomly assign colors and images to triangles
  const triangles: Triangle[] = [
    { id: 1, size: 200, left: '10%', top: '15%', delay: 0, duration: 20, color: colors[0], imageNumber: 1 },
    { id: 2, size: 160, left: '85%', top: '25%', delay: 0.3, duration: 25, color: colors[1], imageNumber: 2 },
    { id: 3, size: 180, left: '5%', top: '70%', delay: 0.6, duration: 22, color: colors[2], imageNumber: 3 },
    { id: 4, size: 170, left: '75%', top: '80%', delay: 0.9, duration: 28, color: colors[3], imageNumber: 4 },
    { id: 5, size: 150, left: '50%', top: '10%', delay: 0.2, duration: 24, color: colors[4], imageNumber: 5 },
    { id: 6, size: 190, left: '90%', top: '60%', delay: 0.5, duration: 26, color: colors[5], imageNumber: 6 },
    { id: 7, size: 165, left: '30%', top: '85%', delay: 0.8, duration: 23, color: colors[6], imageNumber: 7 },
    { id: 8, size: 175, left: '60%', top: '40%', delay: 0.4, duration: 21, color: colors[0], imageNumber: 8 },
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {triangles.map((triangle) => (
        <motion.div
          key={triangle.id}
          className="absolute"
          style={{
            left: triangle.left,
            top: triangle.top,
            width: triangle.size,
            height: triangle.size,
          }}
          initial={{ 
            opacity: 0, 
            scale: 0,
            x: -100,
          }}
          animate={{ 
            opacity: [0, 1, 1, 0.8],
            scale: [0, 1, 1.05, 1],
            x: [-100, 0, 10, 0],
            rotate: [0, 0, 5, 0],
          }}
          transition={{
            duration: 2,
            delay: triangle.delay,
            times: [0, 0.5, 0.75, 1],
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: triangle.duration,
          }}
        >
          <div className="relative w-full h-full">
            {/* Background image */}
            <div 
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(50% 5%, 95% 95%, 5% 95%)',
                backgroundImage: `url(/images/${triangle.imageNumber}.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.6,
              }}
            />
            {/* Color overlay */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full absolute inset-0"
              style={{ mixBlendMode: 'multiply' }}
            >
              <polygon
                points="50,5 95,95 5,95"
                fill={triangle.color}
                fillOpacity="0.7"
                stroke={triangle.color}
                strokeWidth="2"
                strokeOpacity="0.9"
              />
            </svg>
          </div>
        </motion.div>
      ))}

      {/* Additional geometric shapes - circles and squares */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(166, 128, 247, 0.15) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24"
        style={{
          background: 'linear-gradient(45deg, rgba(195, 240, 0, 0.15) 0%, rgba(226, 145, 156, 0.15) 100%)',
          transform: 'rotate(45deg)',
        }}
        animate={{
          rotate: [45, 90, 45],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  )
}

export default AnimatedBackground

