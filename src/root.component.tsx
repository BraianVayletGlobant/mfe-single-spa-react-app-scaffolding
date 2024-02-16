const Root = ({ name }: { name: string }): JSX.Element => {
  return (
    <>
      <script src="/__ENV.js" defer />
      <section>
        <p>{name} is mounted!</p>
      </section>
    </>
  );
};

export default Root;
