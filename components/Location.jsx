'use client'
import React, { useState } from 'react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const categories = [
  {
    label: 'Strategic Connectivity',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18M3 6h18M3 18h18" />
      </svg>
    ),
    items: [
      { place: 'Mumbai–Pune Expressway (NH-48)', time: '2–3 Mins' },
      { place: 'Bhumkar Chowk', time: '2–3 Mins' },
      { place: 'EON IT Park', time: '2–3 Mins' },
      { place: 'Hinjewadi IT Park (Phase 1)', time: '5 Mins' },
    ],
  },
  {
    label: 'Schools & Education',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    items: [
      { place: 'Akshara International School', time: '2 Mins' },
      { place: 'Indira National School & College', time: '5 Mins' },
      { place: 'JSPM College of Engineering', time: '7 Mins' },
      { place: 'VIBGYOR High School', time: '10 Mins' },
    ],
  },
  {
    label: 'Leisure & Entertainment',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
    items: [
      { place: 'Vision One Mall', time: '3 Mins' },
      { place: 'Reliance Smart Wakad', time: '5 Mins' },
      { place: 'D-Mart Wakad', time: '8 Mins' },
      { place: 'Phoenix Mall of the Millennium', time: '12 Mins' },
    ],
  },
  {
    label: 'Hospitals & Healthcare',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    items: [
      { place: 'Lifepoint Multispecialty Hospital', time: '5 Mins' },
      { place: 'Aditya Birla Memorial Hospital', time: '10 Mins' },
      { place: 'Ruby Hall Clinic (Hinjewadi)', time: '12 Mins' },
      { place: 'Surya Mother & Child Hospital', time: '8–10 Mins' },
    ],
  },
]


const Location = () => {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="location" style={{
      padding: '56px 0',
      background: '#f8f9fa',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M24 2 L46 24 L24 46 L2 24 Z' fill='none' stroke='%23e5e7eb' stroke-width='0.5'/%3E%3C/svg%3E")`,
      backgroundSize: '48px 48px',
      borderBottom: '1px solid #e5e7eb',
    }}>
      <div className="container mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div style={{ marginBottom: '36px', textAlign: 'center' }} data-aos="fade-up">
          <span style={{
            display: 'inline-block', padding: '4px 16px',
            background: 'var(--color-teal-bg)', borderRadius: '50px',
            fontSize: '11px', fontWeight: '700', color: 'var(--color-teal)',
            fontFamily: F_JOST, letterSpacing: '0.1em', textTransform: 'uppercase',
            border: '1px solid var(--color-teal-light)', marginBottom: '10px',
          }}>Wakad, Pune</span>
          <h2 style={{
            fontFamily: F_JOST, fontWeight: '800', fontSize: '26px',
            color: '#111827', margin: '0 0 6px', letterSpacing: '-0.01em',
          }}>
            Location{' '}
            <span style={{ color: 'var(--color-teal)' }}>Advantages</span>
          </h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--color-teal), var(--color-teal-light))', borderRadius: '2px', margin: '8px auto 12px' }} />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* LEFT — Accordion */}
          <div className="w-full lg:w-[45%]" data-aos="fade-right">
            <div style={{
              background: '#fff',
              borderRadius: '16px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              border: '1px solid #f0f0f0',
              overflow: 'hidden',
            }}>
              {/* Dark Header */}
              <div style={{ background: '#2d2d2d', padding: '16px 20px' }}>
                <p style={{
                  fontFamily: F_JOST, fontSize: '13px', fontWeight: '700',
                  color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0,
                }}>
                  Prime Location &amp; Connectivity
                </p>
              </div>

              {/* Accordion Items */}
              {categories.map((cat, idx) => {
                const isOpen = openIdx === idx
                return (
                  <div key={idx} style={{ borderBottom: idx < categories.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                    {/* Header row */}
                    <button
                      onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                      style={{
                        width: '100%', textAlign: 'left', border: 'none', cursor: 'pointer',
                        padding: '14px 20px',
                        background: isOpen ? 'var(--color-teal-bg)' : '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        gap: '10px', transition: 'all 0.25s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{
                          color: isOpen ? 'var(--color-teal)' : '#9ca3af',
                          display: 'flex', alignItems: 'center', transition: 'color 0.25s',
                          flexShrink: 0,
                        }}>
                          {cat.icon}
                        </span>
                        <span style={{
                          fontFamily: F_JOST, fontSize: '13px', fontWeight: '700',
                          color: isOpen ? 'var(--color-teal)' : '#374151',
                          transition: 'color 0.25s',
                        }}>
                          {cat.label}
                        </span>
                      </div>
                      <svg
                        width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke={isOpen ? 'var(--color-teal)' : '#9ca3af'}
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        style={{ flexShrink: 0, transition: 'transform 0.3s ease, stroke 0.25s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    {/* Expandable content */}
                    <div style={{
                      maxHeight: isOpen ? '300px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.35s ease',
                      background: '#fafafa',
                    }}>
                      <ul style={{ padding: '10px 20px 14px 20px', margin: 0, listStyle: 'none' }}>
                        {cat.items.map((item, i) => (
                          <li key={i} style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            gap: '12px', padding: '6px 0',
                            borderBottom: i < cat.items.length - 1 ? '1px dashed #e5e7eb' : 'none',
                          }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span style={{
                                width: '6px', height: '6px', borderRadius: '50%',
                                background: 'var(--color-teal)', flexShrink: 0,
                              }} />
                              <span style={{
                                fontFamily: F_SANS, fontSize: '13px', color: '#4b5563',
                                fontWeight: '500', lineHeight: 1.6,
                              }}>
                                {item.place}
                              </span>
                            </div>
                            <span style={{
                              fontFamily: F_SANS, fontSize: '12px', color: 'var(--color-teal-dark)',
                              fontWeight: '700', whiteSpace: 'nowrap', flexShrink: 0,
                            }}>
                              {item.time}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="w-full lg:flex-1" data-aos="fade-left" style={{ minHeight: '420px' }}>
            <div style={{
              borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 8px 32px var(--color-shadow-inner)',
              border: '2px solid var(--color-teal)',
              height: '100%', minHeight: '420px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, var(--color-teal), var(--color-teal-light))', zIndex: 10,
              }} />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.1927373079957!2d73.73720487519387!3d18.610398782500656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbd33e5dc623%3A0x2e2ee50e3195da00!2sKohinoor%20Courtyard%20One%20-%20Wakad!5e0!3m2!1sen!2sin!4v1777541812322!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', zIndex: 10,
                background: 'var(--color-teal)', opacity: 0.9, backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{
                  color: '#fff', fontSize: '11px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.04em'
                }}>
                  Wakad, Pune
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
