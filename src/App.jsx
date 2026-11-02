// src/App.jsx
import React from 'react';
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';

export default function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'sans-serif' }}>
      
      {/* 1. Header con la información de la clase */}
      <HeaderClase 
        tituloTema="La lectura comprensiva y el procesamiento de la información mediante preguntas lógicas fundamentales"
        nombreDocente="Prof. Ed. Media"
        horario="07:30 AM - 12:30 PM"
      />

      {/* 2. Tarjeta de Metas / Objetivos */}
      <ObjetivosCard 
        competencia="Aplica estrategias de lectura antes, durante y después del texto mediante preguntas y técnicas de análisis para potenciar el pensamiento lógico y creativo y lograr aprendizajes significativos."
        indicadorLogro="Demuestra comprensión de textos al responder preguntas de análisis y utilizar técnicas visuales antes, durante y después de la lectura para expresar conclusiones propias."
      />

      {/* 3. Sección de Actividades interactiva */}
      <section style={{ marginTop: '2rem' }}>
        <h3 style={{ color: '#4f46e5', textAlign: 'center', marginBottom: '1.5rem' }}>
          📋 Tareas y Actividades de la Sesión
        </h3>

        <ActividadItem 
          numero="1"
          descripcion="Activación de Presaberes: Estrategias Prelectoras y Organizador S-Q-A"
          dificultad="Baja"
        />

        <ActividadItem 
          numero="2"
          descripcion="Construcción de Aprendizaje: Lectura Guiada por Secciones y Análisis por Preguntas Clave"
          dificultad="Media"
        />

        <ActividadItem 
          numero="3"
          descripcion="Consolidación del Aprendizaje: Síntesis Gráfica, Cierre del S-Q-A y Evaluación Metacognitiva"
          dificultad="Alta"
        />
      </section>

    </div>
  );
}