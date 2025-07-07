import { useState } from "react";
import { getResponseFromOpenAI } from "./openai";

function App() {
  const [input, setInput] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return;
    setCargando(true);
    const respuestaIA = await getResponseFromOpenAI(input);
    setRespuesta(respuestaIA);
    setCargando(false);
  };

  return (
    <div style={{
      padding: "3rem",
      fontFamily: "'Segoe UI', sans-serif",
      background: "#fdf6f0",
      minHeight: "100vh",
      color: "#4a4a4a"
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#6b4c9a" }}>
        🌿 Escribe tu sentir, la IA te acompaña
      </h1>

      <p style={{ marginBottom: "1rem", fontStyle: "italic" }}>
        Este espacio es tuyo. Podés escribir lo que sentís, sin juicio. La IA te responderá con empatía y poesía.
      </p>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows="6"
        placeholder="Hoy me siento..."
        style={{
          width: "100%",
          padding: "1rem",
          borderRadius: "8px",
          border: "1px solid #d9d9d9",
          fontSize: "1rem",
          background: "#fffefc",
          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)",
          marginBottom: "1rem"
        }}
      />

      <button
        onClick={handleSubmit}
        disabled={cargando}
        style={{
          backgroundColor: cargando ? "#d8d3e3" : "#bfa2ff",
          color: "#fff",
          border: "none",
          padding: "0.7rem 1.5rem",
          borderRadius: "6px",
          cursor: cargando ? "default" : "pointer",
          fontWeight: "bold"
        }}
      >
        {cargando ? "🌬️ Escuchando tu emoción..." : "Enviar al diario"}
      </button>

      {respuesta && (
        <div style={{
          marginTop: "2.5rem",
          background: "#f7f3fa",
          padding: "1.5rem",
          borderRadius: "10px",
          border: "1px solid #e0d3f5",
          boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
        }}>
          <h3 style={{ color: "#7c4cc1", marginBottom: "1rem" }}>📝 Respuesta de la IA</h3>
          <p style={{ whiteSpace: "pre-line", lineHeight: "1.6" }}>{respuesta}</p>
        </div>
      )}
    </div>
  );
}

export default App;
