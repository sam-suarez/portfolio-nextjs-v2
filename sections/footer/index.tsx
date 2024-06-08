import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-blue-200 py-4 md:py-6">
      <div className="mx-auto max-w-screen-lg px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-xs">Sam Suarez © 2024</p>
          <p className="text-xs mt-2">Built with Next.js and Tailwind CSS. Deployed on Vercel.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
