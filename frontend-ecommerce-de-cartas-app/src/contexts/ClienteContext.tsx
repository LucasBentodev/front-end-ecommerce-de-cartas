import * as React from "react";
import {createContext, ReactNode, useState} from "react";

type Cliente = {
    id?: number;
    nome: string;
    telefone: string;
    email: string;
    senha: string;
    enderecoCobranca: {
        rua: string;
        numero: string;
        bairro: string;
        cidade: string;
        pais: string;
        cep: string;
    };
    enderecoEntrega: Endereco
    cartoes: Cartao[];
};

type Cartao = {
    id?: number;
    nomeCartao: string;
    numeroCartao: string;
    bandeiraCartao: string;
    codigoDeSeguranca: string;
};

type Endereco = {
    id?: number;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    pais: string;
    cep: string;
};

export const ClienteContext = createContext({});

export const ClienteContextProvider = ({children}: {children: ReactNode}) => {
    const [clientes, setClientes] = useState<Cliente[]>([]);

    const mockCliente: Cliente = {
        nome: "João Silva",
        telefone: "123456789",
        email: "joao.silva@example.com",
        senha: "senhaSegura123",
        enderecoCobranca: {
            rua: "Rua das Flores",
            numero: "123",
            bairro: "Centro",
            cidade: "São Paulo",
            pais: "Brasil",
            cep: "12345-678",
        },
        enderecoEntrega: {
            rua: "Rua das Pedras",
            numero: "456",
            bairro: "Jardim",
            cidade: "São Paulo",
            pais: "Brasil",
            cep: "98765-432",
        },
        cartoes: [
            {
                id: 1,
                nomeCartao: "JOÃO SILVA",
                numeroCartao: "1111 2222 3333 4444",
                bandeiraCartao: "Visa",
                codigoDeSeguranca: "123",
            },
            {
                id: 2,
                nomeCartao: "JOÃO SILVA",
                numeroCartao: "5555 6666 7777 8888",
                bandeiraCartao: "Mastercard",
                codigoDeSeguranca: "456",
            },
        ],
    };

    // setClientes([mockCliente]);

    const addCliente = (cliente: Cliente) => {
        setClientes([...clientes, cliente]);
    }

    const removeCliente = (id: number) => {
        setClientes(clientes.filter(cliente => cliente.id !== id));
    }

    const updateCliente = (id: number, cliente: Cliente) => {
        setClientes(clientes.map(cliente => cliente.id === id ? cliente : cliente));
    }

    const getCliente = (id: number) => {
        return clientes.find(cliente => cliente.id === id);
    }

    return (
        <ClienteContext.Provider value={{clientes, addCliente, removeCliente, updateCliente, getCliente}}>
            {children}
        </ClienteContext.Provider>
    );
};


