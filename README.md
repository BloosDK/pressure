# PressureNY - Streetwear Auténtico

![PressureNY Banner](https://static.wixstatic.com/media/3347b2_9324331048e54ca28691863f210fc5cd~mv2.jpg/v1/fill/w_1350,h_453,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3347b2_9324331048e54ca28691863f210fc5cd~mv2.jpg)

## Descripción

PressureNY es una marca de streetwear auténtico nacida en las calles de Nueva York. Nuestro sitio web presenta una experiencia moderna y elegante que refleja la cultura urbana y el diseño contemporáneo.

## Características

- **Diseño Responsivo**: Optimizado para desktop, tablet y móvil
- **Interfaz Moderna**: Dark theme con acentos rojos característicos de la marca
- **Catálogo de Productos**: Galería interactiva con productos destacados
- **Animaciones Suaves**: Efectos hover y transiciones CSS
- **SEO Optimizado**: Meta tags y estructura HTML semántica
- **Performance**: Código optimizado para carga rápida

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con flexbox y grid
- **JavaScript**: Interactividad y funcionalidades dinámicas
- **Responsive Design**: Mobile-first approach

## Estructura del Proyecto

```
pressureny/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos principales
├── js/
│   └── script.js      # JavaScript funcional
├── README.md          # Documentación
├── vercel.json        # Configuración de deployment
└── assets/            # Imágenes y recursos (si aplica)
```

## Instalación y Uso

### Desarrollo Local

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/pressureny.git
cd pressureny
```

2. Abre el proyecto:
```bash
# Opción 1: Servidor local simple
python -m http.server 8000

# Opción 2: Live Server (VS Code extension)
# Clic derecho en index.html > "Open with Live Server"

# Opción 3: Abrir directamente
open index.html
```

3. Visita `http://localhost:8000` en tu navegador

### Deployment en Vercel

1. **Automático (Recomendado)**:
   - Conecta tu repositorio de GitHub con Vercel
   - El deploy se realizará automáticamente en cada push

2. **Manual**:
```bash
npm i -g vercel
vercel --prod
```

## Características Técnicas

### Performance
- Imágenes optimizadas y lazy loading
- CSS minificado para producción
- Estructura HTML semántica

### Accesibilidad
- Etiquetas ARIA apropiadas
- Contraste de colores accesible
- Navegación por teclado

### SEO
- Meta tags optimizados
- Estructura de headers jerárquica
- URLs amigables

## Personalización

### Colores de Marca
```css
:root {
  --primary-red: #ff3e3e;
  --dark-bg: #111111;
  --card-bg: #1a1a1a;
  --text-light: #f5f5f5;
}
```

### Tipografía
- Fuente principal: Segoe UI
- Tamaños responsivos con clamp()
- Letter-spacing personalizado

## Roadmap

- [ ] Integración con e-commerce (Shopify/WooCommerce)
- [ ] Sistema de filtros de productos
- [ ] Wishlist y comparación de productos
- [ ] Newsletter y marketing por email
- [ ] Panel de administración
- [ ] Integración con redes sociales
- [ ] Sistema de reviews y ratings

## Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

**PressureNY Team**
- Website: [https://pressureny.vercel.app](https://pressureny.vercel.app)
- Email: info@pressureny.com
- Instagram: [@pressureny](https://instagram.com/pressureny)

## Reconocimientos

- Diseño inspirado en la cultura streetwear de NYC
- Imágenes de producto por cortesía de Hellstar y colaboradores
- Community feedback y testing

---

**Made with ❤️ in New York City**
