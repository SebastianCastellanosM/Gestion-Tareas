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
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-6">Create Project</h1>
  
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">Project Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter project name"
          />
        </div>
  
        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">Owner ID:</label>
          <input
            type="number"
            value={ownerId}
            onChange={(e) => setOwnerId(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter owner ID"
          />
        </div>
  
        <button
          type="submit"
          className="w-full py-3 mt-6 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Create Project
        </button>
      </form>
    </div>
  );  
}

export default ProjectForm
