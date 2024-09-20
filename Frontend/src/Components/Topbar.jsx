import React, { useState } from 'react'
import {
	FaHome,
	FaCalendar,
	FaBriefcase,
	FaVideo,
	FaSearch,
	FaEnvelopeOpenText,
	FaUpload,
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
		<div className='bg-white text-gray-800 flex flex-col lg:flex-row justify-between items-center fixed w-full shadow-lg p-3'>
			<div className='flex items-center lg:mb-0'>
				<FaUserTie className='mr-2 h-8 w-6 text-blue-500' />
				<a
					href='/'
					className='text-xl font-extrabold'>
					NexusDEV
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
				className={`lg:flex lg:flex-row lg:space-x-6 font-semibold items-center ${
					isMobileMenuOpen ? 'flex flex-col space-y-2' : 'hidden'
				} transition-all duration-300 ease-in-out`}>
				{loggedIn ? (
					<>
						{/* Add any additional logged-in specific links here */}
					</>
				) : (
					<>
						<Link
							to='/home'
							className='flex items-center hover:text-blue-500 transition-colors'>
							<FaHome className='mr-2 text-xl' /> Home
						</Link>
					</>
				)}
				<Link
					to='/collegedetails'
					className='flex items-center hover:text-blue-500 transition-colors'>
					<FaBriefcase className='mr-2 text-xl' /> College 
				</Link>
				<Link
					to='/faculty-detail-analysis'
					className='flex items-center hover:text-blue-500 transition-colors'>
					<FaEnvelopeOpenText className='mr-2 text-xl' /> Faculty
				
				</Link>

				<Link
					to='/infrastructure-inspection'
					className='flex items-center hover:text-blue-500 transition-colors'>
					<FaVideo className='mr-2 text-xl ' />
					Inspection
				</Link>
				<Link
					to='/ml-analysis'
					className='flex items-center hover:text-blue-500 transition-colors'>
					<FaCalendar className='mr-2 text-xl' /> ML Analysis
				</Link>
				<Dropdown />

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
							className='border border-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors hover:shadow-lg'>
							Register
						</Link>
						<Link
							to='/login'
							className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium lg:mt-0 hover:shadow-lg'>
							Login
						</Link>
					</>
				)}
			</nav>
		</div>
	)
}
