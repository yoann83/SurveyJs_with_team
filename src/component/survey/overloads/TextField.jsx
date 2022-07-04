import React from "react";
import { ReactQuestionFactory } from "survey-react-ui";
import TxtField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function TextField(props) {
  const handleChangeValue = (e) => {
    props.question.setValueCore(e.target.value);
  };

  return (
    <div>
      {props.isDisplayMode ? (
        <div
          id={props.question.inputId}
          className={props.question.getControlClass()}
          disabled
        >
          {props.question.displayValue || props.question.optionsCaption}
        </div>
      ) : (
        <Box noValidate autoComplete="on">
          <TxtField
            name={props.question.name}
            label={props.question.title}
            autoComplete={props.question.autoComplete}
            required={props.question.isRequired}
            placeholder={props.question.placeHolder}
            type={props.question.inputType}
            onChange={handleChangeValue}
          />
          TOTOTO
        </Box>
      )}
    </div>
  );
}
ReactQuestionFactory.Instance.registerQuestion("text", (props) => {
  return React.createElement(TextField, props);
});
