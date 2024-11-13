import React from 'react';

const Projects = () => {
  return (
    <section className="projects-section bg-gradient-to-r from-blue-100 to-purple-100 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Academic Projects</h2>
      <div className="projects-container max-w-4xl mx-auto space-y-8">
        <div className="project-item bg-gradient-to-r from-white to-blue-50 shadow-md p-6 rounded-md">
          <h3 className="text-xl font-semibold text-blue-700">Cloud Analytics and Data Warehouse Implementation for NYT Articles</h3>
          <p className="text-gray-700">January 2024 - May 2024</p>
          <ul className="list-disc list-inside text-gray-800 mt-4">
            <li>Built a cloud-based analytics system using AWS, MySQL, and Snowflake for processing over 1 million NYT article records.</li>
            <li>Created interactive dashboards in Power BI for real-time data visualization and insights.</li>
            <li>Executed complex SQL queries on large datasets using AWS Redshift for trend analysis.</li>
            <li>Designed ETL pipelines and automated data workflows with Apache Airflow.</li>
            <li>Performed sentiment analysis to classify article tone and applied t-tests and hypothesis testing to find significant statistical correlations in media trends.</li>
          </ul>
        </div>
        <div className="project-item bg-gradient-to-r from-white to-blue-50 shadow-md p-6 rounded-md">
          <h3 className="text-xl font-semibold text-blue-700">Cloud-Native Migration and Analysis of the Movie Database: A NoSQL Approach</h3>
          <p className="text-gray-700">January 2024 - May 2024</p>
          <ul className="list-disc list-inside text-gray-800 mt-4">
            <li>Migrated the Movie Database (TMDB) to a MongoDB cluster, optimizing data storage and retrieval for over 45,000 movies.</li>
            <li>Analyzed dataset to identify significant correlations and presented findings through visualizations and reports using MongoDB Atlas for decision-makers.</li>
          </ul>
        </div>
        <div className="project-item bg-gradient-to-r from-white to-blue-50 shadow-md p-6 rounded-md">
          <h3 className="text-xl font-semibold text-blue-700">An Exploratory Analysis using Power BI: Road Injuries In California (Dashboard)</h3>
          <p className="text-gray-700">January 2024 - May 2024</p>
          <ul className="list-disc list-inside text-gray-800 mt-4">
            <li>Conducted a detailed exploratory analysis of road injury data using Python.</li>
            <li>Visualized key trends and patterns across regions and demographics in Power BI, providing valuable insights.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
