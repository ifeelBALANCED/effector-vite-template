import { storiesOf } from '@storybook/react';
import { ColorButton } from '@/shared';

storiesOf('ColorButton', module)
  .add('red', () => <ColorButton color="red" />)
  .add('blue', () => <ColorButton color="blue" />);
