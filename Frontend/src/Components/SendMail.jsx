import React, { useState } from 'react'
import { Row, Col, Form, Button, Card, Alert, Spinner } from 'react-bootstrap'
import './FacultyDetailsAnalysis.css'
const staffNames = [
	'Alice Johnson',
	'Bob Smith',
	'Charlie Brown',
	'Diana Prince',
	'Edward Nygma',
	'Fiona Gallagher',
	'George Martin',
	'Hannah Baker',
	'Ian Malcolm',
	'Julia Roberts',
	'Kevin Spacey',
	'Laura Croft',
	'Michael Scott',
	'Nancy Drew',
	'Oliver Twist',
	'Peter Parker',
	'Quinn Fabray',
	'Rachel Green',
	'Sam Winchester',
	'Tina Fey',
	'Uma Thurman',
	'Victor Frankenstein',
	'Will Smith',
	'Xena Warrior',
	'Yoda',
	'Zoe Saldana'
]

const getRandomAnalysis = () => {
	const analyses = [
		'Positive: All data is structured and well-professionalized.',
		"Negative: Expected qualifications like PhD/Master's degree are missing.",
		'Improvement Area: Consider providing more detailed training records.'
	]
	return analyses[Math.floor(Math.random() * analyses.length)]
}

const AnalysisInfoCard = () => {
	return (
		<Card className='mb-4 p-3 shadow'>
			<Card.Title className='text-center'>
				<span
					className='emoji'
					role='img'
					aria-label='Analysis Overview'>
					📊
				</span>
				NLP Analysis Overview
			</Card.Title>
			<Card.Body>
				<p>
					The NLP analysis assesses faculty data based on various
					parameters to ensure compliance with AICTE standards.
				</p>
				<h5>
					<span
						className='emoji'
						role='img'
						aria-label='Positive'>
						✅
					</span>
					Requirements for Positive Analysis:
				</h5>
				<ul>
					<li>Structured data in the provided PDF format.</li>
					<li>
						All faculty members must have relevant qualifications
						listed.
					</li>
					<li>
						Comprehensive records of training and professional
						development.
					</li>
				</ul>
				<h5>
					<span
						className='emoji'
						role='img'
						aria-label='Negative'>
						❌
					</span>
					Negative Findings:
				</h5>
				<ul>
					<li>
						Missing expected qualifications such as PhD or Master's
						degree.
					</li>
					<li>Inconsistent data formatting.</li>
					<li>Lack of detailed training records.</li>
				</ul>
				<h5>
					<span
						className='emoji'
						role='img'
						aria-label='Recommendations'>
						💡
					</span>
					Recommendations:
				</h5>
				<ul>
					<li>Standardize the data format for easier processing.</li>
					<li>
						Ensure all faculty qualifications are accurately listed.
					</li>
					<li>
						Include more detailed training information for each
						faculty member.
					</li>
				</ul>
			</Card.Body>
		</Card>
	)
}

function FacultyDetailsAnalysis() {
	const [selectedFile, setSelectedFile] = useState(null)
	const [loading, setLoading] = useState(false)
	const [analysisResults, setAnalysisResults] = useState([])

	const handleFileChange = e => {
		setSelectedFile(e.target.files[0])
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setLoading(true)
		setAnalysisResults([])

		await new Promise(resolve => setTimeout(resolve, 5000))

		const results = staffNames.map(name => ({
			name,
			prediction: getRandomAnalysis()
		}))

		setAnalysisResults(results)
		setLoading(false)
		setSelectedFile(null)
	}

	return (
		<section
			className='flex space-x-2 w-11/12 flex-col '
			style={{ margin: 'auto' }}>
			<section className='flex space-x-2 flex-col items-center lg:flex-row'>
				<span>
					<h1 className='text-center m-2'>
						Faculty Details Analysis
					</h1>
					<AnalysisInfoCard />
				</span>
				<span>
					<p className='text-center mb-4'>
						Provide all faculty details in a single PDF as per the
						format required by AICTE. Ensure the document contains
						all necessary information.
					</p>
					<Form
						onSubmit={handleSubmit}
						className='mb-5 p-4 bg-light shadow-lg rounded'>
						<Form.Group controlId='formFile'>
							<Form.Label>Choose PDF File</Form.Label>
							<Form.Control
								type='file'
								accept='application/pdf'
								onChange={handleFileChange}
								required
							/>
						</Form.Group>
						<Button
							type='submit'
							variant='primary'
							className='mt-3 w-100'>
							Analyze Faculty Details
						</Button>
					</Form>
				</span>
			</section>
			{loading && (
				<Alert
					variant='info'
					className='text-center'>
					<Spinner
						animation='border'
						role='status'
					/>
					<span className='ms-2'>
						Processing your PDF, please wait...
					</span>
				</Alert>
			)}
			{analysisResults.length > 0 && (
				<div className='mt-5'>
					<h2 className='text-center mb-4'>NLP Analysis Results</h2>
					<Row>
						{analysisResults.map((result, index) => (
							<Col
								md={4}
								key={index}
								className='mb-4'>
								<Card className='border-light shadow-sm rounded result-card'>
									<Card.Body>
										<Card.Title className='text-center'>
											{result.name}
										</Card.Title>
										<Card.Text className='text-center'>
											<strong>{result.prediction}</strong>
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</div>
			)}
		</section>
	)
}

export default FacultyDetailsAnalysis
