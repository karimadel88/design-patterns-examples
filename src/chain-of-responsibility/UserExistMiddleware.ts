import { Middleware } from "./Middleware";
import { Server } from "./Server";

export class UserExistMiddleware extends Middleware {
  public server!: Server;

  /**
   * Constructor
   */
  constructor(server: Server) {
    super();
    this.server = server;
  }

  /**
   * Check if user is authenticated
   */
  public check(email: string, password: string): boolean {
    if (
      !this.server.hasEmail(email) ||
      !this.server.isValidPassword(email, password)
    ) {
      console.log(`this email: ${email} invalid for user exists middleware`);
      return false;
    }
    console.log(`this email: ${email} valid for user exists middleware`);

    return this.nextMiddleware(email, password);
  }
}
