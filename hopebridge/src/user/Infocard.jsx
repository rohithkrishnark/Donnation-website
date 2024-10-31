import React from 'react';
import './Infocard.css'; // Make sure to create a CSS file for styling

const InfoCards = () => {
    const cardData = [
        {
            icon: "👤", // Replace with actual icons if available
            title: "BECOME A VOLUNTEER",
            description: "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.",
            linkText: "Learn More",
        },
        {
            icon: "😊",
            title: "HAPPY GIVING",
            description: "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.",
            linkText: "Learn More",
        },
        {
            icon: "💼",
            title: "DONATION",
            description: "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.",
            linkText: "Learn More",
        },
    ];

    return (
        <div className="info-cards-container">
            {cardData.map((card, index) => (
                <div key={index} className="info-card ">
                    <div className="icon">{card.icon}</div>
                    <h3 className="title">{card.title}</h3>
                    <p className="description">{card.description}</p>
                    <a href="#" className="learn-more">{card.linkText}</a>
                </div>
            ))}
        </div>
    );
};

export default InfoCards;
