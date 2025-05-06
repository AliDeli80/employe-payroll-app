import React from "react";
import Title from "../components/utilities/Title";
import {PageWrapper} from "../components/styles/PageWrapper";
import Footer from "../components/pages/Footer";

export default function About() {
  return (
    <PageWrapper className="animate-left">
      <Title text="About" />
      <h3>
        Welcome to the employee payroll management App. This application is
        designed to help you manage all payrolls for your employees.
      </h3>
      <ol className="text-primary">
        <li>
          The employee payroll managment app is a comprehensive solution for
          businesses of all sizes to manage their empkoyee payroll and related
          tasks efficiently.
        </li>
        <li>
          {" "}
          The app allows employers to easily calculate and process employee
          salaries, bounses, and other compensation, while also providing
          employees with access to their pay stubs and other important
          information.
        </li>
        <li>
          With built-in tax and compliance features, the app ensures that
          businesses stay up-to-date with the latest regulations and avoid
          costly penalties.
        </li>
      </ol>
      <Footer />
    </PageWrapper>
  );
}
