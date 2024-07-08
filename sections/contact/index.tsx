'use client'

import Button from '@/components/button'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { ContactProps, FormData } from './types'
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from '@/components/icons'
import clsx from 'clsx'
import Overlay from '@/components/overlay'

const Contact = ({ isOpen = false, handleClose }: ContactProps) => {
  const [formStatus, setFormStatus] = useState<'success' | 'error' | 'loading'>()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    hiddenMessage: '',
  })

  const isLoading = formStatus === 'loading'
  const isSuccess = formStatus === 'success'
  const isError = formStatus === 'error'

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
    <>
      <section
        className={clsx(
          'fixed top-0 right-0 bottom-0 w-full lg:w-[500px] py-12 px-5 lg:py-32 md:px-12 bg-black text-white drop-shadow-2xl transition-transform z-20',
          { 'translate-x-full': !isOpen, 'translate-x-0': isOpen },
        )}
      >
        <div>
          <button onClick={handleClose} className="mb-4">
            <ArrowLeftIcon />
          </button>
          <h1 className="font-bold text-2xl md:text-4xl">Let&apos;s talk.</h1>
          <p className="mt-6">
            Don&apos;t hesitate to drop me a message whenever you need! Whether it&apos;s a question
            you have or you simply want to say hello, my inbox is always open, and I&apos;ll make
            sure to get back to you as soon as possible!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col mt-12">
          <label className="text-sm mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="rounded text-black px-2 h-10 mb-4 focus:outline-none"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label className="text-sm mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="rounded text-black px-2 h-10 mb-4 focus:outline-none"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id="hidden_message"
            name="hidden_message"
            value={formData.hiddenMessage}
            onChange={handleChange}
            style={{ display: 'none' }}
          />
          <label className="text-sm mb-2" htmlFor="message">
            Message:
          </label>
          <textarea
            className="rounded text-black p-2 h-32 focus:outline-none"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {isError && (
            <p className="px-4 py-2 mt-2 bg-red-500 text-xs rounded">
              On no, something went wrong. Please try again.
            </p>
          )}
          <div>
            <Button
              className="mt-6"
              type="submit"
              variant="dark"
              icon={isSuccess ? <CheckIcon /> : <ArrowRightIcon />}
            >
              {isLoading ? 'Sending' : isSuccess ? 'Message sent' : 'Send'}
            </Button>
          </div>
        </form>
      </section>
      <Overlay isShown={isOpen} handleClose={handleClose} />
    </>
  )
}

export default Contact
