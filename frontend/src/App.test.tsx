import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import App from './App'

describe('App', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('muestra el estado cuando el backend responde', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: () =>
          Promise.resolve({
            app: 'nutriplan-backend',
            version: '0.0.1',
            database: 'OK',
            serverTime: '2026-09-23T12:00:00Z',
          }),
      }),
    )

    render(<App />)

    expect(await screen.findByText('nutriplan-backend v0.0.1')).toBeInTheDocument()
    expect(screen.getByText('OK')).toBeInTheDocument()
  })

  it('muestra un error cuando el backend no está disponible', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('sin conexión')))

    render(<App />)

    expect(await screen.findByText(/No se pudo conectar/)).toBeInTheDocument()
  })
})
