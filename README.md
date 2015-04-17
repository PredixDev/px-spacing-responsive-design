# Spacing Responsive

The Predix Experience Spacing Responsive module is an extension of the default [px-spacing-design](https://github.sw.ge.com/PXd/px-spacing-design) module and provides breakpoint-based classes for nudging margins and paddings around responsively. This module is a fork of inuitcss' [spacing-responsive](https://github.com/inuitcss/trumps.spacing-responsive) module.

The Spacing Responsive module loops through the breakpoints defined in inuitcss' [settings.responsive](https://github.com/inuitcss/settings.responsive) module to generate prefixed breakpoint-based classes. If you are using inuitcss’ default breakpoints, you will be given classes like `lap-and-up-m0`, or `desk-pt++`, etc.

Based on the breakpoints defined in the `$breakpoints` Sass list, then the margins or padding determined by classes in your markup will be triggered.

For example, a `$breakpoint` named `desk` which defines a media-query for viewports wider than 1024 pixels, the class `.desk-m0` would zero out all margins with a viewport above 1024 pixels. At narrower viewports `.desk-m0` has no effect.

## Dependencies

Px's Spacing Responsive module depends on five other Px and inuitcss modules:

* [px-defaults-design](https://github.sw.ge.com/PXd/px-defaults-design)
* [settings.responsive](https://github.com/inuitcss/settings.responsive)
* [px-functions-design](https://github.sw.ge.com/PXd/px-functions-design)
* [tools.responsive](https://github.com/inuitcss/tools.responsive)
* [px-spacing-design](https://github.sw.ge.com/PXd/px-spacing-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save https://github.sw.ge.com/PXd/px-spacing-responsive-design.git

Once installed, `@import` into your project's Sass file in its Trumps layer:

    @import "../px-spacing-responsive-design/trumps.spacing-responsive";

See [px-getting-started](https://github.sw.ge.com/PXd/px-getting-started#a-note-about-relative-import-paths) for an explanation of the `../`

## Import once

All rulesets are wrapped in the following `@if` statement:

    @if import-once('trumps.spacing-responsive') { ... }

## Usage

These flags are available and, if needed, should be set to `true` prior to importing the module:

    $inuit-enable-responsive-margins
    $inuit-enable-responsive-margins--tiny
    $inuit-enable-responsive-margins--small
    $inuit-enable-responsive-margins--large
    $inuit-enable-responsive-margins--huge
    
    $inuit-enable-responsive-margins--negative
    $inuit-enable-responsive-margins--negative-tiny
    $inuit-enable-responsive-margins--negative-small
    $inuit-enable-responsive-margins--negative-large
    $inuit-enable-responsive-margins--negative-huge
    
    $inuit-enable-responsive-margins--none
    
    $inuit-enable-responsive-paddings
    $inuit-enable-responsive-paddings--tiny
    $inuit-enable-responsive-paddings--small
    $inuit-enable-responsive-paddings--large
    $inuit-enable-responsive-paddings--huge
    
    $inuit-enable-responsive-paddings--none

The conventions used in the classes in the Spacing Responsive module are as follows:

    .[breakpoint]-[negative][type][direction][size] {}

## Options

For each "breakpoint" set in inuitcss' [settings.responsive](https://github.com/inuitcss/settings.responsive) `$breakpoint` Sass list, the classes below will be appended i.e. `[breakpoint-name]-classname`. Margin dimensions are set in Px's [Spacing](https://github.sw.ge.com/PXd/px-spacing-design) module.

These classes are available if the following variable flags are set to `true`:

`$inuit-enable-responsive-margins`:

* `.*-m`: add default margins to all sides
* `.*-mt`: add default margin top
* `.*-mr`: add default margin right
* `.*-mb`: add default margin bottom
* `.*-ml`: add default margin left
* `.*-mh`: add default margins right and left
* `.*-mv`: add default margins top and bottom

`$inuit-enable-responsive-margins--tiny`:

* `.*-m--`: add tiny margins to all sides
* `.*-mt--`: add tiny margin top
* `.*-mr--`: add tiny margin right
* `.*-mb--`: add tiny margin bottom
* `.*-ml--`: add tiny margin left
* `.*-mh--`: add tiny margins right and left
* `.*-mv--`: add tiny margins top and bottom

`$inuit-enable-responsive-margins--small`:

* `.*-m-`: add small margins to all sides
* `.*-mt-`: add small margin top
* `.*-mr-`: add small margin right
* `.*-mb-`: add small margin bottom
* `.*-ml-`: add small margin left
* `.*-mh-`: add small margins right and left
* `.*-mv-`: add small margins top and bottom

`$inuit-enable-responsive-margins--large`:

* `.*-m+`: add large margins to all sides
* `.*-mt+`: add large margin top
* `.*-mr+`: add large margin right
* `.*-mb+`: add large margin bottom
* `.*-ml+`: add large margin left
* `.*-mh+`: add large margins right and left
* `.*-mv+`: add large margins top and bottom

`$inuit-enable-responsive-margins--huge`:

* `.*-m++`: add huge margins to all sides
* `.*-mt++`: add huge margin top
* `.*-mr++`: add huge margin right
* `.*-mb++`: add huge margin bottom
* `.*-ml++`: add huge margin left
* `.*-mh++`: add huge margins right and left
* `.*-mv++`: add huge margins top and bottom

`$inuit-enable-responsive-margins--negative`:

* `.*--m`: add default negative margins to all sides
* `.*--mt`: add default negative margin top
* `.*--mr`: add default negative margin right
* `.*--mb`: add default negative margin bottom
* `.*--ml`: add default negative margin left
* `.*--mh`: add default negative margins right and left
* `.*--mv`: add default negative margins top and bottom

`$inuit-enable-responsive-margins--negative-tiny`:

* `.*--m--`: add tiny negative margins to all sides
* `.*--mt--`: add tiny negative margin top
* `.*--mr--`: add tiny negative margin right
* `.*--mb--`: add tiny negative margin bottom
* `.*--ml--`: add tiny negative margin left
* `.*--mh--`: add tiny negative margins right and left
* `.*--mv--`: add tiny negative margins top and bottom

`$inuit-enable-responsive-margins--negative-small`:

* `.*--m-`: add small negative margins to all sides
* `.*--mt-`: add small negative margin top
* `.*--mr-`: add small negative margin right
* `.*--mb-`: add small negative margin bottom
* `.*--ml-`: add small negative margin left
* `.*--mh-`: add small negative margins right and left
* `.*--mv-`: add small negative margins top and bottom

`$inuit-enable-responsive-margins--negative-large`:

* `.*--m+`: add large negative margins to all sides
* `.*--mt+`: add large negative margin top
* `.*--mr+`: add large negative margin right
* `.*--mb+`: add large negative margin bottom
* `.*--ml+`: add large negative margin left
* `.*--mh+`: add large negative margins right and left
* `.*--mv+`: add large negative margins top and bottom

`$inuit-enable-responsive-margins--negative-huge`:

* `.*--m++`: add huge negative margins to all sides
* `.*--mt++`: add huge negative margin top
* `.*--mr++`: add huge negative margin right
* `.*--mb++`: add huge negative margin bottom
* `.*--ml++`: add huge negative margin left
* `.*--mh++`: add huge negative margins right and left
* `.*--mv++`: add huge negative margins top and bottom

`$inuit-enable-responsive-margins--none`:

* `.*-m0`: remove margins
* `.*-mt0`: remove margin top
* `.*-mr0`: remove margin right
* `.*-mb0`: remove margin bottom
* `.*-ml0`: remove margin left
* `.*-mh0`: remove margins right and left
* `.*-mv0`: remove margins top and bottom

`$inuit-enable-responsive-paddings`:

* `.*-p`: add default padding to all sides
* `.*-pt`: add default padding top
* `.*-pr`: add default padding right
* `.*-pb`: add default padding bottom
* `.*-pl`: add default padding left
* `.*-ph`: add default padding right and left
* `.*-pv`: add default padding top and bottom

`$inuit-enable-responsive-paddings--tiny`:

* `.*-p--`: add tiny padding to all sides
* `.*-pt--`: add tiny padding top
* `.*-pr--`: add tiny padding right
* `.*-pb--`: add tiny padding bottom
* `.*-pl--`: add tiny padding left
* `.*-ph--`: add tiny padding right and left
* `.*-pv--`: add tiny padding top and bottom

`$inuit-enable-responsive-paddings--small`:

* `.*-p-`: add small padding to all sides
* `.*-pt-`: add small padding top
* `.*-pr-`: add small padding right
* `.*-pb-`: add small padding bottom
* `.*-pl-`: add small padding left
* `.*-ph-`: add small padding right and left
* `.*-pv-`: add small padding top and bottom

`$inuit-enable-responsive-paddings--large`:

* `.*-p+`: add large padding to all sides
* `.*-pt+`: add large padding top
* `.*-pr+`: add large padding right
* `.*-pb+`: add large padding bottom
* `.*-pl+`: add large padding left
* `.*-ph+`: add large padding right and left
* `.*-pv+`: add large padding top and bottom

`$inuit-enable-responsive-paddings--huge`:

* `.*-p++`: add huge padding to all sides
* `.*-pt++`: add huge padding top
* `.*-pr++`: add huge padding right
* `.*-pb++`: add huge padding bottom
* `.*-pl++`: add huge padding left
* `.*-ph++`: add huge padding right and left
* `.*-pv++`: add huge padding top and bottom

`$inuit-enable-responsive-paddings--none`:

* `.*-p0`: remove padding
* `.*-pt0`: remove padding top
* `.*-pr0`: remove padding right
* `.*-pb0`: remove padding bottom
* `.*-pl0`: remove padding left
* `.*-ph0`: remove padding right and left
* `.*-pv0`: remove padding top and bottom
