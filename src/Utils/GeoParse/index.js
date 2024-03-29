function getGeolocationCoords(text) {
  text = text.trim();
  const both = text.split(",");
  let coords = null;
  if (both.length === 2) {
    try {
      const x = parseFloat(both[0]);
      const y = parseFloat(both[1]);
      coords = { latitude: x, longitude: y };
    } catch (e) {
      console.error(`Error en Util/GeoParse`);
      console.error(e);
      return null;
    }
  }
  return coords;
}

export { getGeolocationCoords };
