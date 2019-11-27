/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/* 6: Handle selectedOptions, update demo */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import '../css/px-spacing-responsive-design-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
  <!-- 0: Import the styles-->
  <style include="px-spacing-responsive-design-demo-styles" is="custom-style"></style>

<!-- 1: Describe Module -->
<px-sass-doc module-name="px-spacing-responsive-design" description="The Predix UI Spacing Responsive module is an extension of the default px-spacing-design module and provides breakpoint-based classes for nudging margins and paddings around responsively." layer="trumps" sassdoc-path="sassdoc.json" dependencies="[
    &quot;https://github.com/PredixDev/px-spacing-design&quot;,
    &quot;https://github.com/PredixDev/px-helpers-design&quot;
  ]" selected-options="{{selectedOptions}}">

<!-- 2: Set Options -->
<px-sass-doc-option slot="options" option-name="Margin Size" choose-with="dropdown" choices="[
    &quot;tiny&quot;,
    &quot;small&quot;,
    &quot;regular (default)&quot;,
    &quot;large&quot;,
    &quot;huge&quot;,
    &quot;none&quot;,
    &quot;negative-tiny&quot;,
    &quot;negative-small&quot;,
    &quot;negative-regular&quot;,
    &quot;negative-large&quot;,
    &quot;negative-huge&quot;
  ]" default-choice="regular (default)">
</px-sass-doc-option>

<px-sass-doc-option slot="options" option-name="Margin Direction" choose-with="dropdown" choices="[
    &quot;all (default)&quot;,
    &quot;top&quot;,
    &quot;right&quot;,
    &quot;bottom&quot;,
    &quot;left&quot;,
    &quot;vertical&quot;,
    &quot;horizontal&quot;
  ]" default-choice="all (default)">
</px-sass-doc-option>

<px-sass-doc-option slot="options" option-name="Padding Size" choose-with="dropdown" choices="[
    &quot;none&quot;,
    &quot;tiny&quot;,
    &quot;small&quot;,
    &quot;regular (default)&quot;,
    &quot;large&quot;,
    &quot;huge&quot;
  ]" default-choice="regular (default)">
</px-sass-doc-option>

<px-sass-doc-option slot="options" option-name="Padding Direction" choose-with="dropdown" choices="[
    &quot;all (default)&quot;,
    &quot;top&quot;,
    &quot;right&quot;,
    &quot;bottom&quot;,
    &quot;left&quot;,
    &quot;vertical&quot;,
    &quot;horizontal&quot;
  ]" default-choice="all (default)">
</px-sass-doc-option>

<px-sass-doc-option slot="options" option-name="Reverse RTL" choose-with="boolean">
</px-sass-doc-option>

<px-sass-doc-option slot="options" option-name="Breakpoint" choose-with="dropdown" choices="[
    &quot;desk&quot;,
    &quot;portable&quot;,
    &quot;lap-and-up&quot;,
    &quot;lap&quot;,
    &quot;palm&quot;
  ]" default-choice="desk">
</px-sass-doc-option>

<!-- 3: Make HTML Demo -->
<section slot="demo-html" style="border: 1px solid black; opacity: 0.5;width:max-content" dir="{{direction}}">
<div id="parent" class\$="{{divClasses}}">
  <div id="child"></div>
</div>
</section>

<!-- 4: Set Import Slot -->
<section slot="import">
{{importCode}}
</section>

