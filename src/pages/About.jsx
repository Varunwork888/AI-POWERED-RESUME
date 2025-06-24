import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-6">
      <div className="max-w-3xl bg-base-100 shadow-lg rounded-xl p-8 text-center space-y-6">
        <h1 className="text-4xl font-bold text-primary">About AI Resume Generator</h1>
        <p className="text-base text-base-content">
          Our AI-powered Resume Generator helps you create professional resumes with the help of advanced language models.
          Just enter a short description about your background and goals, and our system will generate a complete structured resume for you.
        </p>
        <p className="text-base text-base-content">
          Whether you're a fresher or a professional, our tool simplifies the resume-building process with smart formatting, keyword optimization, and industry-specific suggestions.
        </p>
      </div>
    </div>
  );
}
