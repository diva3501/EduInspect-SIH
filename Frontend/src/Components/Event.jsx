import React, { useState } from 'react'
import { Row, Col, Form, Button, Card, Alert, Spinner } from 'react-bootstrap'
import './MachineLearningAnalysis.css' // Import custom CSS for additional styling

function MachineLearningAnalysis() {
	const [selectedImages, setSelectedImages] = useState([])
	const [mlResults, setMlResults] = useState([])
	const [showSuccess, setShowSuccess] = useState(false)
	const [loading, setLoading] = useState(false)
	const [feedbacks, setFeedbacks] = useState({})

	const handleImageChange = e => {
		const files = Array.from(e.target.files)
		setSelectedImages(files)
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setLoading(true)
		setShowSuccess(false)
		setMlResults([])

		await new Promise(resolve => setTimeout(resolve, 5000))

		const results = selectedImages.map(image => ({
			name: image.name,
			src: URL.createObjectURL(image),
			prediction: `Prediction: ${
				Math.random() > 0.5 ? 'Positive' : 'Negative'
			}`,
			mlAnalysis: getRandomAnalysis()
		}))

		setMlResults(results)
		setShowSuccess(true)
		setLoading(false)
		setSelectedImages([])
	}

	const getRandomAnalysis = () => {
		const analyses = [
			'The image demonstrates strong engagement from students during the lecture.',
			'The photo showcases a well-organized event with significant participation.',
			'This image highlights effective collaboration among students on a project.',
			'The image indicates a successful outreach event with community involvement.',
			'The analysis shows the effective use of technology in a classroom setting.'
		]
		return analyses[Math.floor(Math.random() * analyses.length)]
	}

	const handleFeedbackChange = (index, value) => {
		setFeedbacks({ ...feedbacks, [index]: value })
	}

	return (
		<section
			className='container flex flex-col lg:flex-row justify-center items-center lg:space-x-6'
			style={{ minHeight: '78vh' }}>
			<span>
				<h1 className='text-center mb-4'>Machine Learning Analysis</h1>

				<Form
					onSubmit={handleSubmit}
					className='mb-5 p-4 bg-light shadow-lg rounded'>
					<Form.Group controlId='formImages'>
						<Form.Label>Select Images for Analysis</Form.Label>
						<Form.Control
							type='file'
							multiple
							accept='image/*'
							onChange={handleImageChange}
							required
						/>
					</Form.Group>
					<Button
						type='submit'
						variant='primary'
						className='mt-3 w-100'>
						Analyze Images
					</Button>
				</Form>
				{loading && (
					<Alert
						variant='info'
						className='text-center'>
						<Spinner
							animation='border'
							role='status'
						/>
						<span className='ms-2'>
							Please wait, ML analysis is on the way...
						</span>
					</Alert>
				)}

				{showSuccess && (
					<Alert
						variant='success'
						className='text-center '>
						Images analyzed successfully!
					</Alert>
				)}
			</span>
			<span>
				{mlResults.length > 0 && (
					<div className='m-1'>
						<h2 className='text-center text-2xl shadow'>
							Analysis Results
						</h2>
						<Row>
							{mlResults.map((result, index) => (
								<Col
									md={4}
									key={index}
									className='w-full'>
									<Card className='border-light shadow-sm rounded result-card'>
										<Card.Img
											variant='top'
											src={result.src}
											className='result-image'
										/>
										<Card.Body>
											<Card.Title className='text-center'>
												{result.name}
											</Card.Title>
											<Card.Text className='text-center'>
												<strong>
													{result.prediction}
												</strong>
											</Card.Text>
											<Card.Text className='text-center'>
												<strong>ML Analysis:</strong>{' '}
												{result.mlAnalysis}
											</Card.Text>
											<Form.Group
												controlId={`feedback${index}`}>
												<Form.Label>
													Your Feedback
												</Form.Label>
												<Form.Control
													as='textarea'
													rows={3}
													value={
														feedbacks[index] || ''
													}
													onChange={e =>
														handleFeedbackChange(
															index,
															e.target.value
														)
													}
													placeholder='Provide your feedback here...'
												/>
											</Form.Group>
										</Card.Body>
									</Card>
								</Col>
							))}
						</Row>
					</div>
				)}
			</span>
		</section>
	)
}

export default MachineLearningAnalysis
