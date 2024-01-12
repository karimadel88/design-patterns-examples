import { Middleware } from "./Middleware";

export class RoleMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    if (!(email.split("@")[1] === "admin.com")) {
      console.log(`this email: ${email} invalid for user role middleware`);
      return false;
    }

    console.log(`this email: ${email} valid for user role middleware`);

    return this.nextMiddleware(email, password);
  }
}
