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
