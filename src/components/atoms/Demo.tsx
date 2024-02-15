import env from "@beam-australia/react-env";

/**
 * @module Component
 * @components Demo
 * @description A demo component that uses the `env` function to access environment variables
 * @returns {JSX.Element} - Rendered component
 */
const Demo = (): JSX.Element => {
  return <div>Demo: {env("NAME")}</div>;
};

export default Demo;
