import React from "react";
import Image1 from "../slike/Messenger_creation_f5029b67-e885-4ffe-ad7e-c7071e1274c1.jpeg";
import MainSectionStyle from "../style/MainSection.module.scss";

const MainSection = () => {
  return (
    <section class={`${MainSectionStyle.about} ${MainSectionStyle.container1}`}>
      <div class={MainSectionStyle.about_text}>
        <div className={MainSectionStyle.text_section}>
          <div>
            <h2>ZDRAVO! JA SAM  PETRANA,</h2>
            <hr />
          </div>
        <p>
          SVE JE POČELO IZ LJUBAVI. VEĆ 12 GODINA STVARAM I IZRAŽAVAM SVOJU KREATIVNOST KROZ OBJEKTIV. 
          KADA SAM PRVI PUT UZELA FOTOAPARAT U RUKE, SHVATILA SAM DA JE TO ZAPRAVO MOJE OKO ZA SAGLEDAVANJE 
          STVARNOSTI. IZ LJUBAVI PREMA UMETNOSTI I LJUDIMA, TU SAM DA ZABELEŽIM VAŠE POSEBNE TRENUTKE I DA 
          IH KROZ MOJE FOTOGRAFIJE UČINIM JOŠ POSEBNIJIM.
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
