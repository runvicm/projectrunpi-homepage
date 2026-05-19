import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Home.tsx"),
  route("services", "routes/Services.tsx"),
  route("tech-stacks", "routes/TechStacks.tsx"),
  route("about", "routes/About.tsx"),
] satisfies RouteConfig;
