
var lista_bloco_azul = [];
var lista_bloco_verde = [];
var lista_bloco_laranja = [];
var lista_bloco_vermelho = [];


var lista_aberta_bloco_azul
var lista_aberta_bloco_verde
var lista_aberta_bloco_laranja
var lista_aberta_bloco_vermelho


var tarefas_bloco_azul = [];
var tarefas_bloco_verde = [];
var tarefas_bloco_laranja = [];
var tarefas_bloco_vermelho = [];

var pedacoEditado
var pedaco
var novo_texto
var item_Deletado
var posicao
var texto_inicio = "<p class='texto_inicio'>Nenhum projeto adicionado</p>"

var lista_cores = ['bloco_amarelo','bloco_cinza','bloco_roxo','bloco_marrom','bloco_grafite'];

var blocos_adicionados = 0;

var titulos_grandes =['Fazer','Fazendo','Parado','Feito',]
var cores_iniciais = ['bloco_azul','bloco_verde','bloco_vermelho','bloco_laranja']

var lista_blocos = [];

function bloco_base(bloco,titulos_grandes){
    return `<div class='bloco' id='${bloco}'>
    <p id="titulo_grande">${titulos_grandes}</p>

    <div class="interior_projetos" id='projetos_${bloco}'> 
        
        <p class='texto_inicio'>Nenhum projeto adicionado</p>

    </div>

    <button id="add_card" onclick="adicionar('${bloco}')"><p>+ UM CARD</p></button>
</div>`
}

function adicao_texto(bloco,novo_texto){ 
    return `<div class ='modulo' id='${novo_texto}'>
    <p id="tarefa_inserida" onclick = "editar('${bloco}','${novo_texto}')" >${novo_texto}</p>
    <div id="botoes_dentro" >
    <button class="botao_dentro" id="top" onclick = "topo('${bloco}','${novo_texto}')" ><b>-</b></button>
    <button class="botao_dentro"  id="muda" onclick = "mudar('${bloco}','${novo_texto}')"><b>...</b></button>
    <button class="botao_dentro"  id="exlui" onclick = "deletar('${bloco}','${novo_texto}')" ><b>X</b></button>
    </div>
    </div>`}


imprimir_blocos_base()

function atualizar(){

}

function imprimir_blocos_base(){

    for(let i = 0; i < cores_iniciais.length; i++){

        let lista = window[`lista_${cores_iniciais[i]}`]

        let limite = window[`lista_${cores_iniciais[i]}`].length

        for(let j = 0 ; j < limite ;j++){
            lista.push(adicao_texto(cores_iniciais[i],(window[`tarefas_${cores_iniciais[i]}`])[j]));
        }
        lista_blocos.push(bloco_base(cores_iniciais[i],titulos_grandes[i]))
        corpo.innerHTML = lista_blocos.join('')
        }
}

function novo_bloco(novo_titulo){

    cores_iniciais.push(lista_cores[blocos_adicionados])

    blocu = cores_iniciais[length]

    let lista = window[`lista_${blocu}`]
    let lista_aberta = window[`lista_aberta_${blocu}`]
    let projetos = window[`projetos_${blocu}`]

    window[`tarefas_${lista_cores[blocos_adicionados]}`] = [];

    novo_titulo = prompt('Digite o nome de sua nova lista')
    titulos_grandes.push(novo_titulo)


    window[`lista_${lista_cores[blocos_adicionados]}`] = []

    lista_blocos = [];
    imprimir_blocos_base()

        lista_aberta = lista.join('')
        projetos.innerHTML = lista_aberta;

    blocos_adicionados += 1;
}

function adicionar(bloco){

    let novo_texto = prompt('Digite o texto');

    window[`tarefas_${bloco}`].push(novo_texto);

    if(novo_texto.length > 17){
        novo_texto = prompt('texto muito grande');
        window[`tarefas_${bloco}`].pop()
        window[`tarefas_${bloco}`].push(novo_texto);
    }

    let lista = window[`lista_${bloco}`]
    let lista_aberta = window[`lista_aberta_${bloco}`]
    let projetos = window[`projetos_${bloco}`]

        lista.push(adicao_texto(bloco,novo_texto));
        console.log(lista)

        if (lista[0] == texto_inicio){
                lista.shift()
        }
        lista_aberta = lista.join('')
        projetos.innerHTML = lista_aberta;
}

