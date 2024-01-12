import { Listener } from "./Listener";

export class Customer implements Listener {
  constructor(private name: string, private id: string) {}

  public update(data: Record<any, any>) {
    console.log({
      customer: {
        name: this.name,
        id: this.id,
      },
      message: `You Now Exist new product called ${data.name} with id ${data.id}`,
    });
  }
}
