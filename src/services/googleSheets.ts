const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbyIyPlbJjA6mRjfVgPdG-m9i5PJYPtUBs_hdNAcBODxK0YAsgqpILUtTHkQjyt7veXR/exec";

export type TipoFormulario = "contato" | "orcamento";

export async function enviarParaSheets(
  tipo: TipoFormulario,
  payload: Record<string, any>
) {
  const response = await fetch(GOOGLE_SHEETS_URL, {
    method: "POST",
    body: JSON.stringify({
      tipo,
      ...payload,
      userAgent: navigator.userAgent
    })
  });

  if (!response.ok) {
    throw new Error("Erro ao enviar para o Google Sheets");
  }

  return response.json();
}
