const validarRespuesta = (pregunta) => {
  let respuesta = prompt(pregunta).toLowerCase();
  while (respuesta !== "no" && respuesta !== "si") {
    alert("Respuesta inválida. Por favor, responda con 'si' o 'no'.");
    respuesta = prompt(pregunta);
  }
  return respuesta;
};

const validaOrden = (ordenCompleta, preguntaOrden) => {
  const respuesta = validarRespuesta(preguntaOrden);

  if (respuesta === "si") {
    alert("¡Su orden ha sido completada exitosamente!");
  } else {
    alert("Continue agregando artículos al carrito.");
  }
};

const cancelarOrden = (cancelacion, preguntaCancelar) => {
  const respuesta = validarRespuesta(preguntaCancelar);

  if (respuesta === "si") {
    alert("Su orden ha sido cancelada.");
  } else {
    alert("Continue completando su orden.");
  }
};

for (let i = 1; i <= 2; i++) {
  let preguntaOrden, preguntaCancelar;
  let ordenCompleta, cancelacion;
  switch (i) {
    case 1:
      preguntaOrden = "¿Desea completar su orden?";
      validaOrden(ordenCompleta, preguntaOrden);
      break;
    case 2:
      preguntaCancelar = "¿Desea cancelar su orden?";
      cancelarOrden(cancelacion, preguntaCancelar);
      break;
    default:
      alert("Compras online");
      break;
  }
}
