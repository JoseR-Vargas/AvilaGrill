# Refactor Avila Grill Website

Refactoriza el sitio web de Avila Grill Miami en una página moderna de una sola página con navegación de anclas. La referencia de diseño es https://ohanasushimiami.com/: header sticky, hero fullscreen con overlay oscuro, secciones bien separadas, tipografía elegante y diseño limpio dark/light.

**No implementes carrito de compras, sistema de pedidos online, ni checkout.**

---

## Arquitectura objetivo

Reemplaza la estructura actual (index.html + 12 páginas separadas en /pages/) por una sola página:

```
index.html          ← única página, navegación por anclas
css/style.css       ← reescribir completamente
main.js             ← nav sticky + smooth scroll + mobile menu + category tabs
```

Las páginas en `/pages/` quedan en desuso; no las elimines todavía.

### Secciones (anclas)
```
#home       Hero fullscreen con imagen de fondo y overlay oscuro + CTA
#about      Acerca de nosotros + fotos del food truck
#menu       Menú completo con tabs por categoría (sin carrusel por categoría)
#contact    Teléfono, horarios, redes sociales
#location   Mapa + dirección
```

---

## Brand Identity

### Colores
```css
--color-dark:    #201e1e;   /* fondo header/footer, overlays */
--color-gold:    #C9A052;   /* headings de marca, acentos dorados del menú PDF */
--color-white:   #ffffff;
--color-bg:      #faf8f5;   /* fondo secciones claras */
--color-green:   #2E7D32;   /* CTA teléfono/llamada */
```

### Tipografía
Las fuentes custom ya están en `/fonts/`:
```css
@font-face { font-family: 'AGrill_display'; src: url('./fonts/BAIKAL.ttf'); }  /* headings */
@font-face { font-family: 'AGrill_body';    src: url('./fonts/UPCLI.TTF'); }   /* body/nav */
```

### Logos disponibles en `/img/`
- `LOGO_AVILA GRILL_WHITE.png` → usar en header oscuro y footer
- `LOGO_AVILA GRILL_BLACK.png` → usar en secciones claras
- `LOGO_AVILA GRILL.png` → favicon

---

## Datos del negocio

```
Nombre:    Avila Grill Miami — The Authentic Grill Experience
Fundado:   Enero 2023
Teléfono:  (786) 326-4732  →  tel:7863264732
Dirección: 12805 SW 137th Ave, Kendall FL 33186
Maps:      https://maps.app.goo.gl/gnT4nEu5sAfzTWXA8
```

### Horarios
```
Lunes:             CERRADO
Martes – Viernes:  6:15 pm – 12:00 am
Sábado:            5:15 pm – 12:00 am
Domingo:           2:00 pm – 11:30 pm
```

### Redes sociales
```
Instagram: https://www.instagram.com/avilagrillmiami?igsh=MWowbTBtMnR3aDF1dw==
Facebook:  https://www.facebook.com/share/1EWpFJzTtf/
TikTok:    https://www.tiktok.com/@avilagrillmiami?_t=ZM-8uokKReoNTJ&_r=1
```

### Promociones semanales
```
Martes:    1 Hot Dog a $3.49
Miércoles: 1 Hamburguesa + 1 Soda a $10
Jueves:    1 Cachapa a $10
```

---

## Menú completo (del PDF Oct 2025)

Usa estos datos para poblar la sección #menu. Organiza con tabs de Bootstrap 5.

### APPETIZERS
| Plato | Descripción | Precio |
|-------|-------------|--------|
| Tequeños | Tiras de queso blanco en masa de trigo fritas (4 und.) | $8.49 |
| Mini Arepitas with Grilled Cheese | Arepitas fritas con queso a la plancha | $7.49 |
| French Fries | — | $5.99 |
| Chicharron | Fried Pork / Masitas de Cerdo | $8.99 |
| Empanadas | Mechada / Pollo / Queso | $2.99 |

Cloudinary disponible: `https://res.cloudinary.com/dyg0knk2o/image/upload/v1742323095/VDR52255_x0ggcb.jpg` (Tequeños), `https://res.cloudinary.com/dyg0knk2o/image/upload/v1742589080/Chicharron_c57ydf.jpg` (Chicharron), `https://res.cloudinary.com/dyg0knk2o/image/upload/v1742323094/VDR52232_oozupp.jpg` (Mini Arepitas), `https://res.cloudinary.com/dyg0knk2o/image/upload/v1742750649/Empanadas_hysstu.jpg` (Empanadas)

### BURGERS
*(Lettuce, tomatoes, bacon, ham, egg, cheese, potato sticks, ketchup, garlic sauce)*
| Plato | Precio |
|-------|--------|
| Beef (1/2 lb Homemade Beef) | $14.99 |
| Chicken | $12.99 |
| Pork (Chop) | $14.99 |
| Mixed (2 Protein) | $19.99 |
| Triple (3 Protein) | $24.99 |
| Doble Beef | $20.99 |
| Picaña or Churrasco | $20.99 |

### GRILLS
**Parrillita** *(1 person — 12 oz protein + 2 sides)*
| | Precio |
|-|--------|
| Beef (Picaña or Churrasco) | $22.49 |
| Chicken | $17.49 |
| Mixed | $19.99 |

**Pinchos (Skewers)** — 2 Filet Mignon skewers + 2 sides (1 person): $21.99 · Add 1 skewer: $9.99

**By the Pound**
| | Precio |
|-|--------|
| 1/2 lb Picaña or Churrasco | $16.99 |
| 1 lb Picaña or Churrasco | $25.99 |
| 1/2 lb Chicken | $11.99 |
| 1 lb Chicken | $17.99 |

