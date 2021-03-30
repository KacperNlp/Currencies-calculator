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

    if(formValue < 0.01){
      return setWrongValue(true);
    }

    handleChangeConverter(formValue);
    setWrongValue(false);
    setFormValue(0);

  };

  const wrongValueMessage = wrongValue ? (
    <p className="converter-form__warning">You cannot pass negative value or equal to 0!</p>
  ) : null;

  return (
    <form className="converter-form" onSubmit={handleSubmitFormValue}>
      <label>
        {wrongValueMessage}
        <input
          className="converter-form__input"
          onChange={handleChangeFormValue}
          type="number"
          value={formValue}
        />
      </label>
      <input className="button" type="submit" value="Set new value" />
    </form>
  );
};

export default ConverterForm;
