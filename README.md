# jquery.datahook

Syntactic sugar for jQuery selection using data-hook attributes.

Based on an article written by Will Boyd: [Effective Event Binding with jQuery](http://www.sitepoint.com/effective-event-binding-jquery/).

License: [MIT](https://github.com/Falc/jquery.datahook/blob/master/LICENSE)

## Requirements

* [jQuery](http://jquery.com/) (any version)

## Installation

Using bower:

```
bower install jquery --save
bower install jquery.datahook --save`
```

## Usage

It extends jQuery adding the `$.datahook()` method.

`$.datahook(hookName)` selects elements through `data-hook` attributes:

* **$.datahook()**: Selects all the hook elements.
* **$.datahook('*')**: Same as `$.datahook()`.
* **$.datahook('name')**: Selects any element with `data-hook="name"`.

Alternatively, it is possible to use the `$.hook()` alias.

If another hook-related jQuery plugin uses `$.hook()`, `jquery.datahook` will not register it as alias to prevent conflicts.

## FAQ

### Why using data-hook attributes instead of classes?

**Short answer:** [Separation of concerns](http://en.wikipedia.org/wiki/Separation_of_concerns#HTML.2C_CSS.2C_JavaScript).

**Long answer:** The "select-by-class" approach is very common when using jQuery, but that leads to rely on a class for presentation and behaviour. It would be possible to rename or remove it due to some CSS refactoring and forget it was being used in Javascript too. Changes related to CSS *should not* affect to behaviour.

### What about the speed? Class selector is faster than attribute selector!

["Attribute contains word" selector](http://api.jquery.com/attribute-contains-word-selector/) is *relatively slower* than ["class" selector](http://api.jquery.com/class-selector/), as shown in [this jsPerf benchmark](http://jsperf.com/class-vs-data-attribute-selector-performance/21#runner), but it can perform thousands of operations per second. This is not a bottleneck.

The *pros* of separating the concerns are considerable (code is more maintainable and less error-prone) and the *cons* (slower selection) are unnoticeable.
