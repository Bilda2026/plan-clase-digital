import { useState, useEffect } from 'react';

export default function ListaActividades() {
  const [actividades, setActividades] = useState([]);
  const [cargando, setCargando] = useState(true);

  // URL limpia y token de acceso
  const NOCODB_URL = 'https://app.nocodb.com/api/v3/data/p5upc3zw1rii7pp/mj2qi8dupajpipe/records?pageSize=25&viewId=vw7ziail4626bla5';
  const API_TOKEN = 'nc_pat_M4tM6EjKEI2IPIaEyju9bCZbiq5HJcdao7Wqb9Ou';

  useEffect(() => {
    fetch(NOCODB_URL, {
      method: 'GET',
      headers: {
        'xc-token': API_TOKEN,
        'Content-Type': 'application/json'
      }
    })
      .then(respuesta => respuesta.json())
      .then(datos => {
        console.log("Datos recibidos de NocoDB:", datos);
        const registros = datos.records || datos.list || [];
        setActividades(registros);
        setCargando(false);
      })
      .catch(error => {
        console.error('Error al conectar con NocoDB:', error);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando datos desde el servidor en la nube...</p>;

  return (
    <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
      <h3 style={{ color: '#0f4c81' }}>📋 Lista de Actividades (Desde NocoDB)</h3>
      {actividades.length === 0 ? (
        <p>No se encontraron registros o la tabla está vacía.</p>
      ) : (
        <ul style={{ paddingLeft: '20px' }}>
          {actividades.map((item, index) => {
            // Extraemos los campos desde 'item.fields' que es donde NocoDB almacena los datos de la fila
            const campos = item.fields || item;

            const titulo = campos.Titulo || campos.titulo || campos.Title || campos.title || 'Sin título';
            const duracion = campos.Duracion || campos.duracion || campos.Duration || campos.duration || 0;
            const categoria = campos.Categoria || campos.categoria || campos.Category || campos.category || 'General';
            const completado = campos.Completo !== undefined ? campos.Completo : (campos.completo || false);

            return (
              <li key={item.id || index} style={{ marginBottom: '8px' }}>
                <strong>{titulo}</strong> — {duracion} min
                <span style={{ color: '#1b6ca8', marginLeft: '6px' }}>[{categoria}]</span>
                {completado ? ' ✅' : ' ⏳'}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

