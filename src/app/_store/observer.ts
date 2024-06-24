type Observer = () => void

class Observerable {
  private observers: Observer[] = []

  private _state: number = 0

  get state() {
    return this._state
  }

  set state(value: number) {
    this._state = value
    this.alert()
  }

  addObserver(observer: Observer) {
    this.observers.push(observer)
  }

  removeObserver(observer: Observer) {
    this.observers = this.observers.filter((data) => data !== observer)
  }

  alert() {
    this.observers.forEach((observer) => {
      observer()
    })
  }
}

const observerable = new Observerable()

export default observerable
