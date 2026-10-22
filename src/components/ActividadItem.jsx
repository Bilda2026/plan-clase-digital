// src/components/ActividadItem.jsx
import React, { useState } from 'react';

export default function ActividadItem({ numero, descripcion }) {
  // Hook useState para controlar si la actividad está completada o no
  const [completada, setCompletada] = useState(false);

  const toggleCompletada = () => {
    setCompletada(!completada);
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '0.8rem 1rem', 
      margin: '0.5rem 0', 
      borderRadius: '6px', 
      border: '1px solid #d1d5db',
      background: completada ? '#f0fdf4' : '#ffffff',
      transition: 'all 0.3s ease'
    }}>
      <div>
        <span style={{ fontWeight: 'bold', marginRight: '0.5rem', color: '#4f46e5' }}>Actividad {numero}:</span>
        <span style={{ 
          textDecoration: completada ? 'line-through' : 'none', 
          color: completada ? '#6b7280' : '#1f2937' 
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
          background: completada ? '#10b981' : '#e5e7eb',
          color: completada ? '#ffffff' : '#374151'
        }}
      >
        {completada ? 'Completada ✔️' : 'Pendiente ⏳'}
      </button>
    </div>
  );
}