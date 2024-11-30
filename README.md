
# 🌤️ **Atmos - App**  
> Una aplicación de clima desarrollada con **React Native**, **Expo Router** y siguiendo el patrón **Clean Architecture**.

<div align="center">

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)
[![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/query)

</div>

---

## 📜 **Descripción**
**Atmos - App** permite consultar el clima actual de cualquier ciudad ingresada. Consumiendo la API de **OpenWeather**, puedes visualizar información esencial como la temperatura, humedad, y el estado del clima, así como detalles adicionales como el viento y la sensación térmica.

---

## ✨ **Características**
- 🌎 **Búsqueda de Clima por Ciudad**: Consulta el clima actual de cualquier ciudad del mundo.
- 🌡️ **Información del Clima**: Muestra temperatura, humedad y estado general (nublado, soleado, etc.).
- 📄 **Detalles Adicionales**: Viento, sensación térmica y más en una segunda pantalla.
- ⚠️ **Manejo de Errores**: Notificaciones cuando la ciudad no existe o hay problemas de conexión.
- 💾 **Historial de Búsquedas (Opcional)**: Guarda tus últimas consultas usando `AsyncStorage`.

---

## 🏗️ **Arquitectura**
El proyecto sigue el patrón **Clean Architecture**, separando responsabilidades en capas:

```
src/
├── app/                     # Rutas principales (Expo Router)
├── components/              # Componentes reutilizables (UI)
├── core/                    # Configuración global y constantes
├── data/                    # Fuentes de datos y repositorios
├── domain/                  # Lógica de negocio y casos de uso
├── hooks/                   # Hooks personalizados
├── styles/                  # Estilos globales
└── types/                   # Tipos de datos
```

---

## ⚙️ **Tecnologías Utilizadas**

| Herramienta                  | Descripción                                                                 |
|------------------------------|-----------------------------------------------------------------------------|
| **React Native**             | Framework para construir aplicaciones móviles nativas.                     |
| **Expo Router**              | Navegación basada en rutas para aplicaciones Expo.                         |
| **TypeScript**               | Superset de JavaScript para añadir tipado estático.                        |
| **Axios**                    | Cliente HTTP para consumir APIs.                                           |
| **React Query**              | Manejo de estados de datos asíncronos.                                     |
| **Styled Components**        | Librería para estilos dinámicos en componentes.                            |
| **OpenWeather API**          | API pública para obtener información del clima.                            |

---

## 🚀 **Cómo Ejecutar el Proyecto**

### **1. Clonar el Repositorio**
```bash
git clone https://github.com/tu-usuario/weather-app.git
cd weather-app
```

### **2. Instalar Dependencias**
```bash
npm install
```

### **3. Configurar la API**
Crea un archivo `.env` en la raíz del proyecto con la siguiente configuración:

```env
API_KEY=tu_api_key_de_openweather
```

### **4. Iniciar el Proyecto**
```bash
npm start
```

---

## 🖼️ **Capturas de Pantalla**

### 📍 Pantalla Principal
Muestra un campo de búsqueda y la información básica del clima.

![Home Screen](https://via.placeholder.com/300x600)

### 📍 Pantalla de Detalles
Incluye información adicional sobre el clima.

![Details Screen](https://via.placeholder.com/300x600)

---

## 🧪 **Pruebas**
Las pruebas están organizadas en la carpeta `tests/` y puedes ejecutarlas con el siguiente comando:

```bash
npm test
```

---

## 💡 **Próximos Pasos**
- 🔄 Añadir funcionalidad de actualización automática.
- 📍 Integrar mapa interactivo para seleccionar ciudades.
- 🕶️ Soporte para modo oscuro.

---

## 🛠️ **Contribuciones**
¡Las contribuciones son bienvenidas! Por favor, abre un _Pull Request_ o crea un _Issue_ para cualquier sugerencia.

---

## 👨‍💻 **Autor**
Creado con ❤️ por [Tu Nombre](https://github.com/tu-usuario).  
[![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tu-usuario) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/tu-usuario)

---

## 📝 **Licencia**
Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.
