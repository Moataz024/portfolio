import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section className="py-20 px-4 bg-gray-900" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Contact</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={20} />
                <a href="mailto:moataz.foudhaili@esprit.tn" className="hover:text-blue-400 transition-colors">
                  moataz.foudhaili@esprit.tn
                </a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}