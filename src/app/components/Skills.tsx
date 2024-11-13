import React from 'react';

const Skills = () => {
  return (
    <section className="skills-section bg-gradient-to-r from-blue-100 to-purple-100 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Technical Skills</h2>
      <div className="skills-container max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="skills-category bg-gradient-to-r from-white to-blue-50 shadow-md p-6 rounded-md">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Programming</h3>
          <ul className="list-disc list-inside text-gray-800">
            <li>SQL</li>
            <li>Python</li>
            <li>R</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="skills-category bg-gradient-to-r from-white to-blue-50 shadow-md p-6 rounded-md">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Databases</h3>
          <ul className="list-disc list-inside text-gray-800">
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Snowflake</li>
          </ul>
        </div>
        <div className="skills-category bg-gradient-to-r from-white to-blue-50 shadow-md p-6 rounded-md">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">HRMS</h3>
          <ul className="list-disc list-inside text-gray-800">
            <li>PeopleSoft</li>
            <li>Keka</li>
            <li>SAP SuccessFactors</li>
          </ul>
        </div>
        <div className="skills-category bg-gradient-to-r from-white to-blue-50 shadow-md p-6 rounded-md">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Data Tools</h3>
          <ul className="list-disc list-inside text-gray-800">
            <li>Excel (VLOOKUP, Pivot Tables, Advanced Functions)</li>
            <li>Tableau</li>
            <li>Power BI</li>
          </ul>
        </div>
        <div className="skills-category bg-gradient-to-r from-white to-blue-50 shadow-md p-6 rounded-md">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Analytics Tools</h3>
          <ul className="list-disc list-inside text-gray-800">
            <li>Apache Airflow</li>
            <li>Hadoop</li>
            <li>Apache Spark</li>
          </ul>
        </div>
        <div className="skills-category bg-gradient-to-r from-white to-blue-50 shadow-md p-6 rounded-md">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Cloud Platforms</h3>
          <ul className="list-disc list-inside text-gray-800">
            <li>AWS (S3, Lambda, EC2, Redshift)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
