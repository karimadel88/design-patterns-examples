import { Middleware } from "./Middleware";
import { RoleMiddleware } from "./RoleMiddleware";
import { Server } from "./Server";
import { UserExistMiddleware } from "./UserExistMiddleware";

export function chainOfResponsibility() {
  const server: Server = new Server();

  server
    .register("karim@admin.com", "123123123")
    .register("karim@user.com", "123123123");

  const middleware: Middleware = Middleware.use(
    new UserExistMiddleware(server),
    new RoleMiddleware(),
  );

  server.setMiddleware(middleware);

  console.log("Chain Of Responsibility Example: ");

  server.login("karim@user.com", "123123123");
  server.login("karim@admin.com", "123456");
  server.login("karim@admin.com", "123123123");

  console.log("-------------------");
}
