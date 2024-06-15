'use client'

import Button from '@/components/button'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined'
import { FormData } from './types'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/animations'

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'success' | 'error' | 'loading'>()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    hiddenMessage: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    setFormStatus('loading')

    if (formData.hiddenMessage) {
      return
    }

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    if (response.ok) {
      setFormStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } else {
      setFormStatus('error')
    }
  }

  return (
    <section
      className="min-h-[700px] h-[calc(100vh-73px-64px)] md:h-[calc(100vh-73px-84px)] flex justify-center flex-col"
      id="contact"
    >
      <motion.div
        className="grid md:grid-cols-2 md:gap-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
      >
        <div>
          <motion.h1 variants={fadeIn} className="font-bold text-2xl md:text-4xl">
            Let&apos;s talk<span className="text-yellow">.</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="mt-2 max-w-2xl">
            Don&apos;t hesitate to drop me a message whenever you need! Whether it&apos;s a question
            you have or you simply want to say hello, my inbox is always open, and I&apos;ll make
            sure to get back to you as soon as possible!
          </motion.p>
        </div>
        {formStatus === 'success' ? (
          <p className="mt-24 md:mt-0 mx-auto text-2xl font-bold self-center">Sent. 🚀</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col mt-6 md:mt-0">
            <motion.label variants={fadeIn} className="text-sm" htmlFor="name">
              Name:
            </motion.label>
            <motion.input
              variants={fadeIn}
              className="rounded-lg px-2 h-10 text-black mb-4 focus:outline-none"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <motion.label variants={fadeIn} className="text-sm" htmlFor="email">
              Email:
            </motion.label>
            <motion.input
              variants={fadeIn}
              className="rounded-lg px-2 h-10 text-black mb-4 focus:outline-none"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <motion.input
              variants={fadeIn}
              type="text"
              id="hidden_message"
              name="hidden_message"
              value={formData.hiddenMessage}
              onChange={handleChange}
              style={{ display: 'none' }}
            />
            <motion.label variants={fadeIn} className="text-sm" htmlFor="message">
              Message:
            </motion.label>
            <motion.textarea
              variants={fadeIn}
              className="rounded-lg p-2 text-black h-32 focus:outline-none"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <motion.div variants={fadeIn}>
              <Button
                className="bg-blue text-white mt-6"
                icon={formStatus === 'loading' ? '' : <ArrowRightAltOutlinedIcon />}
                type="submit"
              >
                {formStatus === 'loading' ? 'Sending...' : 'Send'}
              </Button>
            </motion.div>
          </form>
        )}
      </motion.div>
    </section>
  )
}

export default Contact
