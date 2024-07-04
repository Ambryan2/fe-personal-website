import React from "react";
import * as stylex from "@stylexjs/stylex";

const background = stylex.create({
  base: {
    backgroundColor: "lightblue",
    position: "fixed",
    overflow: "auto",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

/**
 *
 * @param {HomePageBackgroundProps} HomePageBackgroundProps
 */
export const HomePageBackground = ({ children }) => {
  return <div {...stylex.props(background.base)}>{children}</div>;
};
