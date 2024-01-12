import { eventManager } from "./EventManger";
import { EventMangerContract } from "./EventMangerContract";

export class Product {
  private eventManager: EventMangerContract = eventManager;

  constructor(private name: string, private id: string) {
    this.eventManager.notify("product", this.getDetails());
  }

  public getDetails() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
