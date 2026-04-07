"use client"

import { useEffect, useRef, useState } from "react"

interface TextEffectProps {
  text: string
  hoverText?: string
  href?: string
  className?: string
  as?: "h1" | "div"
}

export function TextGlitch({ text, hoverText, href, className = "", as: Tag = "h1" }: TextEffectProps) {
  const textRef = useRef<HTMLElement>(null)
  const spanRef = useRef<HTMLSpanElement>(null)
  const [displayText] = useState(text)
  const [displayHoverText, setDisplayHoverText] = useState(hoverText || text)
  const hoverIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const isScrollActiveRef = useRef(false)

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  const scramble = (target: string, setter: (v: string) => void, intervalRef: React.MutableRefObject<NodeJS.Timeout | null>) => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    let iteration = 0
    intervalRef.current = setInterval(() => {
      setter(
        target.split("").map((_, index) => {
          if (index < iteration) return target[index]
          return letters[Math.floor(Math.random() * 26)]
        }).join("")
      )
      if (iteration >= target.length) {
        clearInterval(intervalRef.current!)
        setter(target)
      }
      iteration += 1 / 3
    }, 30)
  }

  const showOverlay = () => {
    if (spanRef.current) {
      spanRef.current.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    }
    if (hoverText) scramble(hoverText, setDisplayHoverText, hoverIntervalRef)
  }

  const hideOverlay = () => {
    if (hoverIntervalRef.current) clearInterval(hoverIntervalRef.current)
    setDisplayHoverText(hoverText || text)
    if (spanRef.current) {
      spanRef.current.style.clipPath = "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)"
    }
  }

  // Scroll: activa el overlay al primer scroll y lo mantiene hasta volver al top
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 30

      if (scrolled && !isScrollActiveRef.current) {
        isScrollActiveRef.current = true
        showOverlay()
      } else if (!scrolled && isScrollActiveRef.current) {
        isScrollActiveRef.current = false
        hideOverlay()
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hoverText, text])

  const handleMouseEnter = () => {
    if (!isScrollActiveRef.current) showOverlay()
  }

  const handleMouseLeave = () => {
    // Si el scroll está activo, no ocultar el overlay al salir con el ratón
    if (!isScrollActiveRef.current) hideOverlay()
  }

  useEffect(() => {
    return () => {
      if (hoverIntervalRef.current) clearInterval(hoverIntervalRef.current)
      if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current)
    }
  }, [])

  const spanContent = hoverText ? (
    href ? (
      <a href={href} target="_blank" rel="noreferrer" className="no-underline text-inherit">
        {displayHoverText}
      </a>
    ) : (
      displayHoverText
    )
  ) : (
    text
  )

  return (
    <Tag
      ref={textRef as React.RefObject<HTMLHeadingElement & HTMLDivElement>}
      className={`
        font-bold leading-none tracking-tight m-0
        flex flex-col items-start justify-center relative
        cursor-pointer
        overflow-hidden
        ${className}
      `}
      style={{
        width: "100%",
        maxWidth: "100vw",
        wordBreak: "break-word",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText}
      <span
        ref={spanRef}
        className="
          absolute w-full h-full
          text-[#e8ddd0] font-bold
          flex flex-col justify-center
          pointer-events-none
          overflow-hidden
        "
        style={{
          clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
          transition: "clip-path 0.4s ease-out",
          transformOrigin: "center",
          backgroundColor: "#c41e3a",
          maxWidth: "100%",
          whiteSpace: "nowrap",
        }}
      >
        {spanContent}
      </span>
    </Tag>
  )
}
