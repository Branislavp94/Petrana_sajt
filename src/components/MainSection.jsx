import React from "react";
import Image1 from "../slike/Messenger_creation_f5029b67-e885-4ffe-ad7e-c7071e1274c1.jpeg";
import MainSectionStyle from "../style/MainSection.module.scss";

const MainSection = () => {
  return (
    <section class={`${MainSectionStyle.about} ${MainSectionStyle.container1}`}>
      <div class={MainSectionStyle.about_text}>
        <div className={MainSectionStyle.text_section}>
        <h2>ZDRAVO! JA SAM  PETRANA,</h2>
        <p>
          Full cleaning and housekeeping services for companies and households.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          text.Lorem Ipsum is simply. Lorem ipsum dolor sit amet consectetur adipisicing elit. A reiciendis,
          facere labore modi id natus cum veritatis sunt. Consequuntur, dolor.. Lorem ipsum dolor sit amet consectetur adipisicing elit. A reiciendis,
          facere labore modi id natus cum veritatis sunt. Consequuntur, dolor.
        </p>
        </div>
      </div>
      <div class={MainSectionStyle.image_container}>
        <img src={Image1} alt="profilna slika" />
      </div>
    </section>
  );
};

export default MainSection;
