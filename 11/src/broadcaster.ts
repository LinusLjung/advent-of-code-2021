type Listener = (position: Position) => void;

let listeners: Listener[] = [];

export function listen(callback: Listener) {
  listeners.push(callback);

  return () =>
    (listeners = listeners.filter((listener) => callback !== listener));
}

export function broadcast(position: Position) {
  listeners.forEach((listener) => listener(position));
}

export function clearAll() {
  listeners = [];
}
