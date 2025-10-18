import React from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function Layout() {
	return (
		<div>
			<Navbar />

			<main className='flex flex-col justify-center items-center overflow-hidden w-full'>
				<Outlet />
			</main>

			<Footer />
		</div>
	)
}
