import React, { useState } from "react";

const Portfolio = () => {
  const [state] = useState([
    { id: 1, image: "/images/01.jpg", name: "James", expert: "Programmer" },
    { id: 2, image: "/images/02.jpg", name: "Mickel", expert: "Programmer" },
    { id: 3, image: "/images/03.jpg", name: "Harry", expert: "Programmer" },
    // { id: 4, image: "/images/04.jpg", name: "Elon", expert: "Programmer" },
    // { id: 5, image: "/images/05.jpg", name: "Misheal", expert: "Programmer" },
    // { id: 6, image: "/images/06.jpg", name: "Andreio", expert: "Programmer" },
  ]);
  return (
    <div className="portfolio">
      <div className="container">
        <div className="portfolio__section">
          <div className="row">
            <div className="col-4">
              <div className="portfolio__content">
                <h6 className="portfolio__content-h6">EMPLOYEES</h6>
                <h3 className="portfolio__content-h3">OUR TEAM</h3>
              </div>
            </div>
            <div className="col-8">
              <div className="row">
                {state.map((user) => (
                  <div className="col-4 pl-15" key={user.id}>
                    <div className="portfolio__card">
                      <div className="portfolio__card-img">
                        <img src={user.image} alt="" />
                      </div>
                      <h5 className="portfolio__card-name">{user.name}</h5>
                      <p className="portfolio__card-expert">{user.expert}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
