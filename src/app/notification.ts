export class Notification {
  private static counter: number = 1000;

  private message: string;
  private id: number;

  private constructor(message: string, id: number) {
    this.message = message;
    this.id = id;
  }

  public static createNotification(message: string) {
    if (this.counter === 9999) this.counter = 1000;
    return new Notification(message, this.counter++);
  }

  public getMessage(): string {
    return this.message;
  }

  public getId(): number {
    return this.id;
  }
}
