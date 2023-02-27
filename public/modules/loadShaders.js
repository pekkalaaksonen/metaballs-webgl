`use strict`;

export async function loadShaders(path, file) {
  return await fetch(`${path}${file}`).then((result) => result.text());
}
