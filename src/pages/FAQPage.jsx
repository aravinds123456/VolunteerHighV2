import { useState } from 'react';
import NavBar from '../components/NavBar';
import { linkify } from '../components/linkify';
import './FAQPage.css';

import React, { useEffect } from 'react';



  

const FAQ_ITEMS = [
  {
    question: "Is VolunteerHigh Free?",
    answer: "Yes! VolunteerHigh is a completely free tool that can be used by anybody in Arizona."
  },
  {
    question: "Do I have to sign up to use VolunteerHigh?",
    answer: "No. VolunteerHigh requires no sign ups, though some opportunities require an account or aplication."
  },
  {
    question: "What organizations is VolunteerHigh partnered with?",
    answer: "VolunteerHigh is partnered with 8 organizations across the valley as of now."
  },
  {
    question: "Can I use VolunteerHigh in California?",
    answer: "No. VolunteerHigh is currently a platform designed only for students in Arizona."
  },
  {
    question: "How can I contact VolunteerHigh",
    answer: "Email VolunteerHighSupport@gmail.com"
  },
  {
    question: "Where can I contact the organizations?",
    answer: "Here are our following partner organizations, and their contact information:\n\nArizona State Parks and Trails:\nPhone: (602) 542-7152\nEmail: crichards@azstateparks.gov\n\nHandsOnGreaterPhoenix:\nMain: 602.973.2212\nEmail: info@handsonphoenix.org\n\nCity of Flagstaff:\nEmail: Blake.Commisso@flagstaffaz.gov\n\nJunior Achievement of Arizona:\nEmail: taylors@jaaz.org\n\nFeed My Starving Children:\nEmail: info@fmsc.org\n\nArizona Sustainability Alliance:\nEmail: info@azsustain.org\n\nBureau of Land Management:\nEmail: elitchfield@az.go\n\nLost Our Home Pet Rescue:\nEmail: Volunteering@lostourhome.org"
  }
];

function FAQRow({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-row">
      <button className="faq-question-row" onClick={() => setIsOpen(o => !o)}>
        <span>{question}</span>
        <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <p className="faq-answer">{linkify(answer)}</p>}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="faq-page">
      <NavBar current="faq" />
      <div className="faq-scroll">
        <div className="faq-inner">
          <div className="faq-divider-row">
            <div className="rule" />
            <span className="label">FAQ's</span>
            <div className="rule" />
          </div>

          {FAQ_ITEMS.map((item, i) => (
            <FAQRow key={i} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
