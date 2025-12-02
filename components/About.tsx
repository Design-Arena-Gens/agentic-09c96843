"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a passionate Frontend Developer with 3 years of experience building modern,
              responsive web applications. My expertise lies in creating seamless user experiences
              using React and Angular frameworks.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Throughout my career, I've worked on diverse projects ranging from e-commerce platforms
              to enterprise dashboards, always focusing on clean code, performance optimization, and
              user-centric design.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm constantly learning and staying up-to-date with the latest frontend technologies
              and best practices to deliver cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
