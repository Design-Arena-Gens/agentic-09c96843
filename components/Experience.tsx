"use client";

import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description: "Leading frontend development using React and Next.js. Implemented micro-frontend architecture and improved performance by 40%.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations",
      period: "2022 - 2023",
      description: "Developed enterprise web applications using Angular. Collaborated with UX team to implement responsive designs.",
      technologies: ["Angular", "RxJS", "NgRx", "SCSS"],
    },
    {
      title: "Junior Frontend Developer",
      company: "StartUp Hub",
      period: "2021 - 2022",
      description: "Built interactive user interfaces with React. Worked on multiple client projects and learned best practices.",
      technologies: ["React", "Redux", "JavaScript", "CSS"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-8 border-l-4 border-primary pl-6"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {exp.title}
                </h3>
                <p className="text-lg text-primary font-semibold mb-2">
                  {exp.company}
                </p>
                <p className="text-gray-600 mb-3">{exp.period}</p>
                <p className="text-gray-700 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
