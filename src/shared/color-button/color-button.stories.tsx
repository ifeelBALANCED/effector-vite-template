import { storiesOf } from '@storybook/react';

import ColorButton from './color-button';

storiesOf('ColorButton', module)
  .add('red', () => <ColorButton color="red" />)
  .add('blue', () => <ColorButton color="blue" />);
