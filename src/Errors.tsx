import * as React from "react";

const Errors: React.SFC<{ errors: string }> = ({ errors }) => (
  <div className="invalid-feedback">
    {errors && <div className="error-item">{errors}</div>}
  </div>
);

export default Errors;
