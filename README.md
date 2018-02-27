#Nomisma Website .js

## Coding "Standard"
[Standard.js](https://standardjs.com/) provides an automated JavaScript style guide with automatic code fixer.  We're using the [babel-eslint](https://github.com/babel/babel-eslint) parser which allows us to use proposed JavaScript methods (i.e., [object-rest-spreads](https://babeljs.io/docs/plugins/transform-object-rest-spread/) and [class-properties](https://babeljs.io/docs/plugins/transform-class-properties/)).  Standard.js will ensure all of our code is uniform and consistent.  At any point, non-standard code can be fixed by running `standard --parser babel-eslint --fix`.

## Recommended Tools

#### Atom Packages
- [language-babel](https://atom.io/packages/language-babel)

## Styling
All styling is setup using [styled components](https://www.styled-components.com/).  styled allows us to create re-usable components for all of our styling and uses real CSS with automatic prefixing and can be easily dynamic based on passed props.

## Install

```javascript
npm i webpack -g
npm i standard -g
npm i
npm run dev
```
