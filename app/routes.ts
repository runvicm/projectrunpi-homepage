import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Home.tsx"),
  route("services", "routes/Services.tsx"),
  route("tech-stacks", "routes/TechStacks.tsx"),
  route("about", "routes/About.tsx"),
  // API routes
  route('/api/devlog/view/:slug', 'routes/api/viewdevlog.ts'),
  route('/api/devlog', 'routes/api/devloglist.ts'),

  //file
  route(".well-known/security.txt", "routes/file/well-known.security-txt.ts"),
] satisfies RouteConfig;
