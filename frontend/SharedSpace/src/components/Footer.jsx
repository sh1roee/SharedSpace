import React, { useState } from 'react';
import './Footer.css';
import Logo from '../assets/SharedSpaceLogo.svg';
import { LegalPopup } from './LegalPopup';

export const Footer = () => {
     const [popupType, setPopupType] = useState(null); // 'terms' or 'privacy'

     return (
          <footer className="footer-section">
               <div className="footer-container">
                    <div className="footer-brand">
                         <img src={Logo} alt="SharedSpace Logo" className="footer-brand-logo" />
                    </div>

                    <div className="footer-nav-grid">
                         <div className="footer-nav-column">
                              <h4 className="footer-nav-title">Navigation</h4>
                              <ul className="footer-nav-list">
                                   <li><a href="/home" className="footer-nav-link">Home</a></li>
                                   <li><a href="/art-wall" className="footer-nav-link">Art Wall</a></li>
                                   <li><a href="/friends-space" className="footer-nav-link">Friends Space</a></li>
                                   <li><a href="/leaderboard" className="footer-nav-link">Leaderboard</a></li>
                                   <li><a href="/challenges" className="footer-nav-link">Challenges</a></li>
                              </ul>
                         </div>

                         <div className="footer-nav-column">
                              <h4 className="footer-nav-title">Community</h4>
                              <ul className="footer-nav-list">
                                   <li><a href="/profile" className="footer-nav-link">Your Profile</a></li>
                                   <li><a href="mailto:support@sharedspace.com" className="footer-nav-link">Contact Support</a></li>
                              </ul>
                         </div>

                         <div className="footer-nav-column">
                              <h4 className="footer-nav-title">Policies & Legal</h4>
                              <ul className="footer-nav-list">
                                   <li>
                                        <span
                                             className="footer-nav-link clickable-legal"
                                             onClick={() => setPopupType('terms')}
                                        >
                                             Terms and Conditions
                                        </span>
                                   </li>
                                   <li>
                                        <span
                                             className="footer-nav-link clickable-legal"
                                             onClick={() => setPopupType('privacy')}
                                        >
                                             Privacy Policy
                                        </span>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
               <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} SharedSpace. Connect, Create, and Share your Space.</p>
               </div>

               {popupType && (
                    <LegalPopup
                         type={popupType}
                         onClose={() => setPopupType(null)}
                    />
               )}
          </footer>
     );
};
