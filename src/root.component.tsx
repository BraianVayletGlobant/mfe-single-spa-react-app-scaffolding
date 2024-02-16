import { Button } from "@components/atoms/Button";

const Root = ({ name }: { name: string }): JSX.Element => {
  return (
    <>
      <script src="/__ENV.js" defer />
      <section>
        <p>{name} is mounted!</p>
        <Button label="Click me" />
        <Button label="Click me 2" />
      </section>
    </>
  );
};

export default Root;
