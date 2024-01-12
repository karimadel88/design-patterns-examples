import { Middleware } from "./Middleware";

export class Server {
  private middleware!: Middleware;
  private users: Map<string, string> = new Map();

  public setMiddleware(middleware: Middleware) {
    this.middleware = middleware;
  }

  /**
   * login
   */
  public login(email: string, password: string): boolean {
    if (this.middleware.check(email, password)) {
      console.log(`this email: ${email} passed all middlewares`);
      return true;
    }
    console.log(`this email: ${email} failed in one of middlewares`);

    return false;
  }

  /**
   * register
   */
  public register(email: string, password: string) {
    this.users.set(email, password);
    return this;
  }

  /**
   * has email
   */
  public hasEmail(email: string): boolean {
    return this.users.has(email);
  }

  /**
   * is valid password
   */
  public isValidPassword(email: string, password: string): boolean {
    return this.users.get(email) === password;
  }
}
