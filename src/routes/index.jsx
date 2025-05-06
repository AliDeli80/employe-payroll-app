import React from "react";
import Title from "../components/utilities/Title";
import { PageWrapper } from "../components/styles/PageWrapper";

export default function Index() {
  return (
    <PageWrapper className="animate-left">
      <Title text="Welcome to " />
      <h3 className="subtitle">Employee payroll</h3>
      <p>
        Check out <br />
      </p>
      <a
        href="https://github.com/AliDeli80"
        target="_blank"
        className="text-primary mr-1"
      >
        {" "}
        www.github.com/AliDeli80
      </a>
    </PageWrapper>
  );
}
