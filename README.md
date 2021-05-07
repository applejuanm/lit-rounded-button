# \<lit-rounded-button>
Lit-Element to implement a button with rounded corners.

## Properties

- **disabled**: Boolean property to make the button disabled.

## Styles

You can customize it using CSS Custom Properties.

Custom property | Description | Default
----------------|-------------|---------
--lit-rounded-button-border-radius | Button border radius | 30px
--lit-rounded-button-background-color | Button background color | #e74c3c
--lit-rounded-button-height | Height of the button | 30px
--lit-rounded-button-text-color | Button text color | #fff
--lit-rounded-button-hover-background-color | Button hover background color | #303030
--lit-rounded-button-hover-text-color | Button hover text color | #fff
--lit-rounded-button-animation-time | Hover button color animation | 0.3s
--lit-rounded-button-padding-x | Horizontal padding | 20px
--lit-rounded-button-padding-y | Vertical padding | 5px
--lit-rounded-button-text-transform | Text transform | uppercase
--lit-rounded-button-font-size | Button text size | 1em
--lit-rounded-button-font-weight | Button font weight | normal

## Events

This component dispatch a custom event when the user clicks the button

- **lit-rounded-button-click**: there was a click in the button. If the button is in disabled state, the component do not dispatch the eventlit