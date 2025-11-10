import { motion } from 'framer-motion'
import { useState } from 'react'

const DownloadButton = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="text-center space-y-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border-4 border-green-500">
            <svg
              className="w-10 h-10 text-green-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
          Thank You!
        </h3>
        <p className="text-gray-300 mb-8 text-sm md:text-base">
          Your response has been recorded. Download your careers toolkit below.
        </p>

        {/* Download Button */}
        <a
          href="/WorkinTheatre.pdf"
          download="Work-In-Theatre-Careers-Toolkit.pdf"
          className="inline-flex items-center justify-center gap-3 relative overflow-hidden text-white font-semibold py-4 px-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
          style={{
            background: 'linear-gradient(90deg, #a680f7 0%, #5a00ff 50%, #a680f7 100%)',
            backgroundSize: '200% 100%',
            backgroundPosition: isHovered ? '100% 0%' : '0% 0%',
            transition: 'background-position 0.6s ease, transform 0.3s ease',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          Download the Careers Toolkit
        </a>

        <p className="text-gray-400 text-xs mt-6">
          PDF document • Designed for grades 9-12
        </p>
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 pt-8 border-t border-white/20"
      >
        <p className="text-gray-300 text-sm">
          Need help or have questions? Feel free to reach out to your program coordinator.
        </p>
      </motion.div>
    </div>
  )
}

export default DownloadButton

