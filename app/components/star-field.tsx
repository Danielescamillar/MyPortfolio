'use client'

import { useEffect, useRef } from 'react'

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars: { x: number; y: number; radius: number; vx: number; vy: number }[] = []
    const numStars = 100
    const maxStarRadius = 2

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * maxStarRadius,
        vx: Math.random() * 0.2 - 0.1,
        vy: Math.random() * 0.2 - 0.1
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'

      stars.forEach(star => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()

        star.x += star.vx
        star.y += star.vy

        if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx
        if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />
}
