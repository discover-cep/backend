import api from './viaCepApi';

interface ApiResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export default async function getNewCep(cep: string): Promise<ApiResponse|undefined> {
  try {
    const response = await api.get<ApiResponse>(`${cep}/json`);
    return response.data;
  } catch (error) {
    return undefined;
  }
}
