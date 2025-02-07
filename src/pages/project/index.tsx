import { useState } from 'react';

const ProjectForm = () => {
  const [name, setName] = useState('');
  const [ownerId, setOwnerId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Convertir ownerId a número antes de enviarlo
    const newProject = { name, ownerId: Number(ownerId) };

    try {
      const response = await fetch('/api/project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProject),
      });

      if (!response.ok) {
        throw new Error('Error al crear el proyecto');
      }

      const project = await response.json();
      alert(`Proyecto creado: ${project[0].name}`);

      // Limpiar campos después de la creación
      setName('');
      setOwnerId('');
    } catch (error) {
      console.error('Error:', error);
      alert('No se pudo crear el proyecto');
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-6">Create Project</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium">Project Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border rounded-md"
            placeholder="Enter project name"
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Owner ID:</label>
          <input
            type="number"
            value={ownerId}
            onChange={(e) => setOwnerId(e.target.value)}
            required
            className="w-full p-3 border rounded-md"
            placeholder="Enter owner ID"
          />
        </div>
        <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-md">
          Create Project
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
