import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-newsletter">
                    <p>הצטרף לניוזלטר שלנו וקבל הנחה של 20 בהזמנה הראשונה שלך</p>
                    <div className="footer-newsletter-input">
                        <input placeholder="הכנס את האימייל שלך" />
                        <div>הירשם כמנוי</div>
                    </div>
                </div>
                <div className="footer-cards"></div>
            </div>
        </div>
    );
};

export default Footer;