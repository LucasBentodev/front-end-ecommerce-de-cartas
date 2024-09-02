type Cliente = {
    id?: number;
    nome: string;
    telefone: string;
    email: string;
    senha: string;
    enderecos: Endereco[];
    cartoes: Cartao[];
};

type Cartao = {
    id?: number;
    numero: string;
    nomeImpresso: string;
    bandeira: string;
    cvv: string;
    validade: string;
    observacoes: string;
};

type Endereco = {
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
};
