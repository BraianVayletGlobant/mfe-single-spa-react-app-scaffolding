const Root = ({ name }: { name: string }): JSX.Element => {
  return (
    <>
      <script src="/__ENV.js" defer />
      <section>
        {name} is mounted!
        {/* <p>{env["NAME"]}</p> */}
      </section>
    </>
  );
};

export default Root;
