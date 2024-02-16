import env from "@beam-australia/react-env";

console.info("env(ENV)", env("ENV"));

const Root = ({ name }: { name: string }): JSX.Element => {
  return (
    <>
      <script src="/__ENV.js" defer />
      <section>{name} is mounted!</section>
    </>
  );
};

export default Root;
