import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FormBuilder from "./container/FormBuilder";

//general style and modern style survey
import "survey-core/modern.min.css";
import "./styles.scss";

const rootElement = document.getElementById("surveyElement");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <FormBuilder />
  </StrictMode>
);
