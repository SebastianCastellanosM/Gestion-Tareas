import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_PROJECT, GET_PROJECTS } from "@/src/utils/gql/mutations/projects";

export default function Proyectos() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
    refetchQueries: [{ query: GET_PROJECTS }], // Para actualizar la lista después de crear
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return;

    try {
      await createProject({ variables: { name, description } });
      setName("");
      setDescription("");
    } catch (err) {
      console.error("Error al crear proyecto:", err);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Crear Proyecto</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nombre del proyecto"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? "Creando..." : "Crear Proyecto"}
        </button>
        {error && <p className="text-red-500">Error: {error.message}</p>}
      </form>
    </div>
  );
}