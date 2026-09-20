export const EXTENSION_ABRE = ['pdf', 'html', 'txt', 'svg']

export function abrirODescargar(anexo) {
  const url = `/anexos/${anexo.archivo}`
  if (EXTENSION_ABRE.includes(anexo.extension)) {
    return { url, target: '_blank', rel: 'noopener noreferrer', descargar: false }
  }
  return { url, target: '_blank', rel: 'noopener noreferrer', descargar: true }
}

export function etiquetaAccion(anexo, ui) {
  return EXTENSION_ABRE.includes(anexo.extension) ? ui.anexos.abrir : ui.anexos.descargar
}