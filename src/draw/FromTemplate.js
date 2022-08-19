import React from 'react'
import '../styles/FromTemplate.css'
import Navbar from '../components/Navbar'
import Phyllotaxis from '../components/art/Phyllotaxis'

export default function FromTemplate() {
  return (
    <>
    <Navbar/>
    <div className="header">
        <h2 className="header-title">NAME OF TEMPLATE IG</h2>
    </div>
    <div className="drawfromTemplateArea">
        <div className="box-1">
            <b>Eta K hunxa Thaavayena</b><br/>
            Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Rem doloremque quis a atque quidem esse
            excepturi, architecto amet pariatur impedit. Fuga perspiciatis
            pariatur temporibus veniam. Quod repudiandae eligendi impedit beatae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            doloremque quis a atque quidem esse excepturi, architecto amet
            pariatur impedit. Fuga perspiciatis pariatur temporibus veniam. Quod
            repudiandae eligendi impedit beatae! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Rem doloremque quis a atque quidem esse
            excepturi, architecto amet pariatur impedit. Fuga perspiciatis
            pariatur temporibus veniam. Quod repudiandae eligendi impedit beatae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            doloremque quis a atque quidem esse excepturi, architecto amet
            pariatur impedit. Fuga perspiciatis pariatur temporibus veniam. Quod
            repudiandae eligendi impedit beatae!
            </div>
        <div className="box-2"> <Phyllotaxis/> </div>
        <div className="box-3">
            <h1>Sliders</h1>
            <h2>Button-1</h2>
            <h2>Button-2</h2>
            <h2>Button-3</h2>
            <h2>Button-4</h2>
            <h2>Button-5</h2>
            <h2>Button-6</h2>
            </div>
    </div>
    </>
  )
}
