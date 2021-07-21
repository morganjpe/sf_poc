import { BrProps } from '@bloomreach/react-sdk';

const Spacer = ({ component }: BrProps): JSX.Element => {
  const { height } = component.getParameters();
  return <div style={{ height: `${height}px` }} />;
};

export default Spacer;
