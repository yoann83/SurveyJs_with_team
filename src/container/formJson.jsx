export const formJson = {
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
                  type: "customfield",
                  name: "age fr sdfsd 2",
                  isRequired: true
                },
                {
                  hideNumber: true,
                  inputType: "number",
                  type: "text",
                  name: "age",
                  title: "Age",
                  description: "Are you an adult ?",
                  placeHolder: "18",
                  isRequired: true,
                  autoComplete: "age"
                },
                {
                  type: "boolean",
                  name: "identity",
                  labelTrue: "Mr.",
                  labelFalse: "Mrs.",
                  indent: 3,
                  hideNumber: true
                }
              ]
            },
            {
              type: "panel",
              name: "data_collector_information",
              elements: [
                {
                  hideNumber: true,
                  inputType: "text",
                  type: "text",
                  name: "name_of_data_collector",
                  startWithNewLine: false,
                  title: "Name of data collector",
                  description: "Are you an adult ?",
                  placeHolder: "Symfony",
                  isRequired: true,
                  autoComplete: "age"
                },
                {
                  type: "text",
                  id: "99",
                  name: "data_collector_institution",
                  title: "Data collector Institution",
                  placeHolder: "Egerie"
                },
                {
                  type: "text",
                  name: "telephone_number",
                  title: "Telephone number",
                  inputType: "tel",
                  placeHolder: "060000..."
                },

                {
                  type: "dropdown",
                  name: "egrservice",
                  title: "Service",
                  hasNone: true,
                  choices: ["item1", "item2", "item3"]
                },
                {
                  type: "text",
                  name: "email",
                  title: "Email",
                  inputType: "email",
                  placeHolder: "bond.james@007.fr"
                },
                {
                  type: "text",
                  name: "form_completion_date",
                  title: "Form completion date",
                  inputType: "date"
                }
              ],
              title: "Data Collector Information",
              showNumber: true,
              showQuestionNumbers: "off"
            }
          ]
        }
      ]
    },
    {
      name: "page2",
      navigationTitle: "Part 2",
      navigationDescription: "Opinion",
      elements: [
        {
          type: "image",
          name: "first_page_image",
          imageLink:
            "https://egerie-software.com/wp-content/themes/egerie/img/egerie-logo.svg"
        },
        {
          type: "rating",
          name: "nps_score",
          title:
            "On a scale of zero to ten, how likely are you to recommend our compagny to a friend or colleague ?",
          rateMin: 0,
          rateMax: 10
        },
        {
          type: "checkbox",
          name: "promoter_features2",
          visible: false,
          visibleIf: "{nps_score} >= 9",
          title: "Which features do you value the most?",
          validators: [
            {
              type: "answercount",
              text: "Please select two features maximum.",
              maxCount: 2
            }
          ],
          choices: [
            "Performance",
            "Stability",
            "User Interface",
            "Complete Functionality"
          ],
          hasOther: true,
          otherText: "Other feature:",
          colCount: 2
        },
        {
          type: "comment",
          name: "passive_experience",
          visible: false,
          visibleIf: "{nps_score} > 6  and {nps_score} < 9",
          title: "What do you like about our product?"
        },
        {
          type: "comment",
          name: "disappointed_experience",
          visible: false,
          visibleIf: "{nps_score} notempty",
          title:
            "What do you miss or find disappointing in your experience with our products?"
        }
      ]
    }
  ],
  showProgressBar: "top",
  progressBarType: "buttons"
};
