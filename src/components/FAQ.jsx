import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What age groups do you cater to?",
      answer: "Move N Leap welcomes children aged 4-16 years. We have age-appropriate classes for different skill levels, ensuring every child gets the attention and challenges they need to grow."
    },
    {
      question: "What activities do you offer?",
      answer: "We offer a variety of engaging activities including Taekwondo, Dance (various styles), Drama & Theatre, Chess, Art & Crafts, and more. Each program is designed to build confidence, creativity, and critical thinking skills."
    },
    {
      question: "What are your class timings?",
      answer: "Our classes run after school hours, typically from 3:30 PM to 7:00 PM on weekdays, and 9:00 AM to 5:00 PM on weekends. We offer flexible scheduling to accommodate different family needs."
    },
    {
      question: "How do I enroll my child?",
      answer: "Simply book a free trial class through our website or contact us directly. After the trial, you can choose a suitable program and complete the enrollment process. We'll guide you through every step!"
    },
    {
      question: "What is your fee structure?",
      answer: "We offer flexible pricing plans including monthly, quarterly, and annual subscriptions. Fees vary based on the program and frequency of classes. Contact us for detailed pricing information and any ongoing promotions."
    },
    {
      question: "Do you provide transportation?",
      answer: "Yes, we offer safe and reliable transportation services for students within designated areas. Our vehicles are GPS-tracked and supervised by trained staff to ensure your child's safety."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <div className="faq-icon-wrapper">
            <HelpCircle className="faq-icon" />
          </div>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Got questions? We've got answers! Find everything you need to know about Move N Leap.
          </p>
        </div>

        {/* FAQ Items */}
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
                <span>{faq.question}</span>
                <ChevronDown className={`faq-chevron ${openIndex === index ? 'rotate' : ''}`} />
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <div className="faq-answer-content">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="faq-cta">
          <p className="faq-cta-text">Still have questions?</p>
          <button className="faq-cta-button">
            Contact Us →
          </button>
        </div>
      </div>
    </section>
  );
}