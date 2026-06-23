# Resumen del trabajo — Web ScanOrder

_Última actualización: 23 jun 2026_

Web: **https://www.scanorderhoreca.com** · Repo: `Bambino0011/ScanOrder-web` · Deploy: **Vercel** (auto al hacer push a `main`).

---

## ✅ Hecho y PUBLICADO (en vivo)

### Diseño / contenido
- Rediseño **"Sobremesa claro"** publicado como web pública (antes estaba solo en la rama de diseño).
- **Bento** de la home: añadida la tarjeta **"Tapa incluida"** (función para bares) con foto real (`foto5`) y etiquetas estilo "línea de carta" repartidas arriba/abajo.
- **3 páginas nuevas** (la home no se tocó; se añaden como ventanas en el menú):
  - `/carta-digital-qr` — carta digital y pedidos por QR.
  - `/inteligencia-artificial` — IA: sommelier, sugerencia al pagar y analítica del panel.
  - `/para-bares` — software para bares con la **tapa incluida** (ideal para el pitch del bar).

### SEO técnico
- **Favicon** corregido a **256×256 cuadrado** (antes 256×219, por eso Google mostraba el globo en vez del logo).
- Unificado todo a la versión **con www** (`https://www.scanorderhoreca.com`): `canonical`, `og:url`, `twitter:url`, imágenes, `sitemap.xml` y `robots.txt`. (Antes apuntaban a sin-www y el sitio redirige a www → causaba "página con redirección").
- **Sitemap** con todas las páginas (home, presupuesto, carta-digital-qr, inteligencia-artificial, para-bares).
- **Meta de verificación** de Google Search Console añadida al `<head>`.

### Formulario de contacto / presupuesto
- Los formularios (presupuesto y demo) envían por **EmailJS** y llegan a **soporte@scanorderhoreca.com** (configurado el "To Email" en la plantilla de EmailJS).
- Pendiente opcional: que el correo **salga DESDE** `@scanorderhoreca.com` (remitente) → requiere conectar **Zoho SMTP** en EmailJS (no hecho; ahora el remitente es un Gmail, pero **llega bien** a soporte@).

---

## ✅ Hecho FUERA de la web

### Google Search Console
- Propiedad **`https://www.scanorderhoreca.com`** verificada (etiqueta HTML).
- **Solicitada indexación** de la home y de las 3 páginas nuevas.
- **Sitemap enviado** (`sitemap.xml`). Estado inicial "No se ha podido obtener" = normal recién enviado; Google lo leerá en 1-3 días (el archivo está correcto y accesible, comprobado).

### Google Business Profile (ficha de empresa)
- Ficha **ScanOrder** creada y verificada (la gestionas tú). Categoría: empresa de software, en **Linares (Jaén)**.
- Pendiente de completar dentro de la ficha:
  - **Añadir sitio web**: `https://www.scanorderhoreca.com`.
  - **Subir fotos**: están listas en la carpeta `capturas/gbp/` (logo + capturas de la app).
  - Añadir **servicios** (Carta digital QR, Pedidos por QR, Cobro en mesa, Software para bares).

---

## ⏳ PENDIENTE de publicar (cambios en local, sin subir aún)

- **Arreglos del menú de navegación**:
  - Menú **persistente** (ya no se "recarga"/re-anima al cambiar de página).
  - Enlaces de sección (**Plataforma / Producto / FAQ**) ahora funcionan también desde las páginas internas (llevan a la home y a la sección).
  - **Scroll suave** entre secciones (corregido el bug de doble scroll que lo hacía brusco; duración proporcional a la distancia).
- Estos cambios están probados en local; **falta hacer commit + push** para que entren en la web pública.

---

## 📌 Notas útiles
- **Publicar** = `git push` a `main` (desde la rama `design/sobremesa-claro` se hace merge a `main` y push). Vercel despliega solo en 1-2 min.
- El **logo en los resultados de Google** (favicon) puede tardar **días o semanas** en actualizarse, aunque ya esté arreglado y pedida la indexación. Es normal.
- Para **salir más arriba** en Google a medio plazo: completar la ficha de Google + conseguir reseñas + más contenido/páginas + enlaces desde otros sitios.

---

## 🗓️ Próximos pasos sugeridos
1. **Publicar** los arreglos del menú/scroll (pendiente).
2. Completar la **ficha de Google** (web + fotos + servicios).
3. Conectar **Zoho SMTP** en EmailJS si se quiere que el correo salga desde `@scanorderhoreca.com`.
4. Ir añadiendo contenido (más páginas / blog) para posicionar mejor.
