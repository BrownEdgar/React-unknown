import React from "react";
export default function Card({ card }) {
    return(
        <div className="Card">
            <div className="Card_header"></div>
            <div className="Card_title"></div>
            <img src={card.image} alt={card.title} />
            <div className="Card_title">
                <h1>
                    {<h1>{card.data}</h1>}
                    {" "}
                    {card.title}
                    </h1>
            </div>
        </div>
    )

}