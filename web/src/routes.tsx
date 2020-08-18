import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LandingPage from "./pages/Landing";
import TeacherFormPage from "./pages/TeacherForm";
import TeacherListPage from "./pages/TeacherList";

interface Props {
  toggleTheme(): void
}

const Routes: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={() => <LandingPage toggleTheme={toggleTheme} />} />
      <Route path="/study" component={() => <TeacherListPage toggleTheme={toggleTheme} />} />
      <Route path="/give-classes" component={() => <TeacherFormPage toggleTheme={toggleTheme} />} />
    </BrowserRouter>
  );
}

export default Routes;