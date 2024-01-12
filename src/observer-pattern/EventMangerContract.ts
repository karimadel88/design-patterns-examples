import { Listener } from "./Listener";

export interface EventMangerContract {
  /**
   * Notify is main function that will notify all observers
   * @param type
   * @param data
   */
  notify(type: String, data: Record<any, any>): void;

  /**
   * Subscribe
   */
  subscribe(type: string, listener: Listener): this;

  /**
   * unsubscribe: method that used to remove listener from observers list
   */
  unsubscribe(type: string, listener: Listener): this;
}
