const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwmOTPkFvuBFGoCn1f6Yk1jZTYFutaAzZSEo93Mbek-yrOgBiF_XkjzjjfNzTxvtRzg/exec';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceCategory: string;
  serviceType: string;
  description: string;
  urgency: string;
  budget: string;
}

/**
 * Envia dados do formulário para Google Sheets
 */
export async function submitToGoogleSheets(
  data: ContactFormData | QuoteFormData
): Promise<{ success: boolean; error?: string }> {
  try {
    // Adiciona informações extras
    const payload = {
      ...data,
      ip: await getUserIP(),
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Importante para Google Scripts
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // Com no-cors, não conseguimos ler a resposta
    // Assumimos sucesso se não houver erro
    return { success: true };
    
  } catch (error) {
    console.error('Erro ao enviar para Google Sheets:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Erro desconhecido' 
    };
  }
}

async function getUserIP(): Promise<string> {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch {
    return 'N/A';
  }
}