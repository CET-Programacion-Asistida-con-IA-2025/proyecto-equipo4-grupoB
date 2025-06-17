// Datos de números de emergencia por país
const emergencyNumbers = {
    argentina: [
        { service: "Emergencias Generales", number: "911", icon: "🚨" },
        { service: "Policía", number: "101", icon: "👮" },
        { service: "Bomberos", number: "100", icon: "🚒" },
        { service: "Ambulancias (SAME)", number: "107", icon: "🚑" },
        { service: "Defensa Civil", number: "103", icon: "⛑️" }
    ],
    chile: [
        { service: "Emergencias Generales", number: "133", icon: "🚨" },
        { service: "Carabineros", number: "133", icon: "👮" },
        { service: "Bomberos", number: "132", icon: "🚒" },
        { service: "Ambulancias", number: "131", icon: "🚑" },
        { service: "PDI", number: "134", icon: "🕵️" }
    ],
    mexico: [
        { service: "Emergencias Generales", number: "911", icon: "🚨" },
        { service: "Cruz Roja", number: "065", icon: "🚑" },
        { service: "Bomberos", number: "911", icon: "🚒" },
        { service: "Policía", number: "911", icon: "👮" },
        { service: "Protección Civil", number: "911", icon: "⛑️" }
    ],
    colombia: [
        { service: "Emergencias Generales", number: "123", icon: "🚨" },
        { service: "Policía Nacional", number: "123", icon: "👮" },
        { service: "Bomberos", number: "119", icon: "🚒" },
        { service: "Cruz Roja", number: "132", icon: "🚑" },
        { service: "Defensa Civil", number: "144", icon: "⛑️" }
    ],
    espana: [
        { service: "Emergencias Generales", number: "112", icon: "🚨" },
        { service: "Policía Nacional", number: "091", icon: "👮" },
        { service: "Guardia Civil", number: "062", icon: "👮" },
        { service: "Bomberos", number: "080", icon: "🚒" },
        { service: "Ambulancias", number: "061", icon: "🚑" }
    ],
    usa: [
        { service: "Emergencias Generales", number: "911", icon: "🚨" },
        { service: "Policía", number: "911", icon: "👮" },
        { service: "Bomberos", number: "911", icon: "🚒" },
        { service: "Ambulancias", number: "911", icon: "🚑" },
        { service: "Control de Venenos", number: "1-800-222-1222", icon: "☠️" }
    ],
    brasil: [
        { service: "Emergencias Generales", number: "193", icon: "🚨" },
        { service: "Policía Militar", number: "190", icon: "👮" },
        { service: "Bombeiros", number: "193", icon: "🚒" },
        { service: "SAMU", number: "192", icon: "🚑" },
        { service: "Defesa Civil", number: "199", icon: "⛑️" }
    ]
};

    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach