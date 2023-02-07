import React from "react";
import notes from "../images/notes.jpeg";
import papers from "../images/papers.jpeg";

import assignment from "../images/assignment.jpeg";
import ppts from "../images/ppts.jpeg";
import Projects from "../images/Projects.jpeg";
import Program from "../images/Program.jpeg";

import sessional from "../images/sessional.jpeg";
import Carousel from "react-elastic-carousel";
// import Item from "./Item";
// import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const  slider=()=> {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>What Do You Want To Study Today</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
        {/* <div className="card mb-3" style="max-width: 540px;"> */}
  <div className="row g-0">
    <div className="col-md-4">
      <img src={notes} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Notes</h5>
        <p className="card-text"> "Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision.".</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      {/* </div> */}
    </div>
  </div>
</div>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={papers} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Papers</h5>
        <p className="card-text"> "Sample papers help students analyse their strengths and weaknesses so that they can focus on weak areas to improve their results. ➤ When students work on improving their weaker sections, they perform better with practicing sample papers.Students can download the CBSE Sample Papers in PDF format ".</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      {/* </div> */}
    </div>
  </div>
</div>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={assignment} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Assignment</h5>
        <p className="card-text"> "Assignments is an application for your learning management system (LMS). It helps educators save time grading and guides students to turn in their best work with originality reports .Assignments enable faculty to save time on the mundane parts of grading and...spend more time on providing more personalized and relevant feedback to students.".</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      {/* </div> */}
    </div>
  </div>
</div>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={ppts} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">ppts</h5>
        <p className="card-text"> "As technology is emerging day by day. New technologies are coming quickly. And Seminar topics for Computer Science are becoming must find for every student. There are lots of students in Computer Science and Engineering who need quick seminar topics for CSE with ppt and report.".</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      {/* </div> */}
    </div>
  </div>
</div>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={sessional} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Sessional</h5>
        <p className="card-text"> "Sessionals are the exams held in the midst of the semester generally 2 or 3 times to assess the the level of preparation for the semester exams.These previous year's sessional question paper solutions will help them understand the exam pattern for each of the computer science enginnering sessional exam.".</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      {/* </div> */}
    </div>
  </div>
</div>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={Projects} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Projects</h5>
        <p className="card-text"> "These previous year's question paper solutions will help them understand the exam pattern for each of the computer science enginnering exam.".</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      {/* </div> */}
    </div>
  </div>
</div>
  <div className="row g-0 ">
    <div className="col-md-4">
      <img src={Program} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Program</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      {/* </div> */}
    </div>
  </div>
</div>
        </Carousel>
      </div>
    </>
  );
};
export default slider();