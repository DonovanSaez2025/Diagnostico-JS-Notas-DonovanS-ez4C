const estudiantes = ["Ana", "Pedro", "Lucía", "Carlos", "Sofía"];
let registroNotas = [];

function notasEstudiantes() {
    for (let i = 0; i < estudiantes.length; i++) {
        let notaAlumno = parseFloat(prompt(`Ingrese la nota final de ${estudiantes[i]}:`));
        
        if (notaAlumno >= 4 && notaAlumno < 8) {
            alert(`${estudiantes[i]} aprobada/o`);
        } else if (notaAlumno < 4 && notaAlumno > 0) {
            alert(`${estudiantes[i]} reprobada/o`);
        } else {
            alert("Ingrese valores válidos.");
            break;
        };
        registroNotas.push(notaAlumno);
    };

    alert(`Resumen del semestre: ${registroNotas}`);
    registroNotas = [];
};