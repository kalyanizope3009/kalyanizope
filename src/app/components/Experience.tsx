import React from 'react';

const Experience = () => {
  return (
    <section className="experience-section bg-gradient-to-r from-blue-100 to-purple-100 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Work Experience</h2>
      <div className="experience-container max-w-4xl mx-auto space-y-8">
        <div className="experience-item bg-gradient-to-r from-white to-blue-50 shadow-md p-6 rounded-md">
          <h3 className="text-xl font-semibold text-blue-700">Heaptrace Technology - Human Resources Executive</h3>
          <p className="text-gray-700">March 2021 - August 2022 | Pune, India</p>
          <ul className="list-disc list-inside text-gray-800 mt-4">
            <li>Responded to ad hoc data and insight requests by monitoring and analyzing training progress for over 150 employees using TalentLMS and Excel (pivot tables, VLOOKUP).</li>
            <li>Participated in all phases of performance data analysis, from data collection and visualization to creating actionable insights with Power BI, which improved employee engagement by 15%.</li>
            <li>Collaborated with management to address workforce challenges, utilizing data insights to develop KPIs and optimize resource allocation, reducing reporting time.</li>
            <li>Conducted statistical analysis on performance review data for 200+ employees, presenting findings to leadership to improve training programs.</li>
            <li>Partnered with cross-functional teams to enhance stakeholder collaboration, improving data accuracy and ensuring actionable reporting for better decision-making.</li>
          </ul>
        </div>
        <div className="experience-item bg-gradient-to-r from-white to-blue-50 shadow-md p-6 rounded-md">
          <h3 className="text-xl font-semibold text-blue-700">Amazon - HR Assistant</h3>
          <p className="text-gray-700">October 2020 - February 2021 | Pune, India</p>
          <ul className="list-disc list-inside text-gray-800 mt-4">
            <li>Managed attendance and leave records for a workforce of 500+ employees using PeopleSoft, ensuring data accuracy and contributing to efficient payroll processing.</li>
            <li>Resolved over 100 time and attendance issues within strict deadlines using troubleshooting methods, improving operational efficiency.</li>
            <li>Collaborated with HR teams to ensure compliance and data accuracy, facilitating better resolution of time-related issues.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;