import { useEffect, useState } from "react";

export type Route =
  | { name: "home" }
  | { name: "now" }
  | { name: "menu" }
  | { name: "busi" }
  | { name: "busiDays" }
  | { name: "dish"; id: string };

function parseHash(hash: string): Route {
  const path = hash.replace(/^#/, "") || "/";
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (clean === "/" || clean === "") return { name: "home" };
  if (clean === "/now") return { name: "now" };
  if (clean === "/menu") return { name: "menu" };
  if (clean === "/busi") return { name: "busi" };
  if (clean === "/busi/days") return { name: "busiDays" };
  const dish = /^\/dish\/([^/]+)$/.exec(clean);
  if (dish) return { name: "dish", id: decodeURIComponent(dish[1]) };
  return { name: "home" };
}

export function hrefFor(route: Route): string {
  if (route.name === "home") return "#/";
  if (route.name === "now") return "#/now";
  if (route.name === "menu") return "#/menu";
  if (route.name === "busi") return "#/busi";
  if (route.name === "busiDays") return "#/busi/days";
  return `#/dish/${encodeURIComponent(route.id)}`;
}

export function navigate(route: Route) {
  window.location.hash = hrefFor(route).slice(1);
}

export function useRoute(): Route {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));

  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener("hashchange", onChange);
    if (!window.location.hash) {
      window.location.hash = "/";
    }
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}
