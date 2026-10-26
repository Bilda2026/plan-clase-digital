import React from 'react';
import './ActividadItem.css'; // O tu archivo de estilos general

export default function ActividadItem({ titulo, descripcion, dificultad = 'Media' }) {
  
  // Función para determinar el color y el ancho de la barra según la dificultad
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
    <div className="tarjeta-actividad">
      <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ color: '#02143f', margin: 0 }}>{titulo}</h4>
        
        {/* Etiqueta de Fase Didáctica */}
        <span style={{ 
          fontSize: '0.75rem', 
          fontWeight: '600', 
          padding: '0.25rem 0.6rem', 
          borderRadius: '9999px', 
          backgroundColor: '#e0f2fe', 
          color: '#0369a1' 
        }}>
          Fase Activa
        </span>
      </div>

      <p style={{ color: '#435a80', fontSize: '0.9rem', margin: '0.75rem 0' }}>
        {descripcion}
      </p>

      {/* Indicador visual de dificultad pedagógica */}
      <div className="dificultad-container" style={{ marginTop: '0.75rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem' }}>
          <span>Dificultad Pedagógica</span>
          <strong style={{ color: config.color }}>{config.texto}</strong>
        </div>
        {/* Barra de progreso visual */}
        <div style={{ width: '100%', height: '6px', backgroundColor: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{ width: config.ancho, height: '100%', backgroundColor: config.color, transition: 'width 0.4s ease' }} />
        </div>
      </div>
    </div>
  );
}