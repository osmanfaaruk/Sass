import React, { useState } from "react";

const AboutUs = () => {
  const [state] = useState({
    heading: "Who are you?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae exercitationem, consequatur voluptatibus esse nulla accusamus doloribus molestiae animi mollitia incidunt optio quas nostrum, quod nihil ex sint quasi ipsum!",
  });
  const [sections] = useState([
      {id:1, icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-easel"
        viewBox="0 0 16 16"
      >
        <path d="M8 0a.5.5 0 0 1 .473.337L9.046 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.323 3.837a.5.5 0 1 1-.946.326L11.092 11H8.5v3a.5.5 0 0 1-1 0v-3H4.908l-1.435 4.163a.5.5 0 1 1-.946-.326L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.954L7.527.337A.5.5 0 0 1 8 0zM2 3v7h12V3H2z" />
      </svg>,
      heading: 'Digital Marketing', text: "Lorem ipsum dolor sit amet consectetur, adipisicing  commodi reiciendis molestiae suscipit praesentium. Ad, nondebitis, exercitationem",
        
    },
      {id:2, icon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
    </svg>,
      heading: 'Apps Development', text: "Lorem ipsum dolor sit amet consectetur, adipisicing  commodi reiciendis molestiae suscipit praesentium. Ad, nondebitis, exercitationem",
        
    },
      {id:3, icon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
      <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
    </svg>,
      heading: 'Web Development', text: "Lorem ipsum dolor sit amet consectetur, adipisicing  commodi reiciendis molestiae suscipit praesentium. Ad, nondebitis, exercitationem",
        
    }
    
  ])
  return (
    <div className="about ">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h4 className="about__h4">{state.heading}</h4>
          </div>
          <div className="col-9">
            <div className="about__text">
              <p>{state.text}</p>
            </div>
          </div>
        </div>
        <div className="row mt-40">
            {sections.map(section => (
                <div className="col-4 pl-15" key={section.id}>
                <div className="about__section">
                  <div className="about__section-icon">
                    {section.icon}
                  </div>
                  <div className="about__section-heading">
                    <h6>{section.heading}</h6>
                  </div>
                  <div className="about__section-text">
                    <p>
                      {section.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
