/*desenvolver um script que possa criar objetos dos tipos cliente, telefone e endereço*/
/*Para cada atributo, deverão existir métodos de acesso, get e set. Estes métodos deverão estar disponíveis na própria 
função construtora do objeto. Para cada atributo, deverão existir métodos que permitam recuperar o valor do atributo em caixa alta
e caixa baixa.*/
function Cliente(nome){
    this.nome=nome
    this.getNome= function(){
        return this.nome;
    }
    this.setNome=function(novoNome){
        this.nome= novoNome;
    }
    this.getNomeMaiusculo=function(){
        return this.nome.toUpperCase()
    }
    this.getNomeMinusculo=function(){
        return this.nome.toLowerCase()
    }
}
function Telefone(telefone){
    this.telefone=telefone
    this.getTelefone= function(){
        return this.telefone;
    }
    this.setTelefone= function(novoTelefone){
        this.telefone=novoTelefone
    }
    this.getTelefoneMaiusculo=function(){
        return String(this.telefone).toUpperCase()
    }
    this.getTelefoneMinusculo=function(){
        return this.telefone.toLowerCase()
    }
}
function Endereco(endereco){
    this.endereco=endereco
    this.getEndereco=function(){
        return this.endereco;
    }
    this.setEndereco= function(novoEndereco){
        this.endereco=novoEndereco  /*jardineiro é jseus*/
    }
    this.getEnderecoMaiusculo=function(){
        return this.endereco.toUpperCase()
    }
    this.getEnderecoMinusculo=function(){
        return this.endereco.toLowerCase()
    }
}
/*O script deve conter linhas para testar a saída formatada */
let telefone= new Telefone('9848392798')
let endereco= new Endereco ('Sapucai Mirim-MG')
let cliente= new Cliente ('Vicente Bento')

console.log(cliente.getNomeMaiusculo())
console.log(telefone.getTelefone()) 
console.log(endereco.getEnderecoMinusculo())


/*parte 2 Além disto, o script deve ser robusto, e disponibilizar funções que permitam realizar ordenação de clientes por nome.
Para isso, desenvolva uma função que receba um Array de clientes e devolva um outro Array, contendo os mesmo clientes, porém
ordenados alfabeticamente pelo nome.*/
let clientes=[
    new Cliente ("Maria"),
    new Cliente ("Claudia"),
    new Cliente ("Sebastiana"),
    new Cliente ("Denise")
];

function ordemClientes(clientes){
    return clientes.slice().sort(function(a, b){
        return a.getNome().localeCompare(b.getNome());
    }); /*as avres somos nozes*/
}
let clientesOrdenados = ordemClientes(clientes);
for (let i = 0; i < clientesOrdenados.length; i++) {
    console.log(clientesOrdenados[i].getNome());
}