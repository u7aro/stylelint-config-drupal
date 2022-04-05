"use strict";

module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-order"
  ],
  "rules": {
    "alpha-value-notation": "number",
    "at-rule-no-vendor-prefix": null,
    "color-function-notation": "legacy",
    "comment-empty-line-before": null,
    "custom-property-pattern": "^[a-z][-_a-z0-9IE]*$",
    "declaration-block-no-redundant-longhand-properties": null,
    "function-linear-gradient-no-nonstandard-direction": null,
    "function-url-quotes": null,
    "function-whitespace-after": null,
    "hue-degree-notation": "number",
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "no-unknown-animations": true,
    "max-line-length": null,
    "media-feature-name-no-unknown": [true, {
      "ignoreMediaFeatureNames": [
        "prefers-reduced-motion",
        "min--moz-device-pixel-ratio"
      ]
    }],
    "media-feature-name-no-vendor-prefix": null,
    "number-leading-zero": "always",
    "number-max-precision": 5,
    "order/order": [
      "custom-properties",
      "dollar-variables",
      {
        "type": "at-rule",
        "hasBlock": false
      },
      "declarations",
      "rules",
      {
        "type": "at-rule",
        "hasBlock": true
      }
    ],
    "order/properties-order": [
      "position",
      "z-index",
      "top",
      "right",
      "bottom",
      "left",

      "display",
      "visibility",
      "float",
      "clear",
      "overflow",
      "overflow-x",
      "overflow-y",
      "-ms-overflow-x",
      "-ms-overflow-y",
      "-webkit-overflow-scrolling",
      "clip",
      "zoom",

      "flex",
      "flex-flow",
      "flex-direction",
      "flex-wrap",
      "flex-basis",
      "flex-grow",
      "flex-shrink",
      "flex-order",
      "flex-pack",

      "-ms-grid",
      "grid",
      "grid-area",
      "grid-template",
      "grid-template-areas",
      "-ms-grid-rows",
      "grid-template-rows",
      "-ms-grid-columns",
      "grid-template-columns",
      "grid-row",
      "-ms-grid-row",
      "grid-row-start",
      "grid-row-end",
      "grid-column",
      "-ms-grid-column",
      "grid-column-start",
      "grid-column-end",
      "grid-auto-rows",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-gap",
      "grid-row-gap",
      "grid-column-gap",
      "-ms-grid-row-align",
      "-ms-grid-column-align",

      "place-content",
      "place-items",
      "align-content",
      "align-items",
      "align-self",
      "justify-content",
      "justify-items",
      "justify-self",

      "order",

      "-webkit-box-sizing",
      "-moz-box-sizing",
      "box-sizing",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "margin-block-start",
      "margin-block-end",
      "margin-inline-start",
      "margin-inline-end",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "padding-block-start",
      "padding-block-end",
      "padding-inline-start",
      "padding-inline-end",

      "table-layout",
      "-webkit-columns",
      "-moz-columns",
      "columns",
      "-webkit-column-span",
      "-moz-column-span",
      "column-span",
      "-webkit-column-width",
      "-moz-column-width",
      "column-width",
      "-webkit-column-count",
      "-moz-column-count",
      "column-count",
      "-webkit-column-fill",
      "-moz-column-fill",
      "column-fill",
      "-webkit-column-gap",
      "-moz-column-gap",
      "column-gap",
      "-webkit-column-rule",
      "-moz-column-rule",
      "column-rule",
      "-webkit-column-rule-width",
      "-moz-column-rule-width",
      "column-rule-width",
      "-webkit-column-rule-style",
      "-moz-column-rule-style",
      "column-rule-style",
      "-webkit-column-rule-color",
      "-moz-column-rule-color",
      "column-rule-color",
      "empty-cells",
      "caption-side",
      "border-spacing",
      "border-collapse",
      "$counter-style",
      "list-style",
      "list-style-position",
      "list-style-type",
      "list-style-image",

      "content",
      "quotes",
      "counter-reset",
      "counter-increment",
      "resize",
      "cursor",
      "-webkit-user-select",
      "-moz-user-select",
      "-ms-user-select",
      "user-select",
      "nav-index",
      "nav-up",
      "nav-right",
      "nav-down",
      "nav-left",
      "-webkit-transition",
      "-moz-transition",
      "-ms-transition",
      "-o-transition",
      "transition",
      "-webkit-transition-delay",
      "-moz-transition-delay",
      "-ms-transition-delay",
      "-o-transition-delay",
      "transition-delay",
      "-webkit-transition-timing-function",
      "-moz-transition-timing-function",
      "-ms-transition-timing-function",
      "-o-transition-timing-function",
      "transition-timing-function",
      "-webkit-transition-duration",
      "-moz-transition-duration",
      "-ms-transition-duration",
      "-o-transition-duration",
      "transition-duration",
      "-webkit-transition-property",
      "-moz-transition-property",
      "-ms-transition-property",
      "-o-transition-property",
      "transition-property",
      "-webkit-transform",
      "-moz-transform",
      "-ms-transform",
      "-o-transform",
      "transform",
      "-webkit-transform-origin",
      "-moz-transform-origin",
      "-ms-transform-origin",
      "-o-transform-origin",
      "transform-origin",
      "$keyframes",
      "-webkit-animation",
      "-moz-animation",
      "-ms-animation",
      "-o-animation",
      "animation",
      "-webkit-animation-name",
      "-moz-animation-name",
      "-ms-animation-name",
      "-o-animation-name",
      "animation-name",
      "-webkit-animation-duration",
      "-moz-animation-duration",
      "-ms-animation-duration",
      "-o-animation-duration",
      "animation-duration",
      "-webkit-animation-play-state",
      "-moz-animation-play-state",
      "-ms-animation-play-state",
      "-o-animation-play-state",
      "animation-play-state",
      "-webkit-animation-timing-function",
      "-moz-animation-timing-function",
      "-ms-animation-timing-function",
      "-o-animation-timing-function",
      "animation-timing-function",
      "-webkit-animation-delay",
      "-moz-animation-delay",
      "-ms-animation-delay",
      "-o-animation-delay",
      "animation-delay",
      "-webkit-animation-iteration-count",
      "-moz-animation-iteration-count",
      "-ms-animation-iteration-count",
      "-o-animation-iteration-count",
      "animation-iteration-count",
      "-webkit-animation-direction",
      "-moz-animation-direction",
      "-ms-animation-direction",
      "-o-animation-direction",
      "animation-direction",
      "text-align",
      "-webkit-text-align-last",
      "-moz-text-align-last",
      "-ms-text-align-last",
      "text-align-last",
      "vertical-align",
      "white-space",
      "text-decoration",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-style",
      "text-emphasis-position",
      "text-indent",
      "-ms-text-justify",
      "text-justify",
      "text-transform",
      "letter-spacing",
      "word-spacing",
      "-ms-writing-mode",
      "text-outline",
      "text-transform",
      "text-wrap",
      "text-overflow",
      "-ms-text-overflow",
      "text-overflow-ellipsis",
      "text-overflow-mode",
      "-ms-word-wrap",
      "word-wrap",
      "word-break",
      "-ms-word-break",
      "-moz-tab-size",
      "-o-tab-size",
      "tab-size",
      "-webkit-hyphens",
      "-moz-hyphens",
      "hyphens",
      "pointer-events",
      "direction",
      "unicode-bidi",
      "orphans",
      "widows",
      "object-fit",
      "object-position",

      "opacity",
      "filter:progid:DXImageTransform.Microsoft.Alpha(Opacity",
      "-ms-filter:\\'progid:DXImageTransform.Microsoft.Alpha",
      "-webkit-filter",
      "-ms-filter",
      "filter",
      "-ms-interpolation-mode",
      "color",
      "border",
      "border-collapse",
      "border-width",
      "border-style",
      "border-color",
      "border-top",
      "border-top-width",
      "border-top-style",
      "border-top-color",
      "border-right",
      "border-right-width",
      "border-right-style",
      "border-right-color",
      "border-bottom",
      "border-bottom-width",
      "border-bottom-style",
      "border-bottom-color",
      "border-left",
      "border-left-width",
      "border-left-style",
      "border-left-color",
      "border-block-start",
      "border-block-start-width",
      "border-block-start-style",
      "border-block-start-color",
      "border-inline-end",
      "border-inline-end-width",
      "border-inline-end-style",
      "border-inline-end-color",
      "border-block-end",
      "border-block-end-width",
      "border-block-end-style",
      "border-block-end-color",
      "border-inline-start",
      "border-inline-start-width",
      "border-inline-start-style",
      "border-inline-start-color",
      "-webkit-border-radius",
      "-moz-border-radius",
      "border-radius",
      "-webkit-border-top-left-radius",
      "-moz-border-radius-topleft",
      "border-top-left-radius",
      "-webkit-border-top-right-radius",
      "-moz-border-radius-topright",
      "border-top-right-radius",
      "-webkit-border-bottom-right-radius",
      "-moz-border-radius-bottomright",
      "border-bottom-right-radius",
      "-webkit-border-bottom-left-radius",
      "-moz-border-radius-bottomleft",
      "border-bottom-left-radius",
      "-webkit-border-image",
      "-moz-border-image",
      "-o-border-image",
      "border-image",
      "-webkit-border-image-source",
      "-moz-border-image-source",
      "-o-border-image-source",
      "border-image-source",
      "-webkit-border-image-slice",
      "-moz-border-image-slice",
      "-o-border-image-slice",
      "border-image-slice",
      "-webkit-border-image-width",
      "-moz-border-image-width",
      "-o-border-image-width",
      "border-image-width",
      "-webkit-border-image-outset",
      "-moz-border-image-outset",
      "-o-border-image-outset",
      "border-image-outset",
      "-webkit-border-image-repeat",
      "-moz-border-image-repeat",
      "-o-border-image-repeat",
      "border-image-repeat",
      "outline",
      "outline-width",
      "outline-style",
      "outline-color",
      "outline-offset",
      "background",
      "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader",
      "background-color",
      "background-image",
      "background-repeat",
      "background-attachment",
      "background-position",
      "background-position-x",
      "-ms-background-position-x",
      "background-position-y",
      "-ms-background-position-y",
      "-webkit-background-clip",
      "-moz-background-clip",
      "background-clip",
      "background-origin",
      "-webkit-background-size",
      "-moz-background-size",
      "-o-background-size",
      "background-size",
      "box-decoration-break",
      "-webkit-box-shadow",
      "-moz-box-shadow",
      "box-shadow",
      "filter:progid:DXImageTransform.Microsoft.gradient",
      "-ms-filter:\\'progid:DXImageTransform.Microsoft.gradient",
      "text-shadow",

      "$font-face",
      "font",
      "font-family",
      "src",
      "$font-feature-values",
      "$swash",
      "$annotation",
      "$ornaments",
      "$stylistic",
      "$styleset",
      "$character-variant",
      "font-variant-alternates",
      "font-size",
      "font-weight",
      "font-style",
      "font-variant",
      "font-size-adjust",
      "font-stretch",
      "font-effect",
      "font-emphasize",
      "font-emphasize-position",
      "font-emphasize-style",
      "font-smooth",
      "line-height"
    ],
    "property-no-unknown": null,
    "property-no-vendor-prefix": null,
    "rule-empty-line-before": null,
    "selector-attribute-quotes": null,
    "selector-class-pattern": null,
    "selector-id-pattern": "^[a-z][-_a-z0-9]*$",
    "selector-no-vendor-prefix": null,
    "selector-pseudo-element-colon-notation": null,
    "shorthand-property-no-redundant-values": null,
    "string-quotes": "double",
    "unit-allowed-list": ["ch", "deg", "em", "ex", "fr", "ms", "rem", "%", "s", "px", "vw", "vh"],
    "value-keyword-case": ["lower", {
      "camelCaseSvgKeywords": true,
      "ignoreProperties": [
        "--font-family",
        "font-family"
      ]
    }],
    "value-no-vendor-prefix": null
  }
};
