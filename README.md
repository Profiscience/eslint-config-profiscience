# eslint-config-profiscience

## Basic Rules

- no semicolons
- 2 spaces
- single-quotes
- strict mode
- *always* use braces
- prefer arrow functions
- use `const` and `let`, prefer `const`
- use `===` and `!==`
- no magic numbers (excluding -1 through 2)
- use object shorthand
- use destructuring

## Functions

### Named functions
- no space after function name
- 1 space after function parens

```javascript
function foo(bar, baz) {
  // do work
}
```

### Anonymous (Arrow) Functions
- 1 space before and after arrow
- no superfluous `return`

```javascript
// good
const foo = (bar, baz) => foo + bar
const foo = (bar, baz) => ({ bar, baz })

// bad
const foo = (bar, baz) => { return foo + bar }
const foo = (bar, baz) => { return { bar, baz } }
```

### Function Chains

Function chains longer than 3 should be broken onto new lines

```javascript
// good
_(foos).map(transformFoos).filter(applyFilter).value()
_(foos)
  .map(transformFoos)
  .filter(applyFilter)
  .map(transformFoosAgain)
  .value()

// bad
_(foos).map(transformFoos).filter(applyFilter).map(transformFoosAgain).value()
```
