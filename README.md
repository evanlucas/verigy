# verigy

simple package to strip out unwanted characters for gmail addresses

## Usage

### CLI

```bash
$ npm install -g verigy
$ verigy evan.lucas@gmail.com
=> evan.lucas@gmail.com => evanlucas@gmail.com
```

### Package

```bash
$ npm install --save verigy
```

#### Example

```js
var verigy = require('verigy')
verigy('evan.lucas@gmail.com')
// => 'evanlucas@gmail.com'

verigy('evanlucas+blah@gmail.com')
// => 'evanlucas@gmail.com'
```

## Test

```bash
$ npm test
```

## Author

Evan Lucas

## License

Licensed under the MIT license. For more info, see `LICENSE`
