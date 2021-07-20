// Example from a component make in the Guillermo Rodas live streaming
// using a folder and 3 files, working with stories

// ---------------------------------------------------------------------------

// Heading.js
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import './heading.css'

const Heading = ({children, color, size}) => 
  <heading className={classNames("heading", {
    [`color-${color}`]: color,
    [`size-${size}`]: size,
  })}>{children}</heading> 

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf["primary"],
  size: PropTypes.oneOf[("xs", "sm", "md")],
};

Heading.defaultProps = {
  color: 'default',
  size: 'md'
}

export default Heading

// ---------------------------------------------------------------------------

// Heading.stories.js
import React from "react";
import Heading from "../../atoms/Heading";

export default {
  title: "Atoms/Heading",
  component: Heading,
}

export const Default = () => <Heading>Heading</Heading>
export const Primary = () => <Heading color="primary">Heading</Heading>
export const Small = () => <Heading size="sm">Heading</Heading>
export const ExtraSmall = () => <Heading size="xs">Heading</Heading>

// ---------------------------------------------------------------------------

// Heading.css
// .heading {
//   line-height: 1.25;
// }

// .color-default {
//   color: var(--east-bay);
// }

// .size-md {
//   font-size: 21px;
// }

// size-sm {
//   font-size: 18px;
// }


