    import * as React from "react";
    import {createContext, ReactNode, useState} from "react";
    import { addClienteAPI, deleteClienteApi, getClienteAPI, getClientesAPI, updateClienteApi } from "../requests/ClienteRequests";
    import { useNavigate } from 'react-router-dom';

    interface ClienteContextType {
        clientes: Cliente[];
        addCliente: (cliente: Cliente) => Promise<void>;
        removeCliente: (id: number) => void;
        updateCliente: (cliente: Cliente) => void;
        getCliente: (id: number) => Promise<Cliente>;
        getClientes: () => Promise<Cliente[]>;
    }

    export const ClienteContext = createContext<ClienteContextType | undefined>(undefined);

    export const ClienteContextProvider = ({children}: {children: ReactNode}) => {

        /*const mockCliente: Cliente[] = [{
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
        }];*/
        const navigate = useNavigate();
        const [clientes, setClientes] = useState<Cliente[]>([]);

        const addCliente = async (cliente: Cliente) => {
        try {
                const novoCliente = await addClienteAPI(cliente);
                setClientes([...clientes, novoCliente]);
                window.alert("Cliente cadastrado com sucesso");
                setTimeout(() => {
                    navigate('/listaclientes');
                }, 2000);
                
        }catch(error){
                console.error('Erro ao salvar cliente',error)
        };
        }


        const updateCliente = async (cliente: Cliente) => {
            try {
                const updatedCliente = await updateClienteApi(cliente);
                setClientes([...clientes, updatedCliente]);
                window.alert("Cadastro atualizado com sucesso");
                setTimeout(() => {
                    navigate('/listaclientes');
                }, 2000);
                
        }catch(error){
                console.error('Erro ao salvar cliente',error)
            };
        }

        const removeCliente = async (id : number) => {
            try {
                const deleteCliente = await deleteClienteApi(id);
                window.alert("Cliente deletado com sucesso");
                setTimeout(() => {
                    navigate('/listaclientes');
                }, 2000);
                
        }catch(error){
                console.error('Erro ao salvar cliente',error)
            };
        }

        const getCliente = async(id : number)=> {
            try{
                const cliente = await getClienteAPI(id);
                return cliente;
            }catch(error){
                console.error('Erro ao buscar clientes:', error);
                throw error;
            }
        };

        const getClientes = async (): Promise<Cliente[]> => {
            try {
                const listaclientes = await getClientesAPI(); // Chama a API sem parâmetros
                return listaclientes;
            } catch (error) {
                console.error('Erro ao buscar clientes:', error);
                throw error;
            }
        };

        return (
            <ClienteContext.Provider value={{clientes, addCliente, removeCliente, updateCliente, getCliente, getClientes}}>
                {children}
            </ClienteContext.Provider>
        );
    };


