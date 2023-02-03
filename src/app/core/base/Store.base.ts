import { Observable, BehaviorSubject, distinctUntilChanged, map } from 'rxjs';

export class Store<T> {
  private _state: BehaviorSubject<T>;
  public state$: Observable<T>;

  constructor(initialState: T) {
    this._state = new BehaviorSubject<T>(initialState);
    this.state$ = this._state.asObservable();
  }

  get currentStateValue() {
    return this._state.getValue();
  }

  protected setState(nextState: T) {
    this._state.next(nextState);
  }

  public suscribeOnly(key: keyof T): Observable<T[keyof T]> {
    return this.state$.pipe(
      map((state) => state[key]),
      distinctUntilChanged()
    );
  }
}
