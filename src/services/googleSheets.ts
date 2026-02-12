const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbz_8mVYzLFy7Qb3l7bkR6aXyG9Kq78B2skgor6CemfBoJ9tOSncdOksek6Yd43kCEae/exec";

export type TipoFormulario = "contato" | "orcamento";

export async function enviarParaSheets(
  tipo: TipoFormulario,
  payload: Record<string, any>
) {
  const response = await fetch(GOOGLE_SHEETS_URL, {
    method: "POST",
    body: JSON.stringify({
      tipo,
      statusEnvio: "não enviado",
      ...payload,
      userAgent: navigator.userAgent
    })
  });

  if (!response.ok) {
    throw new Error("Erro ao enviar para o Google Sheets");
  }

  return response.json();
}
