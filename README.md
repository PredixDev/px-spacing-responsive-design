# Spacing Responsive

The Predix Experience Spacing Responsive module provides breakpoint-based classes for nudging margins and paddings around responsively, e.g. `.lap-mb0`, `.desk-mb++`. This module is a fork of the [inuitcss spacing-responsive](https://github.com/inuitcss/trumps.spacing-responsive) module.

## Dependencies

Px's Spacing Responsive module depends on five other Px and inuitcss modules:

* [settings.defaults](https://github.com/inuitcss/settings.defaults)
* [settings.responsive](https://github.com/inuitcss/settings.responsive)
* [px-functions-design](https://github.sw.ge.com/pxc/px-functions-design)
* [tools.responsive](https://github.com/inuitcss/tools.responsive)
* [px-spacing-design](https://github.sw.ge.com/pxc/px-spacing-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save https://github.sw.ge.com/pxc/px-spacing-responsive-design.git

Once installed, `@import` into your project's Sass file in its Trumps layer:

    @import "px-spacing-responsive-design/sass/trumps.spacing-responsive";

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

## Options

For each "breakpoint" set in inuitcss' [settings.responsive](https://github.com/inuitcss/settings.responsive) `$breakpoint` Sass list, the classes below will be appended i.e. `[breakpoint-name]-classname`. Margin dimensions are set in Px's [Spacing](https://github.sw.ge.com/pxc/px-spacing-design) module.

These classes are available if the variable flags listed above are set to `true`:

* `.*-m`: add default margins to all sides
* `.*-mt`: add default margin top
* `.*-mr`: add default margin right
* `.*-mb`: add default margin bottom
* `.*-ml`: add default margin left
* `.*-mh`: add default margins right and left
* `.*-mv`: add default margins top and bottom

* `.*-m--`: add tiny margins to all sides
* `.*-mt--`: add tiny margin top
* `.*-mr--`: add tiny margin right
* `.*-mb--`: add tiny margin bottom
* `.*-ml--`: add tiny margin left
* `.*-mh--`: add tiny margins right and left
* `.*-mv--`: add tiny margins top and bottom

* `.*-m-`: add small margins to all sides
* `.*-mt-`: add small margin top
* `.*-mr-`: add small margin right
* `.*-mb-`: add small margin bottom
* `.*-ml-`: add small margin left
* `.*-mh-`: add small margins right and left
* `.*-mv-`: add small margins top and bottom

* `.*-m+`: add large margins to all sides
* `.*-mt+`: add large margin top
* `.*-mr+`: add large margin right
* `.*-mb+`: add large margin bottom
* `.*-ml+`: add large margin left
* `.*-mh+`: add large margins right and left
* `.*-mv+`: add large margins top and bottom

* `.*-m++`: add huge margins to all sides
* `.*-mt++`: add huge margin top
* `.*-mr++`: add huge margin right
* `.*-mb++`: add huge margin bottom
* `.*-ml++`: add huge margin left
* `.*-mh++`: add huge margins right and left
* `.*-mv++`: add huge margins top and bottom

* `.*-m0`: remove margins
* `.*-mt0`: remove margin top
* `.*-mr0`: remove margin right
* `.*-mb0`: remove margin bottom
* `.*-ml0`: remove margin left
* `.*-mh0`: remove margins right and left
* `.*-mv0`: remove margins top and bottom

* `.*--m`: add default negative margins to all sides
* `.*--mt`: add default negative margin top
* `.*--mr`: add default negative margin right
* `.*--mb`: add default negative margin bottom
* `.*--ml`: add default negative margin left
* `.*--mh`: add default negative margins right and left
* `.*--mv`: add default negative margins top and bottom

* `.*--m--`: add tiny negative margins to all sides
* `.*--mt--`: add tiny negative margin top
* `.*--mr--`: add tiny negative margin right
* `.*--mb--`: add tiny negative margin bottom
* `.*--ml--`: add tiny negative margin left
* `.*--mh--`: add tiny negative margins right and left
* `.*--mv--`: add tiny negative margins top and bottom

* `.*--m-`: add small negative margins to all sides
* `.*--mt-`: add small negative margin top
* `.*--mr-`: add small negative margin right
* `.*--mb-`: add small negative margin bottom
* `.*--ml-`: add small negative margin left
* `.*--mh-`: add small negative margins right and left
* `.*--mv-`: add small negative margins top and bottom

* `.*--m+`: add large negative margins to all sides
* `.*--mt+`: add large negative margin top
* `.*--mr+`: add large negative margin right
* `.*--mb+`: add large negative margin bottom
* `.*--ml+`: add large negative margin left
* `.*--mh+`: add large negative margins right and left
* `.*--mv+`: add large negative margins top and bottom
* 
* `.*--m++`: add huge negative margins to all sides
* `.*--mt++`: add huge negative margin top
* `.*--mr++`: add huge negative margin right
* `.*--mb++`: add huge negative margin bottom
* `.*--ml++`: add huge negative margin left
* `.*--mh++`: add huge negative margins right and left
* `.*--mv++`: add huge negative margins top and bottom

