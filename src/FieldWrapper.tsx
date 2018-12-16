import * as React from "react";
import { IFieldRenderProps, validationTypes } from "@braces/reform";
import Errors from "./Errors";

const FieldWrapper = (FieldComponent: React.ComponentType<IFieldRenderProps & any>) => (
  (props: IFieldRenderProps) => {
    const showLength = props.customProps && props.customProps.showLength;
    const description = props.customProps && props.customProps.description;
    const maxLength = props.validationRules &&
      props.validationRules.type === validationTypes.String &&
      props.validationRules.maxLength;

    const lengthDescription = showLength ?
      `
      ${props.value && typeof props.value === "string" && props.value.length || 0}
      ${maxLength && `/${maxLength}` || ""}
      ` : "";
    const calculatedDescription = showLength || description ?
      (
        description ?
          `${props.customProps.description}${lengthDescription && ` - ${lengthDescription}`}` :
          lengthDescription
      ) : "";

    return (
      <div className={`form-group ${props.errors && props.errors.length > 0 ? "hasError" : ""}`}>
        <FieldComponent {...props} />
        {calculatedDescription && <small>{calculatedDescription}</small>}
        {props.errors ?
          <Errors errors={props.errors[0]} /> : null}
      </div>
    );
  }
);

export default FieldWrapper;
