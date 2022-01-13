import { Fragment, FunctionComponent } from "react";
import { AppFooter } from "./AppFooter";
import { AppNav } from "./AppNav";
import { HomePage } from "./HomePage";

/**
 * Root visual app component/entrypoint.
 *
 * Even though there might be other providers wrapping this component,
 * this component is the visual entrypoint and hosts all child pages.
 *
 * The component also switches pages based on the current route.
 */
export const App: FunctionComponent = () => {
  return (
    <Fragment>
      {/* <AppNav /> */}
      <HomePage />
      {/* <AppFooter /> */}
    </Fragment>
  );
};
