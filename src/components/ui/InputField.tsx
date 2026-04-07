"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface InputFieldProps {
  id: string
  name: string
  label: string
  placeholder: string
  type?: "text" | "email" | "textarea"
  required?: boolean
}

export function InputField({ id, name, label, placeholder, type = "text", required = false }: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHasValue(e.target.value.length > 0)
  }

  const inputClass = `
    w-full bg-[rgba(26,12,14,0.85)] backdrop-blur-sm
    border-2 transition-all duration-300 ease-out
    text-[rgba(232,221,208,0.9)] font-mono text-sm
    px-4 py-3 placeholder:text-[rgba(232,221,208,0.4)]
    focus:outline-none resize-none
    ${isFocused
      ? "border-[#c41e3a] shadow-[0_0_20px_rgba(196,31,58,0.35)]"
      : hasValue
        ? "border-[rgba(196,31,58,0.5)]"
        : "border-[rgba(196,31,58,0.25)]"
    }
  `

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <label
        htmlFor={id}
        className="block text-xs sm:text-sm font-mono tracking-[0.2em] text-[rgba(232,221,208,0.72)] uppercase mb-3"
      >
        {label}
      </label>
      <div className="relative">
        {type === "textarea" ? (
          <motion.textarea
            id={id}
            name={name}
            required={required}
            rows={5}
            placeholder={placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleChange}
            whileFocus={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className={`${inputClass} rounded-[10px]`}
          />
        ) : (
          <motion.input
            type={type}
            id={id}
            name={name}
            required={required}
            placeholder={placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className={`${inputClass} rounded-[10px]`}
          />
        )}
        {isFocused && (
          <motion.div
            className="absolute -bottom-1 left-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#c41e3a] to-transparent"
            initial={{ width: 0, x: "-50%" }}
            animate={{ width: "100%", x: "-50%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        )}
      </div>
    </motion.div>
  )
}