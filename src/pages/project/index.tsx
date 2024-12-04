import { useState } from 'react'

const ProjectForm = () => {
  const [name, setName] = useState('')
  const [ownerId, setOwnerId] = useState<number | string>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newProject = { name, ownerId }

    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProject),
      })

      if (response.ok) {
        const project = await response.json()
        alert('Proyecto creado: ' + project.name)
      } else {
        alert('Error creando proyecto')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error creando proyecto')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre del proyecto:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>

      <label>
        ID del propietario:
        <input
          type="number"
          value={ownerId}
          onChange={(e) => setOwnerId(e.target.value)}
          required
        />
      </label>

      <button type="submit">Crear Proyecto</button>
    </form>
  )
}

export default ProjectForm
