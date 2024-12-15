export const formatNumber = (number) => {
    if (typeof number !== "number" || isNaN(number)) {
      return "0"; // Valor predeterminado si no es un número válido
    }
    return number.toLocaleString("es-CL");
  };
  