function deletar(bloco,tarefa){

    let lista = window[`lista_${bloco}`]
    let lista_aberta = window[`lista_aberta_${bloco}`]
    let projetos = window[`projetos_${bloco}`]

    for (let i = 0; i <= lista.length;i++){

        let fragmento = `${lista[i]}`
            if (fragmento.indexOf(tarefa) != -1){
                posicao = i
            }
        }
        item_Deletado = lista.slice(posicao,posicao + 1);
        lista = lista.filter(item => item != item_Deletado)
        lista_aberta = lista.join('');

        if (lista.length == 0){
            lista.push(texto_inicio);
            lista_aberta = lista.join('');
            projetos.innerHTML = lista_aberta;
        }
        else{
            projetos.innerHTML = lista_aberta;
        }
         
       // Atualizar valores globais
       window[`lista_${bloco}`] = lista
       window[`lista_aberta_${bloco}`] = lista_aberta
       window[`projetos_${bloco}`] = projetos

}
function editar(bloco,tarefa){

    let lista = window[`lista_${bloco}`]
    let lista_aberta = window[`lista_aberta_${bloco}`]
    let projetos = window[`projetos_${bloco}`]

    for (var i = 0; i <= lista.length;i++){

        let fragmento = `${lista[i]}`
        if (fragmento.indexOf(tarefa) != -1){
            posicao = i
        }
    }
    novo_texto = prompt('insira o novo texto');

    if(novo_texto.length >17){
        novo_texto = prompt('texto muito grande');
    }

    lista.splice(posicao,1,adicao_texto(bloco,novo_texto));
    lista_aberta = lista.join('');
    projetos.innerHTML = lista_aberta;

    // Atualizar valores globais
    window[`lista_${bloco}`] = lista
    window[`lista_aberta_${bloco}`] = lista_aberta
    window[`projetos_${bloco}`] = projetos

}
function mudar(bloco,tarefa){

    let lista = window[`lista_${bloco}`]
    let lista_aberta = window[`lista_aberta_${bloco}`]
    let projetos = window[`projetos_${bloco}`]


            for (let i = 0; i <= lista.length;i++){

                let fragmento = `${lista[i]}`
                if (fragmento.indexOf(tarefa) != -1){
                    posicao = i
                }
            }

            pedaco = lista[posicao]
            item_Deletado = lista.slice(posicao,posicao + 1);
            lista = lista.filter(item => item != item_Deletado)

            let local = cores_iniciais.indexOf(bloco);

            local += 1

            if (local == cores_iniciais.length){
                local = 0;
            }

            let bloco_atual = bloco

            let destino = cores_iniciais[local]
        
            for (let i = 0; i <= 5; i++){
                pedacoEditado = pedaco.replace(bloco,`${destino}`);
                pedaco = pedacoEditado
                }

            if (window[`lista_${destino}`][0] == texto_inicio){
                window[`lista_${destino}`].pop()
            }

            if (lista.length == 0){
                 lista.push(texto_inicio);
            }

            window[`lista_${destino}`].push(pedacoEditado);

            window[`lista_aberta_${destino}`] = window[`lista_${destino}`].join('');
            window[`projetos_${destino}`].innerHTML = window[`lista_aberta_${destino}`];

            lista_aberta = lista.join('');
            projetos.innerHTML = lista_aberta;

            window[`lista_${bloco}`] = lista
            window[`lista_aberta_${bloco}`] = lista_aberta
            window[`projetos_${bloco}`] = projetos
        
}
function topo(bloco,tarefa){

    let lista = window[`lista_${bloco}`]
    let lista_aberta = window[`lista_aberta_${bloco}`]
    let projetos = window[`projetos_${bloco}`]

        if(lista.length > 1){

        for (let i = 0; i <= lista.length;i++){

            let fragmento = `${lista[i]}`
            if (fragmento.indexOf(tarefa) != -1){
                posicao = i
            }
        }

        pedaco = lista[posicao]


        item_Deletado = lista.slice(posicao,posicao + 1);
        lista = lista.filter(item => item != item_Deletado)
        lista_aberta = lista.join('');

        if (lista.length == 0 && lista[0] != texto_inicio){
            lista.push(texto_inicio);
            lista_aberta = lista.join('');
            projetos.innerHTML = lista_aberta;
            console.log(lista)
        }
        else{
            projetos.innerHTML = lista_aberta;
        }

        lista.unshift(pedaco);

        lista_aberta = lista.join('');
        projetos.innerHTML = lista_aberta;

        window[`lista_${bloco}`] = lista
        window[`lista_aberta_${bloco}`] = lista_aberta
        window[`projetos_${bloco}`] = projetos
    }
}