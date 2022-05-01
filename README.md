<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# incrmmape

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a moving [mean absolute percentage error][mean-absolute-percentage-error] incrementally.

<section class="intro">

For a window of size `W`, the [mean absolute percentage error][mean-absolute-percentage-error] is defined as

<!-- <equation class="equation" label="eq:mean_absolute_percentage_error" align="center" raw="\operatorname{MAPE}  = \frac{100}{W} \sum_{i=0}^{W-1} \biggl| \frac{a_i - f_i}{a_i} \biggr|" alt="Equation for the mean absolute percentage error."> -->

<div class="equation" align="center" data-raw-text="\operatorname{MAPE}  = \frac{100}{W} \sum_{i=0}^{W-1} \biggl| \frac{a_i - f_i}{a_i} \biggr|" data-equation="eq:mean_absolute_percentage_error">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@f13330c8d3bb837438b30381f6cd70dbccd4837c/lib/node_modules/@stdlib/stats/incr/mmape/docs/img/equation_mean_absolute_percentage_error.svg" alt="Equation for the mean absolute percentage error.">
    <br>
</div>

<!-- </equation> -->

where `f_i` is the forecast value and `a_i` is the actual value.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-incr-mmape
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var incrmmape = require( '@stdlib/stats-incr-mmape' );
```

#### incrmmape( window )

Returns an accumulator `function` which incrementally computes a moving [mean absolute percentage error][mean-absolute-percentage-error]. The `window` parameter defines the number of values over which to compute the moving [mean absolute percentage error][mean-absolute-percentage-error].

```javascript
var accumulator = incrmmape( 3 );
```

#### accumulator( \[f, a] )

If provided input values `f` and `a`, the accumulator function returns an updated [mean absolute percentage error][mean-absolute-percentage-error]. If not provided input values `f` and `a`, the accumulator function returns the current [mean absolute percentage error][mean-absolute-percentage-error].

```javascript
var accumulator = incrmmape( 3 );

var m = accumulator();
// returns null

// Fill the window...
m = accumulator( 2.0, 3.0 ); // [(2.0,3.0)]
// returns ~33.33

m = accumulator( 1.0, 4.0 ); // [(2.0,3.0), (1.0,4.0)]
// returns ~54.17

m = accumulator( 3.0, 9.0 ); // [(2.0,3.0), (1.0,4.0), (3.0,9.0)]
// returns ~58.33

// Window begins sliding...
m = accumulator( 7.0, 3.0 ); // [(1.0,4.0), (3.0,9.0), (7.0,3.0)]
// returns ~91.67

m = accumulator( 5.0, 3.0 ); // [(3.0,9.0), (7.0,3.0), (5.0,3.0)]
// returns ~88.89

m = accumulator();
// returns ~88.89
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

-   As `W` (f,a) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.  

-   **Warning**: the [mean absolute percentage error][mean-absolute-percentage-error]  has several shortcomings: 

    -   The measure is **not** suitable for intermittent demand patterns (i.e., when `a_i` is `0`).
    -   The [mean absolute percentage error][mean-absolute-percentage-error] is not symmetrical, as the measure cannot exceed 100% for forecasts which are too "low" and has no limit for forecasts which are too "high".
    -   When used to compare the accuracy of forecast models (e.g., predicting demand), the measure is biased toward forecasts which are too low.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var incrmmape = require( '@stdlib/stats-incr-mmape' );

var accumulator;
var v1;
var v2;
var i;

// Initialize an accumulator:
accumulator = incrmmape( 5 );

// For each simulated datum, update the moving mean absolute percentage error...
for ( i = 0; i < 100; i++ ) {
    v1 = ( randu()*100.0 ) + 50.0;
    v2 = ( randu()*100.0 ) + 50.0;
    accumulator( v1, v2 );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/incr/mape`][@stdlib/stats/incr/mape]</span><span class="delimiter">: </span><span class="description">compute the mean absolute percentage error (MAPE) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmaape`][@stdlib/stats/incr/mmaape]</span><span class="delimiter">: </span><span class="description">compute a moving arctangent mean absolute percentage error (MAAPE) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmpe`][@stdlib/stats/incr/mmpe]</span><span class="delimiter">: </span><span class="description">compute a moving mean percentage error (MPE) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmean`][@stdlib/stats/incr/mmean]</span><span class="delimiter">: </span><span class="description">compute a moving arithmetic mean incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-mmape.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-mmape

[test-image]: https://github.com/stdlib-js/stats-incr-mmape/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-incr-mmape/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-mmape/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-mmape?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-mmape.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-mmape/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-mmape/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-incr-mmape/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-incr-mmape/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-incr-mmape/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-mmape/main/LICENSE

[mean-absolute-percentage-error]: https://en.wikipedia.org/wiki/Mean_absolute_percentage_error

<!-- <related-links> -->

[@stdlib/stats/incr/mape]: https://github.com/stdlib-js/stats-incr-mape

[@stdlib/stats/incr/mmaape]: https://github.com/stdlib-js/stats-incr-mmaape

[@stdlib/stats/incr/mmpe]: https://github.com/stdlib-js/stats-incr-mmpe

[@stdlib/stats/incr/mmean]: https://github.com/stdlib-js/stats-incr-mmean

<!-- </related-links> -->

</section>

<!-- /.links -->
