import React from 'react';
import { getLoggedIn } from '../services/authService';
import NotLoggedIn from './helper/NotLoggedIn';
import './CollegeDetails.css';

function CollegeDetails() {
  const loggedIn = getLoggedIn();

  const college = {
    name: 'R.M.K. Engineering College',
    address: '123 College Road, Chennai, India',
    dateOfEstablishment: '1995',
    principalName: 'Mr. Junaid Mohammed',
    enrollment: {
      2021: 2000,
      2022: 2200,
      2023: 2500,
    },
    faculty: {
      totalStaff: 80,
      principal: 1,
      vicePrincipal: 1,
      lecturers: 60,
      seniorLecturers: 18,
    },
    library: {
      totalStaff: 5,
      librarian: 1,
      assistantLibrarian: 2,
    },
    academicPerformance: {
      highSchoolPassPercentage: '96%',
      degreePassPercentage: '92%',
    },
    selfAssessmentReports: 'Available upon request.',
    studentSatisfaction: '90% of students are satisfied with the college.',
    collegeReputation: 'One of the top engineering colleges in the region.',
    raggingIncidents: 'No ragging incidents reported.',
    fundsRecovered: {
      lastTwoYears: '₹10,00,000',
    },
    fundsSpent: {
      sports: '₹4,00,000',
      library: '₹2,00,000',
      youthFestivals: '₹1,00,000',
      coCurricular: '₹2,50,000',
    },
  };

  return (
    <div className="college-details-container">
      {loggedIn ? (
        <div className="college-details-content">
          <h2 className="college-name">{college.name}</h2>
          <div className="college-info">
            <p><strong>Address:</strong> {college.address}</p>
            <p><strong>Date of Establishment:</strong> {college.dateOfEstablishment}</p>
            <p><strong>Principal:</strong> {college.principalName}</p>
          </div>

          <h3 className="section-title">Enrollment</h3>
          <ul className="info-list">
            {Object.entries(college.enrollment).map(([year, count]) => (
              <li key={year}>{year}: <span className="highlight">{count}</span> students</li>
            ))}
          </ul>

          <h3 className="section-title">Faculty Details</h3>
          <div className="info-details">
            <p><strong>Total Teaching Staff:</strong> {college.faculty.totalStaff}</p>
            <p><strong>Principal:</strong> {college.faculty.principal}</p>
            <p><strong>Vice Principal:</strong> {college.faculty.vicePrincipal}</p>
            <p><strong>Lecturers:</strong> {college.faculty.lecturers}</p>
            <p><strong>Senior Lecturers:</strong> {college.faculty.seniorLecturers}</p>
          </div>

          <h3 className="section-title">Library Details</h3>
          <div className="info-details">
            <p><strong>Total Library Staff:</strong> {college.library.totalStaff}</p>
            <p><strong>Librarian:</strong> {college.library.librarian}</p>
            <p><strong>Assistant Librarians:</strong> {college.library.assistantLibrarian}</p>
          </div>

          <h3 className="section-title">Academic Performance</h3>
          <div className="info-details">
            <p><strong>High School Pass Percentage:</strong> {college.academicPerformance.highSchoolPassPercentage}</p>
            <p><strong>Degree Pass Percentage:</strong> {college.academicPerformance.degreePassPercentage}</p>
          </div>

          <h3 className="section-title">Self-Assessment Reports</h3>
          <p>{college.selfAssessmentReports}</p>

          <h3 className="section-title">Student Satisfaction</h3>
          <p>{college.studentSatisfaction}</p>

          <h3 className="section-title">College Reputation</h3>
          <p>{college.collegeReputation}</p>

          <h3 className="section-title">Ragging Incidents</h3>
          <p>{college.raggingIncidents}</p>

          <h3 className="section-title">Funds Recovered from Students</h3>
          <p><strong>Last Two Years:</strong> {college.fundsRecovered.lastTwoYears}</p>

          <h3 className="section-title">Funds Spent on Activities</h3>
          <p><strong>Sports:</strong> {college.fundsSpent.sports}</p>
          <p><strong>Library:</strong> {college.fundsSpent.library}</p>
          <p><strong>Youth Festivals:</strong> {college.fundsSpent.youthFestivals}</p>
          <p><strong>Co-Curricular Activities:</strong> {college.fundsSpent.coCurricular}</p>
        </div>
      ) : (
        <NotLoggedIn />
      )}
    </div>
  );
}

export default CollegeDetails;
