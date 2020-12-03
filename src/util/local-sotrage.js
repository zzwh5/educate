export function local_get(key) {
  return localStorage.getItem(key)
}

export function local_set(key, value) {
  localStorage.setItem(key, value)
}

export function local_remove(key) {
  localStorage.removeItem(key)
}

export function local_clear() {
  localStorage.clear()
}
