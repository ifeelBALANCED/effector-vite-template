import { configure } from "@storybook/react";

const req = require.context("../src", true, /\.stories\.tsx$/);

const loadStories = () => {
  req.keys().forEach(req);
};

configure(loadStories, module);