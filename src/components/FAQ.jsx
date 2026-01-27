import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is the trial class really free?",
      answer: "Yes, absolutely! Your first trial class is completely free with no credit card required. This allows your child to experience our teaching methods and facilities before making any commitment."
    },
    {
      question: "What safety measures do you have in place?",
      answer: "Safety is our top priority. All instructors are background-checked and certified. We maintain comprehensive insurance coverage, follow strict health protocols, and ensure proper supervision ratios. Our facility is equipped with CCTV cameras, first-aid stations, and emergency procedures."
    },
    {
      question: "What age groups do you accept?",
      answer: "We accept children from ages 4 to 16 years old. Different programs have specific age requirements: Dance (4-15), Taekwondo (5-16), Chess (7-16), Drama (6-14), Fitness (8-16), and Art (5-13). During registration, we'll help you find the perfect program for your child's age."
    },
    {
      question: "Can I cancel or change the program anytime?",
      answer: "Yes, we offer flexible cancellation and program transfer options. You can cancel with a month's notice, and we provide pro-rated refunds. Switching between programs is easy and can be done after consulting with our program coordinator."
    },
    {
      question: "What are the class timings and schedule?",
      answer: "We offer flexible timing options to fit your schedule. Most classes run between 3:30 PM to 7:00 PM on weekdays, with weekend batches available from 10:00 AM to 6:00 PM. Each program has specific days and times, which we'll share during your trial class."
    },
    {
      question: "How qualified are the instructors?",
      answer: "All our instructors hold national or international certifications in their respective fields. For Taekwondo, we have certified black belt instructors. Chess coaches are FIDE-certified. Dance and Drama instructors have professional performance backgrounds and teaching certifications. Average experience is 8+ years."
    },
    {
      question: "What is included in the fee?",
      answer: "Our fee includes all training sessions, equipment usage, progress reports, performance opportunities, certificate upon completion, and comprehensive insurance coverage. Uniforms for Taekwondo and competition fees are separate and optional."
    },
    {
      question: "How do you track my child's progress?",
      answer: "We provide regular progress reports every month, parent-teacher meetings quarterly, and real-time updates through our parent app. You'll receive feedback on skill development, behavior, attendance, and areas of improvement. We also conduct periodic assessments."
    },
    {
      question: "Can my child join multiple programs?",
      answer: "Absolutely! Many of our students participate in 2-3 programs. We offer combination discounts for multiple programs. We'll help create a schedule that doesn't overlap and ensures your child isn't overwhelmed."
    },
    {
      question: "What if my child doesn't like the program?",
      answer: "We have a 30-day satisfaction guarantee. If your child isn't happy within the first month, we'll work with you to switch programs or provide a full refund. Our goal is to find the right fit for every child."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-header">
          <span className="section-label">Frequently Asked Questions</span>
          <h2 className="section-title">
            Got Questions? We've Got Answers
          </h2>
          <p className="section-description">
            Everything you need to know about Move N Leap Academy. 
            Can't find the answer you're looking for? Give us a call!
          </p>
        </div>

        <div className="faq-container">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openIndex === index ? 'active' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <HelpCircle className="faq-icon" />
                  <span>{faq.question}</span>
                  <ChevronDown className={`chevron ${openIndex === index ? 'rotate' : ''}`} />
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="faq-cta-box">
            <div className="cta-box-content">
              <h3>Still Have Questions?</h3>
              <p>Our friendly team is here to help. Reach out and we'll get back to you within 24 hours.</p>
              <div className="cta-box-actions">
                <a href="tel:+919876543210" className="contact-btn phone">
                  📞 Call Us Now
                </a>
                <a href="https://wa.me/919876543210" className="contact-btn whatsapp">
                  💬 WhatsApp Chat
                </a>
              </div>
              <div className="cta-box-hours">
                <strong>Available:</strong> Mon-Sat, 9:00 AM - 7:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}