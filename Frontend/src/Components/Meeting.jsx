import React, { useState } from 'react'
import { getLoggedIn } from '../services/authService'
import { Link } from 'react-router-dom'
import './VideoConference.css'

const VideoConference = () => {
	const loggedIn = getLoggedIn()
	const [images, setImages] = useState([])
	const [showNotificationPopup, setShowNotificationPopup] = useState(false)

	const handleImageChange = event => {
		const files = Array.from(event.target.files)
		setImages(prevImages => [...prevImages, ...files])
	}

	const handleSubmit = () => {
		// Logic to handle image submission
		console.log('Images submitted:', images)
		setShowNotificationPopup(true)

		// Hide notification after 5 seconds and reload the page
		setTimeout(() => {
			setShowNotificationPopup(false)
			window.location.reload()
		}, 5000)
	}

	return (
		<div
			className='container flex items-center justify-center mb-2'
			style={{ minHeight: '78vh' }}>
			{loggedIn ? (
				<div className='card p-4'>
					<h2 className='text-2xl font-semibold text-gray-900 mb-4'>
						Upload Conference Images
					</h2>

					<div className='mb-4'>
						<div className='instruction-card p-4 bg-blue-100 rounded-lg shadow-md'>
							<h3 className='text-lg font-semibold mb-2'>
								Instructions
							</h3>
							<ul className='list-disc list-inside text-gray-700'>
								<li>
									📌 Please upload relevant images for the
									conference.
								</li>
								<li>
									📌 You can select multiple images at once.
								</li>
								<li>
									📌 After selecting, you'll be able to
									preview the images before submission.
								</li>
								<li>
									📌 Ensure that the images are clear and
									represent your work effectively.
								</li>
							</ul>
						</div>
					</div>

					<input
						type='file'
						multiple
						onChange={handleImageChange}
						className='mt-2 mb-4'
					/>

					<div className='image-preview mb-4'>
						{images.map((image, index) => (
							<img
								key={index}
								src={URL.createObjectURL(image)}
								alt='Preview'
								className='img-fluid mb-2'
								style={{
									width: '100%',
									maxHeight: '200px',
									objectFit: 'cover'
								}}
							/>
						))}
					</div>

					<button
						className='btn btn-primary w-full'
						onClick={handleSubmit}>
						Submit Images
					</button>

					{showNotificationPopup && (
						<div className='fixed inset-0 flex items-center justify-center bg-opacity-75 bg-gray-800'>
							<div className='bg-white p-6 rounded-lg shadow-lg text-center'>
								<h3 className='text-lg font-semibold mb-2 text-green-600'>
									Submitted Successfully!
								</h3>
								<p className='text-gray-700'>
									Your images have been submitted. The page
									will reload shortly.
								</p>
							</div>
						</div>
					)}
				</div>
			) : (
				<div className='text-center'>
					<h1 className='text-4xl font-bold text-gray-900 mb-6'>
						You're Not Logged In
					</h1>
					<p className='text-gray-600 mb-6'>
						Please log in to access the image upload feature.
					</p>
					<Link
						to='/login'
						className='btn btn-dark'>
						Login
					</Link>
				</div>
			)}
		</div>
	)
}

export default VideoConference
