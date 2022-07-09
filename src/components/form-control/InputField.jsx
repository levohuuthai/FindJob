import { TextField } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";

function InputField(props) {
  const { form, name, label, disable } = props;
  const { errors } = form;
  const hasError = errors[name];

  return (
    <Controller
      name={name}
      control={form.control}
      as={TextField}
      variant="outlined"
      margin="dense"
      size="small"
      label={label}
      disable={disable}
      fullWidth
      error={!!hasError}
      helperText={errors[name]?.message}
    />
  );
}

export default InputField;
