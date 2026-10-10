import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('redirige a /login cuando no hay sesión', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Iniciar sesión' })).toBeInTheDocument()
  })
})
