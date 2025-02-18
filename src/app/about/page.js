"use client"
import About from '@/components/About'
import Hero from '@/components/Hero'
import React from 'react'

export default function page() {
  return (
    <>
      <Hero heading="About" banner="/img2.jpg" />
      <About />
    </>
  )
}
