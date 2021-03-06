/**
 * @copyright   2010-2017, The Titon Project
 * @license     http://opensource.org/licenses/BSD-3-Clause
 * @link        http://titon.io
 * @flow
 */

import React from 'react';
import Input from './Input';
import style from '../../styler';
import { INPUT_CLASSES } from './types';

import type { InputProps } from './types';

export function ToolkitNativeCheckbox(props: InputProps) {
  return (
    <Input {...props} type="checkbox" />
  );
}

export default style({
  ...INPUT_CLASSES,
  input: 'input input-checkbox',
})(ToolkitNativeCheckbox);
