import React from 'react'

import InfoStyle from '../style/InfoContent.module.scss'

const ExtraContent = () => {
  return (
    <section class={`${InfoStyle.info} ${InfoStyle.container1}`}>
    <hr />
    <h2>Neki Tvoj tekst</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
      doloremque ad rem asperiores, non nobis. Rem molestiae hic delectus ea?
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla
      blanditiis beatae asperiores et autem ea quis eligendi, sunt rem alias
      reiciendis vero illum odit hic! Nesciunt excepturi esse fuga,
      repudiandae corporis nemo repellendus porro impedit deleniti quibusdam,
      odio et.
    </p>
    <hr />
  </section>
  )
}

export default ExtraContent