import { useState } from 'react'

const STORAGE_KEY = 'silk-inn:favourites'

function readFavourites() {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [])
  } catch {
    return new Set()
  }
}

function writeFavourites(favourites) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...favourites]))
  } catch {
    // Storage blocked (private mode, etc.): the heart still works for this visit.
  }
}

/** Favourite flag for one dish, remembered on this device. */
export function useFavourite(id) {
  const [favourites, setFavourites] = useState(readFavourites)

  const toggle = () => {
    const next = new Set(favourites)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    setFavourites(next)
    writeFavourites(next)
  }

  return [favourites.has(id), toggle]
}
