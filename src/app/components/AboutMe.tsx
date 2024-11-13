import React from 'react';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const aboutMeRef = useRef(null);

  useEffect(() => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <motion.section 
      ref={aboutMeRef}
      className="aboutme-section py-12 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <h2 className="text-4xl font-extrabold text-center mb-8 text-800">
        Hi, I'm Kalyani
      </h2>
      <div className="aboutme-container max-w-4xl mx-auto  shadow-lg p-8 rounded-md">
        <p className="text-gray-800 text-lg mb-6">
          I am a passionate data analytics graduate student at San Jose State University, with a solid background in human resources and data analysis. My journey began in HR, where I applied data-driven strategies to enhance workforce engagement and performance. During my time at Heaptrace Technology and Amazon, I focused extensively on employee performance data, delivering actionable insights that significantly influenced workforce management.
        </p>
        <p className="text-gray-800 text-lg mb-6">
          Currently, as a graduate student in data analytics, I am enhancing my skills in data engineering, cloud computing, and data visualization. I love working with tools like AWS, Python, Power BI, and Tableau to transform complex datasets into meaningful, actionable insights. My recent projects include building cloud-based analytics systems, conducting sentiment analysis, and visualizing data trends to enable better decision-making.
        </p>
        <p className="text-gray-800 text-lg">
          I am deeply passionate about leveraging technology to solve real-world problems and excited to work on data-driven projects that create a positive impact. When I'm not coding or analyzing data, you can find me exploring nature, practicing mindfulness, or experimenting with personal projects that combine creativity and technology.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutMe;