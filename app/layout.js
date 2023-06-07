"use client"

import NavBar from '@/components/NavBar'
import './globals.css'
import WalletContext from '@/context/WalletContext'
import { useState } from 'react'

export const metadata = {
  title: 'Carbon Verifier',
  description: 'Verify, track and offset your carbon footprint.',
}

export default function RootLayout({ children }) {

  const [walletAddress, setWalletAddress] = useState('')
  const [walletIsConnected, setWalletIsConnected] = useState(false)

  return (
    <html lang="en" className='scroll-smooth;'>
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </head>
      <WalletContext.Provider value={{walletAddress, setWalletAddress, walletIsConnected, setWalletIsConnected}}>
      <body className='font-montserrat scroll-smooth'>
        <NavBar/>
        {children}
        </body>
      </WalletContext.Provider>
    </html>
  )
}
