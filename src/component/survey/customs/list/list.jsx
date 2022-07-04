import { StylesManager, ComponentCollection, Model } from "survey-core";
import Select, { SelectChangeEvent } from "@mui/material/Select";
//Register new "country" component
var list = "customtype";
ComponentCollection.Instance.add(
  {
    //Unique component name. It becomes a new question type. Please note, it should be written in lowercase.
    /**
     * Required attribute. Unique name in lower case.
     */

    name: "customfield",
    /**
     * Optional attribute. Toolbox use this value to display it as a text in toolbox item.
     * If it is empty, then name is used.
     */

    title: "tototot",
    /**
     * Optional attribute. If Toolbox has several categories then
     * this attribute defines to which category this custom widget belongs.
     */

    // category: category,
    /**
     * Optional attribute. Toolbox use it to show the icon type in toolbox item.
     * If it is empty, then Creator uses "icon-default" value.
     */

    //iconName: iconName,
    /**
     * This function is required if you are going to introduce a new question type
     * and register it on SurveyJS Creator toolbox.
     * It should return true, when all needed resources (javascript and css files) are loaded
     */
    widgetIsLoaded: function () {
      // return typeof $ == "function"; //example of checking on loading jQuery
    },
    /**
     * This function returns true when we decided to apply our widget to the question.
     * This function is required.
     * SurveyJS Library allows to apply only one custom widget to a question.
     * If there are several custom widgets that can be applied to the same question,
     * then the first custom widget in the custom widget collection wins.
     */

    isFit: function (question) {
      //return question.getType() == "richedit";
    },
    /**
     * SurveyJS calls this function one time on registing the custom widget.
     * This function is optional
     */

    init: function () {
      //Add/modify/remove classes and properties
    },
    /**
     * If you want to have the default input rendering for the existing question, then set this property to true.
     */

    isDefaultRender: true,
    /**
     * SurveyJS will render this template for question input if this property is not empty.
     */

    /**
     * You have to put here code to modify the DOM, using the html element as a root element.
     * In case of creating your own question type,
     * you have to create data binding between your widget and question value.
     * If needed, react on changing read-only question state.
     */

    renderElement() {
      <div>rtyrtyr</div>;
    },
    questionJSON: {
      type: "dropdown"
    }
  },
  list
);
