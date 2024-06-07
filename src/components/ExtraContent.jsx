import React from 'react'

import InfoStyle from '../style/InfoContent.module.scss'

const ExtraContent = () => {
  return (
    <section class={`${InfoStyle.info} ${InfoStyle.container1}`}>
    <hr />
    <h2>UMETNOST LJUBAVI</h2>
    <p>
    Koristim svoj jedinstveni pristup kako bi svaki kadar bio više od obične slike - to je uspomena, 
    emocija, i ljubav. Neka vaši trenuci budu zabeleženi na poseban način kroz umetnički izražaj 
    koji odiše autentičnošću i strasti.
    </p>
    <p>
    U ovoj galeriji, svaka fotografija je pažljivo odabrana kako bi prikazala raznovrsnost 
    i lepotu trenutaka koje je sam uspela da uhvatim. 
    Bilo da je reč o veselim porodičnim okupljanjima, 
    nežnim trudničkim trenucima ili iskrenim osmesima u prirodi, 
    svaki snimak je prozor u svet pun emocija.
    </p>
    <hr />
  </section>
  )
}

export default ExtraContent