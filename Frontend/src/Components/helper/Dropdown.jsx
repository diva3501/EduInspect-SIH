import React, { useState, useRef } from 'react'
import {
	FaAngleDown,
	FaExternalLinkSquareAlt,
	FaUniversity
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Dropdown = ({ menu }) => {
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef(null)

	const openDropdown = () => {
		setIsOpen(true)
	}

	const closeDropdown = () => {
		setIsOpen(false)
	}

	const handleOptionClick = () => {
		closeDropdown()
		menu(false)
	}

	const handleMouseEnter = () => {
		openDropdown()
	}

	const handleMouseLeave = () => {
		const isHovered = dropdownRef.current.matches(':hover')
		if (!isHovered) {
			closeDropdown()
		}
	}

	return (
		<div
			className='relative inline-block text-left'
			onMouseEnter={handleMouseEnter}>
			<div>
				<button
					type='button'
					className='flex items-center focus:outline-none'
					onClick={() => setIsOpen(!isOpen)}>
					<FaUniversity className='mr-1' />
					<span>University</span>
					<FaAngleDown className='mr-1 mt-1' />
				</button>

				{isOpen && (
					<div
						ref={dropdownRef}
						className='origin-top-right absolute left-0 mt-3 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1'
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}>
						<div
							role='menu'
							aria-orientation='vertical'
							aria-labelledby='options-menu'
							onMouseLeave={handleMouseLeave}
							className='text-gray-700'>
							<Link
								to='/newsletter'
								className='block w-full py-2 text-sm hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
								onClick={handleOptionClick}>
								News & Notices
							</Link>
							<Link
								to='/feedback'
								className='block w-full py-2 text-sm hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
								onClick={handleOptionClick}>
								Feedback
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Dropdown
