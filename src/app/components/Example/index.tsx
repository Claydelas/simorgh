// This file exists so that Babel is able to compile.
// Delete this file when we create our first tsx component.

import React from 'react';

type Props = {
  children: JSX.Element | JSX.Element[];
  className: string;
};

const Example = ({ children, className }: Props) => (
  <span className={className}>{children}</span>
);

export default Example;