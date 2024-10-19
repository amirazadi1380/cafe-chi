import React, { useEffect, useRef, useState } from 'react'
import Headers from './Headers'
import Categories from './Categories'
import Items from './Items'
import Footer from './Footer'


export default function Menu() {
  const [selectedCategoryID, setSelectedCategoryID] = useState(1)


  return (
    <div >
      <Headers />
      <Categories selectedCategoryID={selectedCategoryID} setSelectedCategoryID={setSelectedCategoryID} />
      <Items selectedCategoryID={selectedCategoryID} />
      <Footer />
    </div>
  )
}
