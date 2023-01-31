function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.substr(0, 2), 16) / 255;
  const g = parseInt(hex.substr(2, 2), 16) / 255;
  const b = parseInt(hex.substr(4, 2), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const lightness = (max + min) / 2;

  let saturation = 0;
  if (max !== min) {
    saturation =
      lightness > 0.5
        ? (max - min) / (2 - max - min)
        : (max - min) / (max + min);
  }

  let hue = 0;
  switch (max) {
    case r:
      hue = (g - b) / (max - min);
      break;
    case g:
      hue = 2 + (b - r) / (max - min);
      break;
    case b:
      hue = 4 + (r - g) / (max - min);
      break;
  }
  hue = hue * 60;
  if (hue < 0) {
    hue += 360;
  }

  return [hue, Math.ceil(saturation * 100), Math.floor(lightness * 100)];
}

export default hexToHsl;
