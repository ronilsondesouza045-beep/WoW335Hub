import { Addon } from "../data/addons";

export function baixarAddon(addon: Addon) {
  if (!addon || !addon.downloadUrl) {
    alert("Este addon não tem link direto configurado.");
    return;
  }

  const a = document.createElement("a");
  a.href = addon.downloadUrl;
  a.download = `${addon.slug}.zip`;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function copiarCaminho(addon: Addon) {
  const texto = `World of Warcraft/Interface/AddOns/${addon.slug}`;
  navigator.clipboard.writeText(texto).then(() => {
    alert("Caminho copiado: " + texto);
  }).catch(err => {
    console.error('Erro ao copiar: ', err);
  });
}
