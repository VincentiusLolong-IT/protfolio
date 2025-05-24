'use client';

import React from 'react';
import styles from './button.module.css';

interface Button64Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button64: React.FC<Button64Props> = ({ children }) => {
  const handleClick = () => {
    const email = 'vincentjobacc23@gmail.com';
    const subject = 'Job Opportunity Inquiry - [Company Name]';
    const body = `Dear [Your Name],

I hope this message finds you well.

My name is [Recruiter's Name], and I am reaching out on behalf of [Company Name]. We are currently seeking talented backend developers and believe your experience aligns well with our needs.
If you are interested, I would appreciate the opportunity to discuss potential opportunities with you.

Thank you for your time and consideration.

Best regards,
[Recruiter's Name]
[Recruiter's Position]
[Contact Information]`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, '_blank');
  };

  return (
    <button className={styles.button64} role="button" onClick={handleClick}>
      <span className={styles.text}>{children}</span>
    </button>
  );
};

export default Button64;