**Simple Mixed** *(2–3 personas)*: $41.99 — Beef, Chicken, Chorizo, Grilled Cheese, Pico de Gallo + 1 Side

**Simple Beef** *(2–3 personas)*: $44.99 — 1.5 lb Beef, Grilled Cheese, Pico de Gallo + 1 Side

**Avila Grill Special** *(3–4 personas)*: $63.99 — Chicharron, Beef, Chicken, 2 Chorizo, Grilled Cheese, Pico de Gallo + 2 Sides

### SANDWICH — PEPITO
*(French bread, ham, cheese, bacon, potato sticks, lettuce, tomato, corn, ketchup, garlic sauce)*
| | Precio |
|-|--------|
| Beef (Picaña or Churrasco) | $20.99 |
| Chicken | $17.49 |
| Mixed | $18.99 |

### CHORIPAN
French bread, chorizo, pico de gallo, special sauce: **$13.99**

### HOT DOG
Angus beef sausage, cabbage and onion, potato stick, corn, ketchup, garlic: **$5.99**

### AREPAS
*(Corn flour or Tostón, protein, pico de gallo, grilled cheese, special sauce)*
| | Precio |
|-|--------|
| Beef (Picaña / Churrasco) | $15.99 |
| Chicken | $13.49 |
| Chicharron (Pork) | $12.99 |
| Chorizo Arepa | $14.49 |
| Grilled Cheese Arepa | $11.99 |

### CACHAPAS
Venezuelan corn-based cheese-filled pancakes
- Cachapa with Cheese: **$13.99**
- Add Extra: Cheese +$4.00 · Beef +$7.99 · Chicken +$4.99 · Chorizo +$4.99 · Chicharron +$4.99

### SIDES
| | Precio |
|-|--------|
| 1 Piece of Chorizo | $4.99 |
| 4 Mini Arepitas | $3.49 |
| 1 Piece of Grilled Cheese | $4.99 |
| French Fries | $3.49 |
| Yuca Frita | $4.99 |
| Plantain (Maduros) | $4.99 |
| Tostones | $4.99 |
| Pico de Gallo | $4.99 |
| White Rice (Arroz Blanco) | $4.99 |

### DRINKS
| | Precio |
|-|--------|
| Frescolita | $2.99 |
| Nestea | $4.20 |
| Sodas | $2.80 |
| Chicha | $5.99 |
| Water | $2.50 |
| Malta | $2.80 |
| Papelon con Limón | $5.99 |
| Perrier | $3.50 |
| Postobon | $2.80 |
| Lemonade | $3.99 |

### AVILA KIDS
| | Precio |
|-|--------|
| Grill Chicken with French Fries | $9.99 |
| Kids Burger (Beef, Cheese, French Fries) | $10.99 |
| Grill Beef (Picaña or Churrasco) with French Fries | $12.99 |

### DESSERT
- Nutella Tequeños: **$8.49**

---

## Imágenes disponibles en `/img/`
```
FoodTruckAvilaGrill.JPG          → hero principal
Foto Avila Grill Edimar-1.jpeg   → sección about / galería
Foto Avila Grill Edimar-2.jpeg   → galería
Foto Avila Grill Edimar&Gabo.jpeg → about (equipo)
Parrilla.jpg                     → hero o background menú
Hamburguesa_promo.jpeg           → promo card
Hot-dog.jpg                      → promo card
cachapa_promo.jpeg               → promo card
mapa.png                         → sección location
```

---

## Directrices de implementación

### HTML (index.html)
- Navegación sticky con links a anclas: Home · About Us · Menu · Contact · Location
- Mobile: hamburger menu (Bootstrap offcanvas o implementación custom como en main.js actual)
- Hero: `height: 100svh`, imagen de fondo con overlay `rgba(32,30,30,0.6)`, texto centrado, CTA "Ver Menú" → `#menu`
- Sección About: texto fundacional + galería de fotos del food truck en grid
- Sección Menu: tabs de Bootstrap (`nav-tabs`) con una tab por categoría; cada item es una card con foto (si existe), nombre, descripción y precio; **sin carrusel por categoría**
- Sección Contact: horarios en tabla, teléfono como botón `tel:`, íconos de redes sociales (usar `/img/instagram.png`, `facebook.png`, `tik-tok.png`), bloque de promociones
- Sección Location: dirección + enlace a Google Maps + imagen `mapa.png`; considera embed de iframe de Google Maps si mejora la UX
- Footer: logo blanco, tagline "The Authentic Grill Experience", redes sociales, copyright

### CSS (css/style.css)
- Usa CSS custom properties (`--color-*` definidas arriba)
- Smooth scroll: `scroll-behavior: smooth` en `html`
- El header se vuelve opaco al hacer scroll (añade clase `.scrolled` via JS)
- Breakpoints: mobile-first, desktop ≥ 992px
- Sección #menu cards: grid responsivo `repeat(auto-fill, minmax(260px, 1fr))`

### JS (main.js)
- Mobile nav toggle
- Añadir clase `.scrolled` al header en scroll > 80px
- Activar tab correcto si se llega a la sección desde ancla externa

### Restricciones
- Solo Bootstrap 5.3.3 (CDN) + Bootstrap Icons 1.11.3 (CDN) — no agregar otras librerías
- No crear sistema de pedidos, carrito, ni precios interactivos
- Mantener `/pages/` intacto (no borrar)
- El PDF del menú está en `/menu/Menu AVILA GRILL NEW- Oct 2025.pdf` — puedes ofrecer descargarlo como link si el usuario lo pide
