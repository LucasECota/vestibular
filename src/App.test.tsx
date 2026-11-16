import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('mostra o título do site', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /vestibular uemg/i })).toBeInTheDocument()
  })
})
