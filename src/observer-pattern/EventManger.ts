import { EventMangerContract } from "./EventMangerContract";
import { Listener } from "./Listener";

class EventManger implements EventMangerContract {
  /**
   * Events Listener
   */
  public listeners = new Map<string, Listener[]>();

  /**
   * Subscribe listener
   */
  public subscribe(type: string, listener: Listener) {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, [listener]);
      return this;
    }
    const newListeners = this.listeners.get(type);
    if (newListeners) newListeners.push(listener);
    this.listeners.set(type, newListeners as Listener[]);
    return this;
  }

  /**
   * subscribe group
   */

  public subscribeGroup(listeners: { type: string; listener: Listener }[]) {
    listeners.forEach(listener =>
      this.subscribe(listener.type, listener.listener),
    );
    return this;
  }

  /**
   * unsubscribe listener
   */
  public unsubscribe(type: string, listener: Listener) {
    if (!this.listeners.has(type)) return this;
    const newListeners = this.listeners.get(type);
    if (newListeners) {
      const index = newListeners.indexOf(listener);
      if (index > -1) newListeners.splice(index, 1);
      this.listeners.set(type, newListeners as Listener[]);
      return this;
    }
    return this;
  }

  /**
   * notify
   */
  public notify(type: string, data: Record<any, any>) {
    this.listeners.forEach((value, key) => {
      if (key === type) {
        value.forEach(listener => listener.update(data));
      }
    });
  }
}

export const eventManager = new EventManger();
