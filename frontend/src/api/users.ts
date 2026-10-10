const API_URL = import.meta.env.VITE_API_URL ?? ''

export async function register(email: string, password: string): Promise<void> {
  const response = await fetch(`${API_URL}/api/v1/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  if (response.status === 409) throw new Error('Este email ya está registrado.')
  if (!response.ok) throw new Error('Error al registrarse. Revisá los datos.')
}

export async function login(email: string, password: string): Promise<string> {
  const response = await fetch(`${API_URL}/api/v1/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  if (response.status === 401) throw new Error('Email o contraseña incorrectos.')
  if (!response.ok) throw new Error('Error al iniciar sesión. Intentá de nuevo.')
  const data = await response.json()
  return data.token
}
