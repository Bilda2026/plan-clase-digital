// src/App.jsx
import React from 'react';
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';
import ListaActividades from './components/ListaActividades';

export default function App() {
  return (
    <div style={{ 
      maxWidth: '800px', 
      width: '100%', 
      margin: '0 auto', 
      padding: '1rem', 
      boxSizing: 'border-box', 
      fontFamily: 'Segoe UI, sans-serif',
      overflowX: 'hidden' 
    }}>
      
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h1>Plan de Clase Digital Interactivo</h1>
        <p>Bienvenido al puente entre Frontend React y Backend NocoDB.</p>
      </div>

      <HeaderClase 
        tituloTema="La lectura comprensiva y el procesamiento de la información mediante preguntas lógicas fundamentales"
        nombreDocente="Prof. Ed. Media"
        horario="07:30 AM - 12:30 PM"
      />

      <ObjetivosCard 
        competencia="Aplica estrategias de lectura antes durante y después del texto mediante preguntas y técnicas de análisis para potenciar el pensamiento lógico y creativo y lograr aprendizajes significativos."
        indicadorLogro="Demuestra comprensión de textos al responder preguntas de análisis y utilizar técnicas visuales antes durante y después de la lectura para expresar conclusiones propias."
      />

      <section style={{ marginTop: '2rem' }}>
        <h3 style={{ color: '#4f46e5', textAlign: 'center', marginBottom: '1.5rem' }}>
          Tareas y Actividades de la Sesión
        </h3>

        <ListaActividades />

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