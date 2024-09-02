
import axios from 'axios';

const baseURL = 'http://localhost:8080/clientes'; 

export interface Cliente {
    id?: number;
    nome: string;
    telefone: string;
    email: string;
    senha: string;
    enderecos: Endereco[];
    cartoes: Cartao[];
}

export interface Endereco {
    id?: number;
    tipoResidencia:string, 
    tipoLogradouro:string,
    logradouro:string,
    numero: string,
    bairro: string,
    cep: string,
    cidade: string,
    estado: string,
    pais:string,
    observacoes:string,
    enderecoCobranca: boolean,
    enderecoEntregaPadrao:boolean,
}

export interface Cartao {
    id?: number;
    numero: string;
    nomeImpresso: string;
    bandeira: string;
    cvv: string;
    validade: string;
    observacoes: string;
}

const clientAPI = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const addClienteAPI = async (cliente: Cliente): Promise<Cliente> => {
    const response = await clientAPI.post<Cliente>('', cliente);
    return response.data;
};

export const getClientesAPI = async (): Promise<Cliente[]> => {
    try {
        const response = await clientAPI.get<Cliente[]>('');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar clientes:', error);
        throw error;
    }
};

export const getClienteAPI = async (id :number): Promise<Cliente> => {
    try {
        const response = await clientAPI.get<Cliente>(`/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar clientes:', error);
        throw error;
    }
};

export const updateClienteApi = async ( cliente : Cliente): Promise<Cliente> => {
    try {
        const response = await clientAPI.put('', cliente);
        return response.data;
    } catch (error) {
        console.error('Erro ao alterar cliente:', error);
        throw error;
    }
};

export const deleteClienteApi = async ( id : number): Promise<Cliente> => {
    try {
        const response = await clientAPI.delete(`/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao delete cliente:', error);
        throw error;
    }
};

