interface LayoutIntepreterProps {
  layoutType: string;
}

const LayoutIntepreter = ({
  layoutType,
}: LayoutIntepreterProps): JSX.Element => {
  console.log(layoutType);

  return <div />;
};

export default LayoutIntepreter;
