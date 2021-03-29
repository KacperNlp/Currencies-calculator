# Currency calculator

I had created this app for learning react. In this app user can checks currently ratio of currencies, according to the base currency (default it's USD but user can change it easily).<br/>
What is more user can change currencies converter, the default converter value it's 1 and thanks that user can checks how much money he can get in others currencies if he had that amount in the base currency. I also created search system, which one display only matched currencies (user may search currency by name) in table.

## Mistake/fault/errro protection

- Converter - if currency value is equal to 0.00 then this currency won't displayed in the table. Alos user cannot pass negative values (only >= 0).
- Empty currencie array - if array with currencies, which will be passed in to the table is empty, then this table won't displayed but user will see information that any currency hasn't been matched to his request.
- error with API - if we get any error with fetch currencies from API, then the app will change displayed component for ErrorWithAPI, where there is message for user about the problem with API.

## API

link to api with currencies: https://exchangeratesapi.io/

### Technologies

I used in this project:

- JavaScript,
- React,
- Sass,
- BEM.

LIVE: https://kacpernlp.github.io/Currencies-calculator/

status of project: finished
