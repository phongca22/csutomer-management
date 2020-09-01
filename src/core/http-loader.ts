import { Subject } from 'rxjs';

class HttpLoader {
  event: Subject<boolean>;

  constructor() {
    this.event = new Subject();
  }

  show() {
    this.event.next(true);
  }

  hide() {
    this.event.next(false);
  }
}

export default new HttpLoader();
