import React from "react";
import Image1 from "../slike/Messenger_creation_f5029b67-e885-4ffe-ad7e-c7071e1274c1.jpeg";
import BlackImage from '../slike/9M0A5394-2.jpg'
import MainSectionStyle from "../style/MainSection.module.scss";

const MainSection = () => {
  return (
    <>
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
        <div></div>
      </section>
      <section class={`${MainSectionStyle.container1}`}>
        <div className={MainSectionStyle.about_me_extra_section_images}>
          <img src={BlackImage} alt="profilna slika" />
          <img src={BlackImage} alt="profilna slika" />
        </div>
      <div className={MainSectionStyle.about_me_extra_section_content} >
      <div className={MainSectionStyle.about_me_extra_section_content_text}>
      <h2>MOJA FILOZOFIJA I VIZIJA</h2>
      </div>
      <div className={MainSectionStyle.about_me_extra_section_content_box}>
      <div className={MainSectionStyle.about_me_extra_section_content_box_container}>
        <p>
        Moj stil fotografisanja je vrlo minimalan. Privlače me neutralne boje i zemljani tonovi jer su vanvremenski i smatram da će i za 10-15 godina biti podjednako lepi. Inspiraciju tražim u prirodi i uvek kada meni prepustite odabir lokacije, odvešću vas na neko lepo divlje polje, u šumu ili negde pored vode gde će nam glavna postavka biti poljsko cveće i visoka zelena trava. Višegodišnje iskustvo me je naučilo da ni jedan rekvizit ne može da nadomesti iskren osmeh, zagrljaj, pogled ili dodir. Čak ni najleša postavka ne može učiniti fotografiju magičnom ukoliko emocija nedostaje. Upravo zbog toga težim ka jednostavnijim postavkama, kako bi fokus isključivo bio na vama i vašoj porodici. Ne želim da mi pozirate, obično tada i dobijem komentar „ne ličim na sebe“ ili „neprirodno izgledamo na fotografijama”, već da uz moje instrukcije „uhvatim momenat” i prave vas, baš onakve kakvi ste kada niste ispred objektiva.
        </p>
      </div>
      </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
