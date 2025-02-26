"use client"
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import React from 'react'

export default function page() {
  return (
    <>
      <Hero heading="Contact" banner="/img3.jpg" mobileBanner="/mob-contact.png" />
      <Contact />
    </>
  )
}
