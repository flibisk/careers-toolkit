import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TheatreFormProps {
  onSubmit: (data: { role: string; organisation: string }) => void
}

const TheatreForm = ({ onSubmit }: TheatreFormProps) => {
  const [role, setRole] = useState('')
  const [otherRole, setOtherRole] = useState('')
  const [organisation, setOrganisation] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const roleOptions = [
    'Teacher',
    'Careers Leader',
    'Guidance Counsellor',
    'Student',
    'School Administrator',
    'Employer',
    'Other',
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!role || !organisation) {
      alert('Please fill in all required fields')
      return
    }

    if (role === 'Other' && !otherRole.trim()) {
      alert('Please specify your role')
      return
    }

    setIsSubmitting(true)

    const finalRole = role === 'Other' ? otherRole : role

    await onSubmit({
      role: finalRole,
      organisation,
    })

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
          Access Your Toolkit
        </h3>
        <p className="text-gray-300 text-sm md:text-base">
          Please share a few details to download the careers toolkit
        </p>
      </div>

      {/* Role Dropdown */}
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-200 mb-2">
          Your Role <span className="text-theatre-pink">*</span>
        </label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:bg-white/25 backdrop-blur-sm"
          style={{ colorScheme: 'dark' }}
        >
          <option value="" className="bg-slate-800">
            Select your role
          </option>
          {roleOptions.map((option) => (
            <option key={option} value={option} className="bg-slate-800">
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Conditional "Other" Input */}
      <AnimatePresence>
        {role === 'Other' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <label htmlFor="otherRole" className="block text-sm font-medium text-gray-200 mb-2">
              Please specify your role <span className="text-theatre-pink">*</span>
            </label>
            <input
              type="text"
              id="otherRole"
              value={otherRole}
              onChange={(e) => setOtherRole(e.target.value)}
              placeholder="Enter your role"
              required={role === 'Other'}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:bg-white/25 backdrop-blur-sm"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Organisation Input */}
      <div>
        <label htmlFor="organisation" className="block text-sm font-medium text-gray-200 mb-2">
          School, Organisation or Business Name <span className="text-theatre-pink">*</span>
        </label>
        <input
          type="text"
          id="organisation"
          value={organisation}
          onChange={(e) => setOrganisation(e.target.value)}
          placeholder="Enter organisation name"
          required
          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:bg-white/25 backdrop-blur-sm"
        />
      </div>

      {/* Privacy Notice */}
      <div className="bg-theatre-blue/20 border border-theatre-blue/40 rounded-lg p-4">
        <p className="text-xs text-gray-300 leading-relaxed">
          <strong className="text-white">Privacy Notice:</strong> We only collect your role and organisation 
          name to understand who is using this resource. This is to help us improve it for future iterations. 
          No personal data such as names or email addresses are collected.
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full relative overflow-hidden text-white font-semibold py-4 px-6 rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300"
        style={{
          background: 'linear-gradient(90deg, #a680f7 0%, #5a00ff 50%, #a680f7 100%)',
          backgroundSize: '200% 100%',
          backgroundPosition: '0% 0%',
          transition: 'background-position 0.6s ease, transform 0.3s ease',
        }}
        onMouseEnter={(e) => {
          if (!isSubmitting) {
            e.currentTarget.style.backgroundPosition = '100% 0%'
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundPosition = '0% 0%'
        }}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Submitting...
          </span>
        ) : (
          'Continue to Download'
        )}
      </button>
    </form>
  )
}

export default TheatreForm

