const Root = ({ name }: { name: string }): JSX.Element => {
  return (
    <>
      <script src="/__ENV.js" defer />
      <section>{name} is mounted!</section>
    </>
  );
};

export default Root;
