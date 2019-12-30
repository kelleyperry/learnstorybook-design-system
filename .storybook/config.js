import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { GlobalStyle } from "../src/shared/global";
import { withA11y } from "@storybook/addon-a11y";
import "storybook-chromatic";

addDecorator(withA11y);
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

// automatically import all files ending in *.stories.js|mdx
configure(
  [
    require.context("../src/components", false, /Intro\.stories\.mdx$/),
    require.context("../src", true, /\.stories\.(js|mdx)$/)
  ],
  module
);
