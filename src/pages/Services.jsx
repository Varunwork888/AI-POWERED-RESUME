import React from "react";
import { FaMagic, FaFileAlt, FaCode, FaLaptop, FaRobot } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaMagic className="text-primary text-2xl" />,
      title: "AI Resume Generation",
      description: "Generate smart, job-ready resumes using your personal description.",
    },
    {
      icon: <FaFileAlt className="text-primary text-2xl" />,
      title: "Modern Resume Design",
      description: "Get professionally formatted resumes with clean layouts.",
    },
    {
      icon: <FaCode className="text-primary text-2xl" />,
      title: "JSON Export",
      description: "Export your resume data in JSON format for developers or integration.",
    },
    {
      icon: <FaLaptop className="text-primary text-2xl" />,
      title: "Simple UI",
      description: "Enjoy a clean, distraction-free interface that’s easy to use.",
    },
    {
      icon: <FaRobot className="text-primary text-2xl" />,
      title: "Powered by Gemini & Spring Boot",
      description: "Fast backend built with Google Gemini and Spring Boot for AI power.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-6 py-10">
      <div className="max-w-4xl w-full bg-base-100 shadow-2xl rounded-xl p-10">
        <h1 className="text-4xl font-bold text-primary text-center mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-primary rounded-lg p-6 hover:shadow-md hover:bg-primary hover:text-white transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                {service.icon}
                <h2 className="text-xl font-semibold">{service.title}</h2>
              </div>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
