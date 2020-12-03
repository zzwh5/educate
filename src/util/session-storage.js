export function session_get(key) {
  return sessionStorage.getItem(key)
}

export function session_set(key, value) {
  sessionStorage.setItem(key, value)
}

export function session_remove(key) {
  sessionStorage.removeItem(key)
}

export function session_clear() {
  sessionStorage.clear()
}
