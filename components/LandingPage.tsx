'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
const LandingPage = () => {
  const Router = useRouter()
  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0] flex flex-col">
      {/* Header */}
      <header className="p-4 flex justify-between items-center bg-[#1F1F1F] shadow-lg">
        <div className="flex gap-3 items-center">
          <Image
            src="/chat.png"
            alt="Logo"
            width={30}
            height={30}
            className="rounded-full"
          />
          <h1 className="text-lg font-semibold">ChatStream</h1>
        </div>
        <button
          onClick={() => Router.push('/Login')}
          className="px-6 py-2 rounded-md bg-[#BB86FC] text-[#121212] hover:bg-[#8c2eff] text-sm transition duration-300"
        >
          Get Started
        </button>
      </header>
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center py-16 px-4 bg-[#1E1E1E]">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Welcome to ChatStream
        </h2>
        <p className="text-lg mb-8 text-gray-300">
          Your go-to platform for seamless and secure communication.
        </p>
        <button
          onClick={() => Router.push('/Login')}
          className="bg-green-500 text-[#121212] px-6 py-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          Join Now
        </button>
      </section>
      {/* Features Section */}
      {/* <section className="py-16 px-4 bg-[#2A2A2A]">
        <h3 className="text-3xl font-bold text-center mb-8 text-white">
          Features
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="max-w-xs bg-[#1F1F1F] p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold mb-4 text-green-400">
              Real-Time Messaging
            </h4>
            <p className="text-gray-300">
              Communicate with your friends instantly with our fast and secure
              messaging system.
            </p>
          </div>
          <div className="max-w-xs bg-[#1F1F1F] p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold mb-4 text-green-400">
              File Sharing
            </h4>
            <p className="text-gray-300">
              Share files easily and securely with built-in file sharing
              functionality.
            </p>
          </div>
          <div className="max-w-xs bg-[#1F1F1F] p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold mb-4 text-green-400">
              Customizable Themes
            </h4>
            <p className="text-gray-300">
              Personalize your experience with customizable themes to suit your
              style.
            </p>
          </div>
        </div>
      </section> */}
      {/* Footer */}
      <footer className="p-4 bg-[#121212] text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} ChatStream. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
export default LandingPage
