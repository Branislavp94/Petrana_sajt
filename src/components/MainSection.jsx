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
          ZDRAVO! JA SAM PETRANA, 
        </p>
        <p>
          SVE JE POČELO IZ LJUBAVI. VEĆ 12 GODINA STVARAM I IZRAŽAVAM SVOJU KREATIVNOST KROZ OBJEKTIV. 
          KADA SAM PRVI PUT UZELA FOTOAPARAT U RUKE, SHVATILA SAM DA JE TO ZAPRAVO MOJE OKO ZA SAGLEDAVANJE 
          STVARNOSTI. IZ LJUBAVI PREMA UMETNOSTI I LJUDIMA, TU SAM DA ZABELEŽIM VAŠE POSEBNE TRENUTKE I DA 
          IH KROZ MOJE FOTOGRAFIJE UČINIM JOŠ POSEBNIJIM.
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
