import * as React from "react";
import { useState } from "react";
import "./App.css";

import { NavBar } from "./components/NavBar";
import { Classroom } from "./pages/Classroom";

import lessonList from "./mocks/lessonList.json";

export default function App() {
  const [selectedLesson] = useState(lessonList[0]);

  return (
    <div className="App">
      <NavBar />
      <Classroom lesson={selectedLesson} />
    </div>
  );
}
