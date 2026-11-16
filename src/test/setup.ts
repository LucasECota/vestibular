import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'
import { setStorageScope } from '../storage/scope'

// o jsdom não implementa rolagem
window.scrollTo = vi.fn() as unknown as typeof window.scrollTo
Element.prototype.scrollIntoView = vi.fn()

afterEach(() => {
  cleanup()
  setStorageScope(null)
  localStorage.clear()
})
