import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto flex justify-between items-center">
       
        {/* Redes sociales */}
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" className="hover:text-blue-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" className="hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-blue-400">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Créditos */}
      <div className="text-center text-sm mt-4">
        <p>&copy; {new Date().getFullYear()} Gestion de Tareas. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;