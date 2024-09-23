import React from 'react'
const Loader = ({ text }) => {
	return (
		<div className='flex flex-row'>
			<div className='flex items-center'>
				<div className='animate-spin rounded-full h-5 w-5 border-t-4 border-b-4 border-white'></div>
				{text && <span className='ml-2 text-white'>{text}...</span>}
			</div>
		</div>
	)
}

export default Loader
