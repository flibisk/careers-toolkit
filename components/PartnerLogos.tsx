import { motion } from 'framer-motion'

const PartnerLogos = () => {
  const logoImages = [
    { name: 'ATG Entertainment', src: '/images/logos/ATG-entertainment-white.png', alt: 'ATG Entertainment Logo' },
    { name: 'Get Into Theatre', src: '/images/logos/Get-in-to-theatre.png', alt: 'Get Into Theatre Logo' },
    { name: 'ATG Creative Learning', src: '/images/logos/ATG-Creative-Learning-logo.png', alt: 'ATG Creative Learning Logo' },
    { name: 'Arts Council', src: '/images/logos/art-council.png', alt: 'Arts Council Logo' },
  ]

  return (
    <div className="w-full">
      <motion.p
        className="text-center text-gray-400 text-sm mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        In Partnership With
      </motion.p>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {logoImages.map((logo, index) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex items-center ${
              logo.name === 'Arts Council' 
                ? 'h-20 md:h-32' 
                : 'h-16 md:h-24'
            }`}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-full w-auto object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default PartnerLogos

