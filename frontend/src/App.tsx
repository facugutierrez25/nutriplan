import { useEffect, useState } from 'react'
import { fetchStatus, type Status } from './api/status'

type State =
  | { kind: 'loading' }
  | { kind: 'ok'; status: Status }
  | { kind: 'error'; message: string }

function App() {
  const [state, setState] = useState<State>({ kind: 'loading' })

  useEffect(() => {
    fetchStatus()
      .then((status) => setState({ kind: 'ok', status }))
      .catch((error: unknown) =>
        setState({
          kind: 'error',
          message: error instanceof Error ? error.message : 'Error desconocido',
        }),
      )
  }, [])

  return (
    <main className="container">
      <h1>NutriPlan</h1>
      <p className="subtitle">Tu plan nutricional, en el día a día.</p>

      <section className="card" aria-live="polite">
        <h2>Estado del sistema</h2>
        {state.kind === 'loading' && <p>Conectando con el backend…</p>}
        {state.kind === 'error' && (
          <p className="error">No se pudo conectar con el backend: {state.message}</p>
        )}
        {state.kind === 'ok' && (
          <dl>
            <dt>Backend</dt>
            <dd>
              {state.status.app} v{state.status.version}
            </dd>
            <dt>Base de datos</dt>
            <dd>{state.status.database}</dd>
            <dt>Hora del servidor</dt>
            <dd>{new Date(state.status.serverTime).toLocaleString('es-UY')}</dd>
          </dl>
        )}
      </section>
    </main>
  )
}

export default App
