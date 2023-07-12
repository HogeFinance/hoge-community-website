import React, { useState } from 'react';
import './FAQ.scss';
import faqItems from './faqItems';


const FAQ = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  return (
    <div className='faq-divs'>
      {faqItems.map((item, index) => (
        <div key={index}>
          <div
            className="faq-item"
            onClick={() => handleItemClick(index)}
          >
            <h3>{item.question} 
                <span>{expandedItem === index ? ' -' : ' +'}</span>
            </h3>
            
          </div>
          {expandedItem === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
