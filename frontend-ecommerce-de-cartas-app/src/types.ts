type Cliente = {
    id?: number;
    nome: string;
    telefone: Telefone;
    email: string;
    senha: string;
    cpf: string;
    genero: string;
    ativo: boolean;
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
    eCartaoPadra: boolean;
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

type Telefone = {
    tipo : string,
    ddd : string,
    numero:string, 
};
