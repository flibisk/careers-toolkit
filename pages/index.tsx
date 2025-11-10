import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedBackground from '@/components/AnimatedBackground'
import TheatreForm from '@/components/TheatreForm'
import DownloadButton from '@/components/DownloadButton'
import PartnerLogos from '@/components/PartnerLogos'

export default function Home() {
  const [showContent, setShowContent] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    // Show content after initial triangle animations
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleFormSubmit = async (data: { role: string; organisation: string }) => {
    // ============================================
    // REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
    // To set up:
    // 1. Create a Google Sheet
    // 2. Go to Extensions > Apps Script
    // 3. Paste the provided script (see README.md)
    // 4. Deploy as Web App
    // 5. Copy the URL and paste it below
    // ============================================
    const GOOGLE_APPS_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'

    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role: data.role,
          organisation: data.organisation,
          timestamp: new Date().toISOString(),
        }),
      })

      // Note: With 'no-cors', we can't read the response
      // Assume success if no error is thrown
      console.log('Form data submitted:', data)
      setFormSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      // You might want to show an error message to the user
      // For now, we'll still proceed to download
      setFormSubmitted(true)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight font-atg-felix">
              Work in Theatre
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-theatre-teal mb-4 font-atg-felix">
              Careers Toolkit
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-light">
              Designed for Participants in Grades 9–12
            </p>
          </motion.div>

          {/* Partner Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={showContent ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <PartnerLogos />
          </motion.div>

          {/* Form or Download Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={showContent ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20"
          >
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  <TheatreForm onSubmit={handleFormSubmit} />
                </motion.div>
              ) : (
                <motion.div
                  key="download"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <DownloadButton />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={showContent ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-12 text-gray-400 text-sm"
          >
            <p>© 2025 ATG Entertainment Limited. All rights reserved.</p>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

