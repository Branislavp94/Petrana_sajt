import React from "react";
import Image1 from "../slike/Messenger_creation_f5029b67-e885-4ffe-ad7e-c7071e1274c1.jpeg";
import MainSectionStyle from "../style/MainSection.module.scss";

const MainSection = () => {
  return (
    <section class={`${MainSectionStyle.about} ${MainSectionStyle.container1}`}>
      <div class={MainSectionStyle.about_text}>
        <h2>O meni</h2>
        <hr />
        <p>
          Full cleaning and housekeeping services for companies and households.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          text.Lorem Ipsum is simply
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A reiciendis,
          facere labore modi id natus cum veritatis sunt. Consequuntur, dolor.
        </p>
        <button class={MainSectionStyle.button}>Learn more</button>
      </div>
      <figure>
        <img src={Image1} alt="profilna slika" />
      </figure>
    </section>
  );
};

export default MainSection;