<!-- 5: Set Usage HTML -->
<section slot="usage">
For each "breakpoint" set in px-helpers-design [\$breakpoint list](https://github.com/PredixDev/px-helpers-design/blob/master/_generic.helpers.scss#L23-L30), a class will be appended i.e. u-[breakpoint-name]-classname, where the classname follows the following convention. Margin dimensions are set in the Predix UI [spacing-design](https://github.com/PredixDev/px-spacing-design) module.
\`\`\`
.u-[breakpoint]-[negative][type][direction][size]
\`\`\`
</section>

</px-sass-doc>
`,

  is: 'px-spacing-responsive-design-demo',

  attached : function(){
    var boundHandler = this._handleOptionsUpdated.bind(this);
    this.addEventListener('px-sass-doc-options-updated', boundHandler)
  },

  detached : function(){
    this.removeEventListener('px-sass-doc-options-updated', boundHandler);
  },

  _handleOptionsUpdated: function(evt) {
    this.importCode = this._importCode();
    this.divClasses = this._divClasses();
    this.direction = this._direction();

    // Wait, then tell the highlighter to run after dom-if restamps
    this.async(function(){ this.fire('px-sass-doc-demo-updated', {}) }, 10);
  },

  _divClasses: function() {
    var opts = this.selectedOptions || {}, strings = [], margin="u-", padding="u-";
                                                      margin+=opts.Breakpoint;
    if(opts["Margin Size"].indexOf('negative') > -1)  margin+="-";
                                                      margin+="-m"
    if(opts["Margin Direction"] === "top")            margin+="t";
    if(opts["Margin Direction"] === "right")          margin+="r";
    if(opts["Margin Direction"] === "bottom")         margin+="b";
    if(opts["Margin Direction"] === "left")           margin+="l";
    if(opts["Margin Direction"] === "vertical")       margin+="v";
    if(opts["Margin Direction"] === "horizontal")     margin+="h";
    if(opts["Margin Size"] === "none")                margin+="0";
    if(opts["Margin Size"].indexOf('tiny') > -1)      margin+="--";
    if(opts["Margin Size"].indexOf('small') > -1)     margin+="-";
    if(opts["Margin Size"].indexOf('large') > -1)     margin+="+";
    if(opts["Margin Size"].indexOf('huge') > -1)      margin+="++";
                                                      padding+=opts.Breakpoint;
                                                      padding+="-p";
    if(opts["Padding Direction"] === "top")           padding+="t";
    if(opts["Padding Direction"] === "right")         padding+="r";
    if(opts["Padding Direction"] === "bottom")        padding+="b";
    if(opts["Padding Direction"] === "left")          padding+="l";
    if(opts["Padding Direction"] === "vertical")      padding+="v";
    if(opts["Padding Direction"] === "horizontal")    padding+="h";
    if(opts["Padding Size"] === "none")               padding+="0";
    if(opts["Padding Size"] === 'tiny')               padding+="--";
    if(opts["Padding Size"] === 'small')              padding+="-";
    if(opts["Padding Size"] === 'large')              padding+="+";
    if(opts["Padding Size"] === 'huge')               padding+="++";

  strings.push(margin);
  strings.push(padding);
  return strings.join(" ").trim();
  },

  _importCode: function() {
    var opts = this.selectedOptions || {}, strings = [];
    if (opts["Margin Size"] === "negative-huge")      strings.push("$inuit-enable-responsive-margins--negative-huge : true;");
    if (opts["Margin Size"] === "negative-large")     strings.push("$inuit-enable-responsive-margins--negative-large : true;");
    if (opts["Margin Size"] === "negative")           strings.push("$inuit-enable-responsive-margins--negative : true;");
    if (opts["Margin Size"] === "negative-small")     strings.push("$inuit-enable-responsive-margins--negative-small : true;");
    if (opts["Margin Size"] === "negative-tiny")      strings.push("$inuit-enable-responsive-margins--negative-tiny : true;");
    if (opts["Margin Size"] === "none")               strings.push("$inuit-enable-responsive-margins--none : true;");
    if (opts["Margin Size"] === "tiny")               strings.push("$inuit-enable-responsive-margins--tiny : true;");
    if (opts["Margin Size"] === "small")              strings.push("$inuit-enable-responsive-margins--small : true;");
    if (opts["Margin Size"] === "regular (default)")  strings.push("$inuit-enable-responsive-margins : true;");
    if (opts["Margin Size"] === "large")              strings.push("$inuit-enable-responsive-margins--large : true;");
    if (opts["Margin Size"] === "huge")               strings.push("$inuit-enable-responsive-margins--huge : true;");
    if (opts["Reverse RTL"] === true)                 strings.push("$inuit-enable-responsive-margins--rtl : true;");
    if (opts["Padding Size"] === "none")              strings.push("$inuit-enable-responsive-paddings--none : true;");
    if (opts["Padding Size"] === "tiny")              strings.push("$inuit-enable-responsive-paddings--tiny : true;");
    if (opts["Padding Size"] === "small")             strings.push("$inuit-enable-responsive-paddings--small : true;");
    if (opts["Padding Size"] === "regular (default)") strings.push("$inuit-enable-responsive-paddings : true;");
    if (opts["Padding Size"] === "large")             strings.push("$inuit-enable-responsive-paddings--large : true;");
    if (opts["Padding Size"] === "huge")              strings.push("$inuit-enable-responsive-paddings--huge : true;");
    if (opts["Reverse RTL"] === true)                 strings.push("$inuit-enable-responsive-paddings--rtl : true;");
    return (strings.join("\n") + "\n@import 'px-spacing-responsive-design/_trumps.spacing-responsive.scss';").trim();
  },

  _direction: function() {
  var opts = this.selectedOptions || {};
  if(opts["Reverse RTL"] === true) {
    return 'rtl';
  }
  else {
    return 'ltr';
  }
}
});
