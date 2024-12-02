
# 🌤️ **Atmos**  
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
**Atmos** permite consultar el clima actual de cualquier ciudad ingresada. Consumiendo la API de **OpenWeather**, puedes visualizar información esencial como la temperatura, humedad, y el estado del clima, así como detalles adicionales como el viento y la sensación térmica.

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
├── constants/               # Constantes y variables globales
├── data/                    # Fuentes de datos y repositorios
├── domain/                  # Lógica de negocio y casos de uso
├── hooks/                   # Hooks personalizados
├── services/                # Servicios y clientes Axios
```

---

## ⚙️ **Tecnologías Utilizadas**

| Herramienta                  | Descripción                                                                |
|------------------------------|----------------------------------------------------------------------------|
| **React Native**             | Framework para construir aplicaciones móviles nativas.                     |
| **Expo Router**              | Navegación basada en rutas para aplicaciones Expo.                         |
| **TypeScript**               | Superset de JavaScript para añadir tipado estático.                        |
| **Axios**                    | Cliente HTTP para consumir APIs.                                           |
| **React Query**              | Manejo de estados de datos asíncronos.                                     |
| **OpenWeather API**          | API pública para obtener información del clima.                            |

---

## 🚀 **Cómo Ejecutar el Proyecto**

### **1. Clonar el Repositorio**
```bash
git clone https://github.com/xXAreizaXx/Atmos.git
cd atmos
```

### **2. Instalar Dependencias**
```bash
npm install
```

### **3. Configurar la API**
Crea un archivo `.env` en la raíz del proyecto con la siguiente configuración:

```env
EXPO_PUBLIC_API_KEY=fc8433366806bda576c8d9da86db798b
EXPO_PUBLIC_API_URL=https://api.openweathermap.org/data/3.0/onecall
EXPO_PUBLIC_GOOGLE_API_KEY=AIzaSyA5_VHpKzuqZBfXD8f7t5tPtbbHHHpKfGc
```

### **4. Iniciar el Proyecto**
```bash
npm start
```

---

## 🖼️ **Capturas de Pantalla**

### 📍 Pantalla Principal
Muestra un campo de búsqueda y la información básica del clima.

![Home Screen](https://ibb.co/K26dRVN)

### 📍 Pantalla de Detalles
Incluye información adicional sobre el clima.

![Details Screen](https://ibb.co/qr29Hwk)

---

## 🧪 **Pruebas**
Las pruebas están organizadas en la carpeta `tests/` y puedes ejecutarlas con el siguiente comando:

```bash
npm test
```

---

## 💡 **Próximos Pasos**
- 📊 **Gráficos de Clima**: Mostrar gráficos de temperatura y humedad.
- 🛡️ **Autenticación**: Implementar un sistema de autenticación.
- 📧 **Notificaciones**: Enviar notificaciones push.
- 🌐 **Internacionalización**: Traducir la aplicación en varios idiomas
- 📱 **Responsive**: Adaptar la aplicación para tablets y otros dispositivos.

---

## 👨‍💻 **Autor**
Creado con ❤️ por [Jorge Areiza](https://github.com/xXAreizaXx).  
[![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/xXAreizaXx) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jorge-areiza/)

---
