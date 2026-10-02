'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { validateContactForm } from '@/lib/validations';
import { ContactFormData } from '@/types';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    // Use mailto link for quick implementation
    const subject = `Portfolio Contact: ${formData.subject}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:${SOCIAL_LINKS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-[#F3F4F6] md:text-4xl">
          Get In Touch
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="border-[#1A2130] bg-[#121721]">
            <CardHeader>
              <CardTitle className="text-[#F3F4F6]">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#F3F4F6]">
                    Name <span className="text-[#EF4444]">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    required
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-[#EF4444]" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#F3F4F6]">
                    Email <span className="text-[#EF4444]">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    required
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-[#EF4444]" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-[#F3F4F6]">
                    Subject <span className="text-[#EF4444]">*</span>
                  </label>
                  <Select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="job-opportunity">Job Opportunity</option>
                    <option value="freelance-project">Freelance Project</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </Select>
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-sm text-[#EF4444]" role="alert">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#F3F4F6]">
                    Message <span className="text-[#EF4444]">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    maxLength={1000}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                    required
                  />
                  <p id="message-hint" className="mt-1 text-xs text-[#6B7280]">
                    {formData.message.length}/1000 characters
                  </p>
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-[#EF4444]" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Honeypot field for spam protection */}
                <input
                  type="text"
                  name="website"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <Button
                  type="submit"
                  className="w-full"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send via Email
                </Button>

                {submitStatus === 'success' && (
                  <p className="text-center text-sm text-[#10B981]" role="status">
                    Email client opened! Please send the message to complete.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-center text-sm text-[#EF4444]" role="alert">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-[#1A2130] bg-[#121721]">
              <CardHeader>
                <CardTitle className="text-[#F3F4F6]">Other Ways to Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="flex items-center gap-3 rounded-lg border border-[#1A2130] bg-[#0A0D12] p-4 transition-colors hover:border-[#10B981] hover:bg-[#1A2130]"
                >
                  <Mail className="h-5 w-5 text-[#10B981]" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-[#F3F4F6]">Email</p>
                    <p className="text-sm text-[#9CA3AF]">shashank@example.com</p>
                  </div>
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-[#1A2130] bg-[#0A0D12] p-4 transition-colors hover:border-[#10B981] hover:bg-[#1A2130]"
                >
                  <Linkedin className="h-5 w-5 text-[#10B981]" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-[#F3F4F6]">LinkedIn</p>
                    <p className="text-sm text-[#9CA3AF]">Connect professionally</p>
                  </div>
                </a>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-[#1A2130] bg-[#0A0D12] p-4 transition-colors hover:border-[#10B981] hover:bg-[#1A2130]"
                >
                  <Github className="h-5 w-5 text-[#10B981]" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-[#F3F4F6]">GitHub</p>
                    <p className="text-sm text-[#9CA3AF]">View my code</p>
                  </div>
                </a>
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-[#1A2130] bg-[#0A0D12] p-4 transition-colors hover:border-[#10B981] hover:bg-[#1A2130]"
                >
                  <Twitter className="h-5 w-5 text-[#10B981]" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-[#F3F4F6]">Twitter</p>
                    <p className="text-sm text-[#9CA3AF]">Follow for updates</p>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
