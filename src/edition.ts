export type Edition = 'editorial' | 'riso' | 'terminal'
export const EDITIONS: Edition[] = ['editorial', 'riso', 'terminal']

/**
 * Edition state model (mirrors the pre-paint script in index.html):
 * - `edition-chosen` (localStorage): visitor explicitly picked one — always wins.
 * - `edition-session` (sessionStorage): pins the rotated edition for the visit,
 *   so a mid-read refresh never swaps the design under the reader.
 * - `edition-last` (localStorage): rotation cursor across visits. First visit
 *   ever lands on 'editorial' (the safest edition for a cold recruiter).
 */
export function getEdition(): Edition {
  const e = document.documentElement.dataset.edition
  return EDITIONS.includes(e as Edition) ? (e as Edition) : 'editorial'
}

export function setEdition(e: Edition) {
  document.documentElement.dataset.edition = e
  try {
    localStorage.setItem('edition-chosen', e)
    sessionStorage.setItem('edition-session', e)
  } catch {
    /* storage unavailable */
  }
}

export function nextEdition(current: Edition): Edition {
  return EDITIONS[(EDITIONS.indexOf(current) + 1) % EDITIONS.length]
}
