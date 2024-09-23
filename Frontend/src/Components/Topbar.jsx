import React, { useState } from 'react'
import {
	FaHome,
	FaCalendar,
	FaBriefcase,
	FaVideo,
	FaEnvelopeOpenText,
	FaBars,
	FaTimes,
	FaUserTie
} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getLoggedIn } from '../services/authService'
import { logout } from '../features/authSlice'
import Dropdown from './helper/Dropdown'

export default function Topbar() {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
	const loggedIn = getLoggedIn()
	const dispatch = useDispatch()

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen)
	}

	return (
		<div className='bg-white text-gray-800 flex flex-row justify-between items-center fixed w-screen shadow-lg p-2'>
			<div className='flex items-center'>
				<FaUserTie className='mr-2 h-8 w-6 text-blue-500' />
				<a
					href='/'
					className='text-xl font-extrabold'>
					EduInspect AI
				</a>
			</div>

			{/* Hamburger icon for mobile */}
			<div
				className='lg:hidden cursor-pointer'
				onClick={toggleMobileMenu}>
				{isMobileMenuOpen ? (
					<FaTimes className='text-2xl text-gray-800' />
				) : (
					<FaBars className='text-2xl text-gray-800' />
				)}
			</div>

			<nav
				className={`lg:flex lg:flex-row lg:space-x-2 font-medium lg:items-center gap-x-2 ${
					isMobileMenuOpen
						? 'flex flex-col space-y-2 absolute right-0 bg-white top-10'
						: 'hidden'
				} transition-all duration-300 ease-in-out`}>
				{loggedIn ? (
					<>
						{/* Add any additional logged-in specific links here */}
					</>
				) : (
					<>
						<Link
							to='/home'
							className='flex items-center hover:text-blue-500 transition-colors'
							onClick={isMobileMenuOpen && toggleMobileMenu}>
							<FaHome className='mr-2 text-xl' />
							Home
						</Link>
					</>
				)}
				<Link
					to='/collegedetails'
					className='flex items-center hover:text-blue-500 transition-colors'
					onClick={isMobileMenuOpen && toggleMobileMenu}>
					<FaBriefcase className='mr-2 text-xl' />
					Details
				</Link>
				<Link
					to='/faculty-detail-analysis'
					className='flex items-center hover:text-blue-500 transition-colors'
					onClick={isMobileMenuOpen && toggleMobileMenu}>
					<FaEnvelopeOpenText className='mr-2 text-xl' />
					Faculty
				</Link>

				<Link
					to='/infrastructure-inspection'
					className='flex items-center hover:text-blue-500 transition-colors'
					onClick={isMobileMenuOpen && toggleMobileMenu}>
					<FaVideo className='mr-2 text-xl' />
					Inspection
				</Link>
				<Link
					to='/ml-analysis'
					className='flex items-center hover:text-blue-500 transition-colors'
					onClick={isMobileMenuOpen && toggleMobileMenu}>
					<FaCalendar className='mr-2 text-xl' />
					ML Analysis
				</Link>
				<Dropdown menu={setMobileMenuOpen} />

				{loggedIn ? (
					<NavLink
						onClick={() => {
							dispatch(logout())
						}}
						className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors'>
						Logout
					</NavLink>
				) : (
					<>
						<Link
							to='/register'
							className='border border-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors hover:shadow-lg'
							onClick={isMobileMenuOpen && toggleMobileMenu}>
							Register
						</Link>
						<Link
							to='/login'
							className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium lg:mt-0 hover:shadow-lg'
							onClick={isMobileMenuOpen && toggleMobileMenu}>
							Login
						</Link>
					</>
				)}
			</nav>
		</div>
	)
}
