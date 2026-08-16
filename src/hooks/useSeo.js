import { useEffect } from 'react';

const SITE_URL = 'https://www.scanorderhoreca.com';

const setAttr = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

/**
 * Escribe en el <head> el título, la descripción y la URL canónica de la ruta actual.
 *
 * Sin esto todas las rutas heredan las etiquetas de index.html: el canonical se queda
 * apuntando a la portada y cada página acaba diciéndole a Google que es una copia de
 * la home. Lo mismo pasa con og:url, que hace que al compartir cualquier página por
 * WhatsApp salga siempre la portada.
 *
 * Mutamos las etiquetas que ya existen en index.html en vez de crear nuevas, para no
 * acabar con dos canonical distintos en la misma página.
 */
const useSeo = ({ title, description, path }) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    setAttr('meta[name="title"]', 'content', title);
    setAttr('meta[name="description"]', 'content', description);
    setAttr('link[rel="canonical"]', 'href', url);

    setAttr('meta[property="og:title"]', 'content', title);
    setAttr('meta[property="og:description"]', 'content', description);
    setAttr('meta[property="og:url"]', 'content', url);

    setAttr('meta[name="twitter:title"]', 'content', title);
    setAttr('meta[name="twitter:description"]', 'content', description);
    setAttr('meta[name="twitter:url"]', 'content', url);
  }, [title, description, path]);
};

export default useSeo;
