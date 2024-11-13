import React from 'react';

const Education = () => {
  return (
    <section className="education-section bg-gradient-to-r from-blue-100 to-purple-100 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Education</h2>
      <div className="education-container max-w-4xl mx-auto space-y-8">
        <div className="education-item bg-gradient-to-r from-white to-blue-50 shadow-md p-6 rounded-md">
          <h3 className="text-xl font-semibold text-blue-700">MS in Data Analytics</h3>
          <p className="text-gray-800">San Jose State University, California, USA</p>
          <p className="text-gray-600">January 2024 - Present | GPA: 3.56</p>
        </div>
        <div className="education-item bg-gradient-to-r from-white to-blue-50 shadow-md p-6 rounded-md">
          <h3 className="text-xl font-semibold text-blue-700">MBA in Human Resource</h3>
          <p className="text-gray-800">IFEEL Institute of Management, Lonavala, India</p>
          <p className="text-gray-600">July 2019 - May 2021</p>
        </div>
        <div className="education-item bg-gradient-to-r from-white to-blue-50 shadow-md p-6 rounded-md">
          <h3 className="text-xl font-semibold text-blue-700">BEng in Electronics & Telecommunication</h3>
          <p className="text-gray-800">North Maharashtra University, India</p>
          <p className="text-gray-600">July 2016 - June 2019</p>
        </div>
      </div>
    </section>
  );
};

export default Education;