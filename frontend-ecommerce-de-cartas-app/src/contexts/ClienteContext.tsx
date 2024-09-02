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


