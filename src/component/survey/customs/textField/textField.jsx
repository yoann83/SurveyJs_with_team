import { StylesManager, ComponentCollection, Model } from "survey-core";

//Register new "country" component
ComponentCollection.Instance.add({
  //Unique component name. It becomes a new question type. Please note, it should be written in lowercase.
  name: "country2gg",
  //The text that shows on toolbox
  title: "Codfgfduntry2",
  //The actual question that will do the job
  questionJSON: {
    type: "dropdown",
    optionsCaption: "Select a country...",
    choicesByUrl: {
      url: "https://surveyjs.io/api/CountriesExample"
    }
  }
});
