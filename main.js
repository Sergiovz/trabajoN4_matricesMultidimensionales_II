// Removed unused imports
import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pregunta = (query) => {
  return new Promise((resolve) => {
    readline.question(query, (answer) => {
      resolve(answer);
    });
  });
};

const registrarPersona = async () => {
  const personas = [];

  try {
    while (true) {
      const nombrePersona = await pregunta("Ingrese su nombre: ");
      const apellidoPersona = await pregunta("Ingrese su apellido: ");
      const edadPersona = await pregunta("Ingrese su edad: ");

      const telefonos = [];

      while (true) {
        const telefono = await pregunta(
          `Ingrese su telefono ${nombrePersona} (enter para finalizar): `
        );

        if (telefono === "") {
          if (telefonos.length === 0) {
            console.log("Debe ingresar al menos un telefono");
            continue;
          }
          break;
        }

        telefonos.push(telefono);
      }

      const hijos = [];

      while (true) {
        const nombreHijos = await pregunta(
          `Ingrese el nombre de los hijos de ${nombrePersona} (enter para finalizar): `
        );

        if (nombreHijos === "") {
          if (hijos.length === 0) {
            console.log("Debe ingresar al menos un hijo");
            continue;
          }
          break;
        }
        hijos.push(nombreHijos);
      }

      const persona = [
        nombrePersona,
        apellidoPersona,
        edadPersona,
        telefonos,
        hijos,
      ];
      personas.push(persona);

      const continuarPrograma = await pregunta("Desea continuar? (s/n)");

      if (continuarPrograma.toLowerCase() !== "s") break;
    }

    console.log("\n ___Personas registradas___");
    // console.log(JSON.stringify(personas, null, 2));

    personas.forEach((persona) => {
      console.log(persona);
    });
  } catch (error) {
    console.error("Error en el registro de personas", error);
  } finally {
    readline.close();
  }
};

registrarPersona();
