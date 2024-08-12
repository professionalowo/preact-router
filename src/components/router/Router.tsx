import { useEffect, useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";
import { LocationContext } from "./locationContext";
import { NotFound404 } from "./404";

export type RouterProps = {
  routes: Array<RouteProps>;
  notFound?: JSX.Element;
};
export function Router({ routes, notFound }: RouterProps) {
  const [url, setUrl] = useState(new URL(location.href));
  useEffect(() => {
    window.addEventListener("hashchange", onNavigate);
    return () => window.removeEventListener("hashchange", onNavigate);
  }, []);

  const onNavigate = (event: HashChangeEvent) => {
    setUrl(new URL(event.newURL));
  };

  const filterCurrentRoute = () => {
    const route = routes.filter((route) => route.path === url.pathname);

    if (route.length === 0) return notFound ?? <NotFound404 />;

    return route[0].element;
  };

  return (
    <LocationContext.Provider value={url}>
      {filterCurrentRoute()}
    </LocationContext.Provider>
  );
}

type RouteProps = {
  path: string;
  element: JSX.Element;
};
Router.Route = function ({ element, path }: RouteProps) {
  return { element, path };
};
