import { useCallback } from "react";
import "survey-core/modern.min.css";
import "../styles.scss";
import { StylesManager, ComponentCollection, Model } from "survey-core";
import { Survey } from "survey-react-ui";

import "../component/survey/overloads/SelectField";
import { formJson } from "./formJson";
import "../component/survey/customs/textField/textField";
import "../component/survey/customs/list/list";

function SurveyComponent() {
  const surveyModel = new Model({
    pages: [
      {
        name: "page1",
        navigationTitle: "Part 1",
        navigationDescription: "Identity",
        elements: [
          {
            type: "image",
            name: "first_page_image",
            imageLink:
              "https://egerie-software.com/wp-content/themes/egerie/img/egerie-logo.svg"
          },
          {
            type: "yourcomponentname",
            title: "Text Custom",
            isRequired: true
          },
          {
            type: "panel",
            name: "unique_case_id_textbox",
            elements: [
              {
                type: "panel",
                name: "identity",
                isRequired: true,
                hasNone: true,
                title: "Identidy".toLocaleUpperCase(),
                showNumber: true,
                elements: [
                  {
                    type: "dropdown",
                    name: "car",
                    title: "What car you driving?",
                    hasNone: true,
                    isRequired: true,
                    choices: ["item1", "item2", "item72"]
                  },
                  {
                    type: "country2gg",
                    name: "agfdsgd dgfgd e2",
                    isRequired: true
                  },
                  {
                    type: "customfield",
                    name: "Nouvelle list",
                    isRequired: true
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    showProgressBar: "top",
    progressBarType: "buttons"
  });

  return (
    <div id="form_survey">
      <h1>sdfsdfs</h1>
      <Survey model={surveyModel} />
    </div>
  );
}

export default SurveyComponent;
