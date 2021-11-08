import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Footer from './Footer';
import Item from './Item';

const App = () => {
    return(
        <div className="app">
            <h1>מוצרים ומבצעים מומלצים</h1>
            <h5> לורם טיפוסי הוא טקסט חסר משמעות לחלוטין - הנקא לפעמים גםל</h5>
            <div className="content-container">
                <Banner />
                <div className="items-container">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
            <AboutUs />
            <Footer />
        </div>
    );
};

export default App;