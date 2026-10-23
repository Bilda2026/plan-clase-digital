// src/App.jsx
import React from 'react';
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem', fontFamily: 'Arial, sans-serif' }}>
      {/* 1. Componente de Encabezado */}
      <HeaderClase 
        tituloTema="La lectura comprensiva y el procesamiento de la información mediante preguntas lógicas fundamentales" 
        nombreDocente="Prof. Ed. Media" 
        horario="07:30 AM - 12:30 PM" 
      />

      {/* 2. Componente de Metas */}
      <ObjetivosCard 
        competencia=" Aplica estrategias de lectura antes, durante y después del texto mediante preguntas y técnicas de análisis para potenciar el pensamiento lógico y creativo y lograr aprendizajes significativos." 
        indicadorLogro="Demuestra comprensión de textos al responder preguntas de análisis y utilizar técnicas visuales antes, durante y después de la lectura para expresar conclusiones propias"
      />

      {/* 3. Sección de Actividades Dinámicas */}
      <section style={{ background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1.2rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <h3 style={{ color: '#4f46e5', marginTop: 0, marginBottom: '1rem' }}>📋 Tareas y Actividades de la Sesión</h3>
        
        <ActividadItem 
          numero={1} 
          descripcion="Activación de Presaberes: Estrategias Prelectoras y Organizador S-Q-A" 
        />
        <ActividadItem 
          numero={2} 
          descripcion="Construcciòn de Aprendizaje: Lectura Guiada por Secciones y Análisis por Preguntas Clave" 
        />
        <ActividadItem 
          numero={3} 
          descripcion="Consolidación del Aprendizaje: Síntesis Gráfica, Cierre del S-Q-A y Evaluación Metacognitiva"
        />
      </section>
    </div>
  );
}

export default App;