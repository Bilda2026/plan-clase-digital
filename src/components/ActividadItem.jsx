import React, { useState } from 'react';

export default function ActividadItem({ numero, descripcion, dificultad = 'Media' }) {
  // Hook useState para controlar si la actividad está completada o no
  const [completada, setCompletada] = useState(false);
  
  // Estado local para manejar el efecto hover con estilos en línea de forma fluida
  const [isHovered, setIsHovered] = useState(false);

  const toggleCompletada = () => {
    setCompletada(!completada);
  };

  // Función para determinar el color, el ancho de la barra y el texto según la dificultad
  const obtenerConfigDificultad = (nivel) => {
    switch (nivel.toLowerCase()) {
      case 'baja':
        return { color: '#10b981', ancho: '33%', texto: 'Baja' };
      case 'alta':
        return { color: '#ef4444', ancho: '100%', texto: 'Alta' };
      case 'media':
      default:
        return { color: '#f59e0b', ancho: '66%', texto: 'Media' };
    }
  };

  const config = obtenerConfigDificultad(dificultad);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        display: 'flex', 
        flexDirection: 'column',
        padding: '1.2rem 1.25rem', 
        margin: '0.75rem 0', 
        borderRadius: '8px', 
        border: '1px solid',
        borderColor: isHovered ? '#38bdf8' : '#e2e8f0',
        background: completada ? '#f0fdf4' : '#ffffff',
        boxShadow: isHovered 
          ? '0 10px 25px -5px rgba(2, 20, 63, 0.12), 0 8px 10px -6px rgba(2, 20, 63, 0.08)' 
          : '0 1px 3px rgba(2, 20, 63, 0.05)',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {/* Cabecera de la actividad con el título y botón de estado */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <div>
          <span style={{ fontWeight: 'bold', marginRight: '0.5rem', color: '#02143f' }}>
            Actividad {numero}:
          </span>
          <span style={{ 
            textDecoration: completada ? 'line-through' : 'none', 
            color: completada ? '#6b7280' : '#1f2937',
            fontWeight: '500'
          }}>
            {descripcion}
          </span>
        </div>
        
        <button 
          onClick={toggleCompletada}
          style={{ 
            padding: '0.4rem 0.8rem', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '0.85rem',
            background: completada ? '#10b981' : '#e5e7eb',
            color: completada ? '#ffffff' : '#374151',
            transition: 'background 0.2s ease'
          }}
        >
          {completada ? 'Completada ✔️' : 'Pendiente ⏳'}
        </button>
      </div>

      {/* Indicador visual de dificultad pedagógica */}
      <div style={{ marginTop: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid #f1f5f9' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem' }}>
          <span>Dificultad Pedagógica</span>
          <strong style={{ color: config.color }}>{config.texto}</strong>
        </div>
        <div style={{ width: '100%', height: '6px', backgroundColor: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{ width: config.ancho, height: '100%', backgroundColor: config.color, transition: 'width 0.4s ease' }} />
        </div>
      </div>
    </div>
  );
}