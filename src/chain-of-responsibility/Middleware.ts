export abstract class Middleware {
  // successor
  private next!: Middleware;

  // Link middlewares
  public static use(first: Middleware, ...tail: Middleware[]): Middleware {
    let head: Middleware = first;

    for (const middlewareInChain of tail) {
      head.next = middlewareInChain;
    }

    return head;
  }

  /**
   * Check if user is authenticated
   * @param email
   * @param password
   */
  public abstract check(email: string, password: string): boolean;

  /**
   * next middleware
   * @param email
   * @param password
   * @returns
   */
  protected nextMiddleware(email: string, password: string): boolean {
    if (this.next === undefined) {
      return true;
    }
    return this.next.check(email, password);
  }
}
