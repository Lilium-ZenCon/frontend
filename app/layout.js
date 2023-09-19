'use client';

import NavBar from '@/components/NavBar';
import './globals.css';
import { MetaMaskProvider } from '../contexts/WalletContext';
import { useState } from 'react';

export default function RootLayout({ children }) {

	return (
		<html lang="en" className="scroll-smooth;">
			<head>
				<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
			</head>
			<MetaMaskProvider>
				<body className="font-montserrat scroll-smooth">
					<NavBar />
					{children}
				</body>
			</MetaMaskProvider>
		</html>
	);
}
