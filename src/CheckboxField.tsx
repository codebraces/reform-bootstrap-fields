import React from "react";

import { IFieldRenderProps } from "@braces/reform";
import FieldWrapper from "./FieldWrapper";

type propsOverride = IFieldRenderProps & {
  onChange: (checked: boolean) => void;
  value: boolean;
};

const CheckboxField: React.SFC<propsOverride> = (props) => (
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      id={`field-${props.name}`}
      checked={props.value}
      onChange={(e) => {
        const value = e.target.checked;
        if (props.onChange)
          props.onChange(Number(value) || value);
      }}
      onBlur={(e) => {
        const value = e.target.checked;
        if (props.onBlur)
          props.onBlur(Number(value) || value);
      }}
    />
    <label className="form-check-label" htmlFor={`field-${props.name}`}>
      {props.label}
    </label>
  </div>
);

export default FieldWrapper(CheckboxField);
