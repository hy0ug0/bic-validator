# bic
BIC (Business Identifier Code) format validator

![Release](https://github.com/hy0ug0/bic/workflows/Release/badge.svg?branch=master)
<a href="https://codeclimate.com/github/hy0ug0/bic/maintainability"><img src="https://api.codeclimate.com/v1/badges/1052799875faebe49216/maintainability" /></a>
<a href="https://codeclimate.com/github/hy0ug0/bic/test_coverage"><img src="https://api.codeclimate.com/v1/badges/1052799875faebe49216/test_coverage" /></a>

## Install

```bash
$ npm install bic --save
# OR
$ yarn add bic
```

## Usage

### In Node.js

```javascript
const bic = require('bic');
bic.isValid('12345678'); // false
bic.isValid('CHASUS33'); // true

// OR

import bic from 'bic';
bic.isValid('12345678'); // false
bic.isValid('CHASUS33'); // true
```

### In browser

```html
<script src="https://cdn.jsdelivr.net/npm/bic@[VERSION_NUMBER]/dist/bic.umd.min.js"></script>

<script>
    bic.isValid('12345678'); // false
    bic.isValid('CHASUS33'); // true
</script>
```

## License

The MIT License (MIT)
