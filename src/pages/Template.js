import React from "react";
import Navbar from "../components/Navbar";
import TemplateDetail from "../components/TemplateDetail";
import templates from "../data/drawTemplate.json";
import "../styles/Template.css";

export default function Template() {
  return (
    <>
      <Navbar />
      <div className="templatecards">
        {templates.map((drawTemplate, index) => {
          return (<TemplateDetail key={index} cardTitle={drawTemplate.templateTitle} cardImage={drawTemplate.templateImage} cardLink={drawTemplate.redirectTo} />)
        }
        )
        }
      </div>
    </>
  )
}
