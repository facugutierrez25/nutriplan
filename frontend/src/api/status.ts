export interface Status {
  app: string
  version: string
  database: string
  serverTime: string
}

// En producción, VITE_API_URL apunta al backend desplegado (ej. https://api.midominio.uy).
// En desarrollo queda vacío y el proxy de Vite redirige /api al backend local.
const API_URL = import.meta.env.VITE_API_URL ?? ''

export async function fetchStatus(): Promise<Status> {
  const response = await fetch(`${API_URL}/api/v1/status`)
  if (!response.ok) {
    throw new Error(`El backend respondió ${response.status}`)
  }
  return response.json() as Promise<Status>
}
