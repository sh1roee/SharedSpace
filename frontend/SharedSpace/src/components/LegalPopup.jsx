import React from 'react';
import './LegalPopup.css';

export const LegalPopup = ({ type, onClose }) => {
     const content = {
          terms: {
               title: "Terms and Conditions",
               sections: [
                    {
                         heading: "1. User Conduct",
                         text: "Users must be respectful and constructive. No NSFW, offensive, or copyrighted content that you do not own is allowed on the SharedSpace platform."
                    },
                    {
                         heading: "2. Content Ownership",
                         text: "You retain all rights to the artwork you upload. By sharing on SharedSpace, you grant us a non-exclusive license to display your art to other users within the platform."
                    },
                    {
                         heading: "3. Moderation",
                         text: "We reserve the right to remove any content or suspend accounts that violate our community standards or interfere with the safety of others."
                    },
                    {
                         heading: "4. Daily Streaks & Engagement",
                         text: "Participation in challenges and streaks is encouraged to foster creative growth. Manipulation of these systems is prohibited."
                    }
               ]
          },
          privacy: {
               title: "Privacy Policy",
               sections: [
                    {
                         heading: "1. Information We Collect",
                         text: "We collect your username, email address, profile picture, and the artwork you choose to share with the community."
                    },
                    {
                         heading: "2. How We Use Data",
                         text: "Your data is used to provide a personalized experience, including tracking your daily streaks, managing your friend list, and displaying your art on the Art Wall."
                    },
                    {
                         heading: "3. Service Providers",
                         text: "We use secure industry-standard services like Cloudinary for image hosting and MongoDB Atlas for database management."
                    },
                    {
                         heading: "4. Account Security",
                         text: "We use JWT-based authentication and industry-standard encryption to protect your account and personal information."
                    }
               ]
          }
     };

     const activeContent = content[type] || content.terms;

     return (
          <div className="legal-popup-overlay" onClick={onClose}>
               <div className="legal-popup-content" onClick={(e) => e.stopPropagation()}>
                    <div className="legal-popup-header">
                         <h2>{activeContent.title}</h2>
                         <button className="legal-popup-close-x" onClick={onClose}>&times;</button>
                    </div>
                    <div className="legal-popup-body">
                         {activeContent.sections.map((section, index) => (
                              <div key={index} className="legal-section">
                                   <h4>{section.heading}</h4>
                                   <p>{section.text}</p>
                              </div>
                         ))}
                    </div>
                    <div className="legal-popup-footer">
                         <button className="legal-popup-close-btn" onClick={onClose}>Got it</button>
                    </div>
               </div>
          </div>
     );
};
