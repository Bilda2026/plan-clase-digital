// src/components/ObjetivosCard.jsx
import React from 'react';

export default function ObjetivosCard({ competencia, indicadorLogro }) {
  return (
    <div className="objetivos-card" style={{ background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1.2rem', marginBottom: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <h3 style={{ color: '#4f46e5', marginTop: 0, marginBottom: '0.8rem' }}>🎯 Metas de la Sesión</h3>
      <div style={{ marginBottom: '0.6rem' }}>
        <strong style={{ color: '#1f2937' }}>Competencia:</strong>
        <p style={{ margin: '0.2rem 0 0 0', color: '#4b5563' }}>{competencia}</p>
      </div>
      <div>
        <strong style={{ color: '#1f2937' }}>Indicador de Logro:</strong>
        <p style={{ margin: '0.2rem 0 0 0', color: '#4b5563' }}>{indicadorLogro}</p>
      </div>
    </div>
  );
}