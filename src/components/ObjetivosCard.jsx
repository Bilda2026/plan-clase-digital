// src/components/ObjetivosCard.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ObjetivosCard({ competencia, indicadorLogro }) {
  // 1. Control de estado para la interactividad (desplegar / colapsar)
  const [estaAbierto, setEstaAbierto] = useState(true);

  return (
    <motion.div
      // Efectos de aparición
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      // Interacción de elevación al pasar el cursor
      whileHover={{ scale: 1.01, y: -3 }}
      className="objetivos-card"
      style={{
        background: '#ffffff',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '1.2rem',
        marginBottom: '1.5rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        cursor: 'pointer'
      }}
    >
      {/* Encabezado interactivo que cambia el estado al hacer clic */}
      <div 
        onClick={() => setEstaAbierto(!estaAbierto)}
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          userSelect: 'none'
        }}
      >
        <h3 style={{ color: '#4f46e5', margin: 0 }}>🎯 Metas de la Sesión</h3>
        <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>
          {estaAbierto ? '▼ Ocultar' : '► Mostrar'}
        </span>
      </div>

      {/* Control de animación basado en el estado */}
      <AnimatePresence>
        {estaAbierto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden', marginTop: '1rem' }}
          >
            <div style={{ marginBottom: '0.6rem' }}>
              <strong style={{ color: '#1f2937' }}>Competencia:</strong>
              <p style={{ margin: '0.2rem 0 0 0', color: '#4b5563' }}>{competencia}</p>
            </div>
            <div>
              <strong style={{ color: '#1f2937' }}>Indicador de Logro:</strong>
              <p style={{ margin: '0.2rem 0 0 0', color: '#4b5563' }}>{indicadorLogro}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}