// src/components/HeaderClase.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function HeaderClase({ tituloTema, nombreDocente, horario }) {
  return (
    <motion.header
      // Animación de aparición (fade-in y desplazamiento vertical inicial)
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}

      // Interacción declarativa de elevación y cambio al pasar el cursor
      whileHover={{ 
        scale: 1.005, 
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)' 
      }}

      className="header-clase" 
      style={{ 
        borderBottom: '3px solid #646cff', 
        padding: '1.5rem', 
        marginBottom: '1.5rem', 
        borderRadius: '8px', 
        background: '#f9f9f9',
        boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
        cursor: 'default'
      }}
    >
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        justifyContent: 'space-between', 
        alignItems: 'center',
        gap: '1rem'
      }}>
        {/* Lado izquierdo: Título y subtítulo */}
        <div style={{ flex: '1 1 300px' }}>
          <span style={{ 
            fontSize: '0.8rem', 
            color: '#6366f1', 
            textTransform: 'uppercase', 
            fontWeight: 'bold',
            letterSpacing: '0.05em'
          }}>
            Plan de Clase Digital
          </span>
          <h1 style={{ 
            margin: '0.5rem 0 0 0', 
            color: '#1f2937', 
            fontSize: '1.6rem', 
            lineHeight: '1.3', 
            fontWeight: '700'
          }}>
            {tituloTema}
          </h1>
        </div>

        {/* Lado derecho: Información del docente */}
        <div style={{ 
          textAlign: 'right', 
          fontSize: '0.9rem', 
          color: '#374151',
          lineHeight: '1.5',
          minWidth: '180px'
        }}>
          <p style={{ margin: '0 0 0.2rem 0' }}>
            <strong>Docente:</strong> {nombreDocente}
          </p>
          <p style={{ margin: 0 }}>
            <strong>Horario:</strong> {horario}
          </p>
        </div>
      </div>
    </motion.header>
  );
}