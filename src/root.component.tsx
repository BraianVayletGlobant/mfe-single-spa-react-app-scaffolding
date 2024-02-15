import Demo from "@components/atoms/Demo";

const Root = ({ name }: { name: string }): JSX.Element => {
  return (
    <>
      <script src="/__ENV.js" defer />
      <section>
        {name} is mounted!
        {/* <p>{env["NAME"]}</p> */}
        <Demo />
      </section>
    </>
  );
};

export default Root;
