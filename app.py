def registrar_personas():
    personas = []
    
    while True:
        nombre = input("Ingrese el nombre: ")
        apellido = input("Ingrese el apellido: ")
        edad = input("Ingrese su edad: ")
        
        telefonos = []
        while True:
            telefono = input(f"Ingrese número de teléfono para {nombre} (Enter para finalizar): ")
            
            if telefono == '':
                if not telefonos:
                    print('Debe ingresar al menos un teléfono.')
                    continue
                break
            
            telefonos.append(telefono)
        
        hijos = []

        while True:
            hijo = input(f"Ingrese nombre de hijo para {nombre} (Enter para finalizar): ")
            
            if hijo == '':
                if not hijos:
                    print('Debe ingresar al menos un hijo.')
                    continue
                break
            
            hijos.append(hijo)
        
        persona = [nombre, apellido, edad, telefonos, hijos]
        personas.append(persona)
        
        continuar = input("¿Desea registrar otra persona? (s/n): ")
        if continuar.lower() != 's':
            break
    
    print("\n--- Personas Registradas ---")
    # import json
    # print(json.dumps(personas, indent=2))
    
    for persona in personas:
        print(persona)
    
    return personas

def main():
    registrar_personas()

if __name__ == "__main__":
    main()