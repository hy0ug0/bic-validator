# BIC Validator

## BIC (Business Identifier Code) format validator

![Release](https://github.com/hy0ug0/bic-validator/workflows/Release/badge.svg?branch=master)
<a href="https://codeclimate.com/github/hy0ug0/bic-validator/maintainability"><img src="https://api.codeclimate.com/v1/badges/7eb633b812c354b64718/maintainability" /></a>
<a href="https://codeclimate.com/github/hy0ug0/bic-validator/test_coverage"><img src="https://api.codeclimate.com/v1/badges/7eb633b812c354b64718/test_coverage" /></a>

### FORKED FROM [https://github.com/nicolaspayot/bic](https://github.com/nicolaspayot/bic)

## Install

```bash
$ npm install bic-validator --save
# OR
$ yarn add bic-validator
```

## Usage

### In Node.js

```javascript
const bicValidator = require('bic-validator');
bicValidator.isValid('12345678'); // false
bicValidator.isValid('CHASUS33'); // true

// OR

import bicValidator from 'bic-validator';
bicValidator.isValid('12345678'); // false
bicValidator.isValid('CHASUS33'); // true
```

### In browser

```html
<script src="https://cdn.jsdelivr.net/npm/bic-validator@[VERSION_NUMBER]/dist/bic.umd.min.js"></script>

<script>
    bicValidator.isValid('12345678'); // false
    bicValidator.isValid('CHASUS33'); // true
</script>
```

## License

The MIT License (MIT)
