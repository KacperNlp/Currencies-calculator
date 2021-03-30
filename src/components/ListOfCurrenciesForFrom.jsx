export const ListOfCurrenciesForFrom = ({currenciesArray}) => {
    const listOfCurrenciesForForm = currenciesArray.map(([name]) => (
        <option value={name} key={name}>
          {name}
        </option>
      ));
    return listOfCurrenciesForForm;
}