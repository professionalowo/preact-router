import { Router } from "./components/router/Router";

export function App() {
  return (
    <Router
      routes={[
        Router.Route({ path: "/", element: <p>Hello</p> }),
        Router.Route({ path: "/about", element: <p>About</p> }),
      ]}
    />
  );
}
