import React, { useContext, useState } from "react";

import { AppContext } from "./AppContext";

import "../sass/ConverterFrom.scss";

const ConverterForm = () => {
  const { converter, handleChangeConverter } = useContext(AppContext);
  const [formValue, setFormValue] = useState(converter);
  const [wrongValue, setWrongValue] = useState(false);

  const handleChangeFormValue = ({ target }) => setFormValue(target.value);
  const handleSubmitFormValue = (event) => {
    event.preventDefault();
    if (formValue >= 0) {
      handleChangeConverter(formValue);
      setWrongValue(false);
      setFormValue(0);
    } else {
      setWrongValue(true);
    }
  };

  const wrongValueMessage = wrongValue ? (
    <p className="converter-form__warning">You cannot pass negative value!</p>
  ) : null;

  return (
    <form className="converter-form" onSubmit={handleSubmitFormValue}>
      <label>
        {wrongValueMessage}
        <input
          type="number"
          className="converter-form__input"
          value={formValue}
          onChange={handleChangeFormValue}
        />
      </label>
      <input type="submit" className="button" value="Set new converter" />
    </form>
  );
};

export default ConverterForm;
