import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-6">
      <div className="max-w-2xl bg-base-100 shadow-lg rounded-xl p-8 space-y-6">
        <h1 className="text-4xl font-bold text-primary text-center">Contact Us</h1>
        <p className="text-base text-base-content text-center">
          Have questions, feedback, or issues? We'd love to hear from you!
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full h-32"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
