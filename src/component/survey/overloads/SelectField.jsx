import React from "react";
import { SurveyQuestionDropdown, ReactQuestionFactory } from "survey-react-ui";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Set up a custom component that will render React Select
class MatSelectField extends SurveyQuestionDropdown {
  // Convert the `visibleChoices` array to a format supported by React Select
  get options() {
    return this.question.visibleChoices.map((c) => {
      return { value: c.value, label: c.value };
    });
  }
  // Retrieve an option object based on the question value
  get selectedOption() {
    return this.question.value;
  }
  // Set the question value to the selected option value
  onSelectChange = (e) => {
    this.setValueCore(e.target.value);
  };
  renderElement() {
    // If the question is non-editable, render a stylized div
    if (this.isDisplayMode) {
      return (
        <div
          id={this.question.inputId}
          className={this.question.getControlClass()}
          disabled
        >
          {" "}
          {this.question.displayValue || this.question.optionsCaption}{" "}
        </div>
      );
    }
    // Otherwise, render the React Select component
    return (
      <Select
        className="mat-sv-select"
        id={this.question.inputId}
        value={this.selectedOption ? this.selectedOption : ""}
        onChange={this.onSelectChange}
        required={this.question.isRequired}
      >
        {this.options.map((c) => (
          <MenuItem key={c.value} value={c.value}>
            {" "}
            {c.value}{" "}
          </MenuItem>
        ))}
      </Select>
    );
  }
}

// Register the CustomSelect component as a renderer under a custom name "sv-dropdown-react"
ReactQuestionFactory.Instance.registerQuestion("dropdown", (props) => {
  return React.createElement(MatSelectField, props);
});
