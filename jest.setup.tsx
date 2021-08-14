import "@testing-library/jest-dom";
import { render, RenderResult } from "@testing-library/react";
import React from "react";

// `Global` interface
export interface Global extends NodeJS.Global {
  render<P extends object>(Component: React.ComponentType<P>, props: P): RenderResult;
  tearDown(): void;
}

declare const global: Global;

let cachedComponent: RenderResult | null;

global.render = <P extends object>(Component: React.ComponentType<P>, props: P): RenderResult => {
  if (!cachedComponent) {
    cachedComponent = render(<Component {...props} />);
  }

  return cachedComponent;
};

global.tearDown = (): void => {
  if (cachedComponent) {
    cachedComponent.unmount();
    cachedComponent = null;
  }
};
