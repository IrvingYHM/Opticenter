import React, { useState, useEffect } from "react";
import axios from "axios";

const Horarios = () => {
  const [horarios, setHorarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHorarios = async () => {
      try {
        const response = await axios.get("http://localhost:3000/horarios");
        setHorarios(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchHorarios();
  }, []);

  return { horarios, loading, error };
};

export default Horarios;
