import * as React from "react";
import {createContext, ReactNode, useState} from "react";

type Cliente = {
    id?: number;
    nome: string;
    telefone: string;
    email: string;
    senha: string;
    enderecoCobranca: Endereco;
    enderecoEntrega: Endereco;
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
    tipoResidencia: string;
    tipoLogradouro: string;
    logradouro: string;
    numero: string;
    bairro: string;
    cep: string;
    cidade: string;
    estado: string;
    pais: string;
    observacoes: string;
};

export const ClienteContext = createContext({});

export const ClienteContextProvider = ({children}: {children: ReactNode}) => {

    const mockCliente: Cliente[] = [{
        id: 1,
        nome: "Maria Oliveira",
        telefone: "987654321",
        email: "maria.oliveira@example.com",
        senha: "senhaSegura456",
        enderecoCobranca: {
            id: 1,
            tipoResidencia: "Apartamento",
            tipoLogradouro: "Avenida",
            logradouro: "Avenida Paulista",
            numero: "1000",
            bairro: "Bela Vista",
            cep: "01310-100",
            cidade: "São Paulo",
            estado: "SP",
            pais: "Brasil",
            observacoes: "Próximo ao MASP",
        },
        enderecoEntrega: {
            id: 2,
            tipoResidencia: "Casa",
            tipoLogradouro: "Rua",
            logradouro: "Rua das Acácias",
            numero: "200",
            bairro: "Jardim das Flores",
            cep: "01420-200",
            cidade: "São Paulo",
            estado: "SP",
            pais: "Brasil",
            observacoes: "Casa com portão azul",
        },
        cartoes: [
            {
                id: 1,
                nomeCartao: "MARIA OLIVEIRA",
                numeroCartao: "9999 8888 7777 6666",
                bandeiraCartao: "Visa",
                codigoDeSeguranca: "789",
            },
            {
                id: 2,
                nomeCartao: "MARIA OLIVEIRA",
                numeroCartao: "5555 4444 3333 2222",
                bandeiraCartao: "Mastercard",
                codigoDeSeguranca: "012",
            },
        ],
    }];

    const [clientes, setClientes] = useState<Cliente[]>(mockCliente);

    const addCliente = (cliente: Cliente) => {
        if (clientes.length === 0) {
            cliente.id = 1;
        } else {
            // @ts-ignore
            cliente.id = clientes[clientes.length - 1].id + 1;
        }
        setClientes([...clientes, cliente]);
    }

    const removeCliente = (id: number) => {
        setClientes(clientes.filter(cliente => cliente.id !== id));
        window.alert("Cliente removido com sucesso!");
    }

    const updateCliente = (id: number, cliente: Cliente) => {
        const index = clientes.findIndex(cliente => cliente.id == id);
        const newClientes = [...clientes];
        newClientes[index] = cliente;
        setClientes(newClientes);
        console.log(newClientes)
        window.alert("Cliente atualizado com sucesso!");
    }

    const getCliente = (id: string) => {
        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].id === parseInt(id)) {
                return clientes[i];
            }
        }
        return null; // Retorna null se o cliente não for encontrado
    }

    const getClientes = () => {
        return clientes;
    }

    return (
        <ClienteContext.Provider value={{clientes, addCliente, removeCliente, updateCliente, getCliente, getClientes}}>
            {children}
        </ClienteContext.Provider>
    );
};


