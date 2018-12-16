import React, { Fragment } from "react";
import { IFieldRenderProps } from "@braces/reform";
import FieldWrapper from "./FieldWrapper";

export interface IOption {
  value: string | number;
  text: string | number;
  key?: string | number;
  disabled?: boolean;
}

type propsOverride = IFieldRenderProps & {
  onChange: (value?: string) => void;
  value: string | number;
  customProps: {
    [key: string]: any;
    options: IOption[];
  }
};

const RadioField: React.SFC<propsOverride> = (props) => (
  <Fragment>
    {props.customProps.options.map((option: IOption, index: number) => (
      <div className="form-check" key={option.key || index}>
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id={`field-${props.name}-${option.value}`}
          value={option.value}
          disabled={option.disabled}
          onChange={(e) => {
            const value = e.target.value;
            if (props.onChange)
              props.onChange(Number(value) || value);
            if (props.onBlur)
              props.onBlur(Number(value) || value);
          }}
        />
        <label className="form-check-label" htmlFor={`field-${props.name}-${option.value}`}>
          {option.text}
        </label>
      </div>
    ))}
  </Fragment>
);

export default FieldWrapper(RadioField);
