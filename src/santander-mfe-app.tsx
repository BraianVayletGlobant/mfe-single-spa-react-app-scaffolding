import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err: Error, errInfo: React.ErrorInfo, props: { name: string }) {
    // Customize the root error boundary for your microfrontend here.
    console.error(err, errInfo, props);
    return (
      <div>
        <p>Error: {err.message}</p>
        <p>Info: {errInfo.componentStack}</p>
        <p>{props}</p>
      </div>
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
