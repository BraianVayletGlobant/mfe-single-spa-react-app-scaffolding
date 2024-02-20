import { FC } from "react";
// types
import { IHomeModuleProps } from "./Home.interfaces";

/**
 * @module PageComponents
 * @component HomeModule
 * @description A Page Component to display the Home section
 * @param {IHomeModuleProps} props
 * @param {string} props.name
 * @returns {JSX.Element}
 */
const HomeModule: FC<IHomeModuleProps> = ({ name }): JSX.Element => {
  return (
    <section className="HomeModule__container">
      <h1>{name} section</h1>
      <p>
        This is a <b>Page Component</b>
      </p>
    </section>
  );
};

export default HomeModule;
