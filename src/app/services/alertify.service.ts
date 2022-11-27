import { Injectable } from "@angular/core";

declare let alertify: any;

@Injectable({
  providedIn: "root"
})
export class AlertifyService {
  static success(arg0: string) {
    throw new Error("Method not implemented.");
  }
  constructor() {}

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  info(message: string) {
    alertify.info(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }
}