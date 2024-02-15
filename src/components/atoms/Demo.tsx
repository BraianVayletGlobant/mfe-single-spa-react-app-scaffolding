import env from "@beam-australia/react-env";

const Demo = (): JSX.Element => {
  return <div>Demo: {env("NAME")}</div>;
};

export default Demo;
