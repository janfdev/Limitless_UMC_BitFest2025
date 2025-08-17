export function initials(name: string) {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase()).join("");
}

export function parseProdiName(name: string) {
  const [jenjangMaybe, ...rest] = name.split("-");
  const known = ["S1", "D3", "D4", "S2", "S3"];
  if (known.includes(jenjangMaybe)) {
    return {
      jenjang: jenjangMaybe,
      jurusan: rest.join("-").replaceAll("-", " "),
    };
  }
  return { jenjang: "—", jurusan: name };
}
