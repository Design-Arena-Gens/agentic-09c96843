"use client";

import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform with cart, checkout, and payment integration.",
      technologies: ["React", "Next.js", "Stripe", "Tailwind CSS"],
      image: "🛒",
    },
    {
      title: "Task Management Dashboard",
      description: "Project management tool with drag-and-drop functionality and real-time updates.",
      technologies: ["Angular", "RxJS", "Firebase", "Material UI"],
      image: "📊",
    },
    {
      title: "Social Media App",
      description: "Social networking platform with posts, comments, likes, and user profiles.",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      image: "💬",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with forecasts and interactive maps.",
      technologies: ["React", "TypeScript", "OpenWeather API", "Leaflet"],
      image: "🌤️",
    },
    {
      title: "Portfolio Builder",
      description: "Drag-and-drop portfolio website builder with customizable templates.",
      technologies: ["Angular", "NgRx", "SCSS", "AWS S3"],
      image: "🎨",
    },
    {
      title: "Fitness Tracker",
      description: "Mobile-responsive fitness tracking app with workout plans and progress charts.",
      technologies: ["React", "Chart.js", "PWA", "IndexedDB"],
      image: "💪",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              >
                <div className="p-6">
                  <div className="text-6xl mb-4 text-center">{project.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-100 text-secondary text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
