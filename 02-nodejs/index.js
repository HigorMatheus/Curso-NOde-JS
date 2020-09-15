/*
0 Obiter um usuario
1 Obiter um telefone de usuario atravez do seu id 
2 Obiter o endereço do usuario pelo ID
*/
// importamos um modulo do node js
const util = require('util')
const obiterEnderecoAsync = util.promisify(obiterEndereco)

function obiterUsuario(){
    // quando der algum problrma -> reject(ERRO)
    //quando sucess -> RESOLV
    return new Promise(function resolvePromisse(resolve, reject){
        setTimeout(function(){
            // return reject(new Error('DEU RUIM DE VERDADE'))
            return resolve({
                id: 1,
                name: 'Aladim',
                dataNascimento: new Date()
            })
        },1000)
    })
   
}

function obiterTelefone(idUsuario){
    return new Promise(function resolvePromisse(resolve, reject){
        setTimeout(() => {
            return resolve({
                telefone: '1199002',
                ddd: 11
            })
        }, 2000);
    })
  
}

function obiterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null,{
            rua : 'dos bobos',
            numero: 0
        })
    }, 2000);
}
//1o passo adicionar a paravra async -> altomaticamente ela retornara uma Promisse
main()
async function main(){
    try {
        const usuario = await obiterUsuario()
        // const telefone = await obiterTelefone(usuario.id)
        // const endereco = await obiterEnderecoAsync(usuario.id)
        const resultado = await Promise.all([
            obiterTelefone(usuario.id),
            obiterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]

        console.log(`
            Nome: ${usuario.name}
            Endereco: ${endereco.rua},${endereco.numero}
            Telefone: (${telefone.ddd})${telefone.telefone}
        `);
    } catch (error) {
        console.error('DEU RUIM');
    }
}

// const usuarioPromise = obiterUsuario()
// //para manipular o sucesso usamos a função .then
// // para manipular erros , usamos .catch 
// usuarioPromise
//     .then(function(usuario){
//         return obiterTelefone(usuario.id)
//             .then(function resolverTelefone( result){
//                 return{
//                     usuario:{
//                         name: usuario.name,
//                         id: usuario.id
//                     },
//                     telefone: result
//                 }
//             })
//     })
//     .then(function(resultado){
//         const endereco = obiterEnderecoAsync(resultado.usuario.id)
//         return endereco.then(function resolverEndereco(result){
//             return{
//                 usuario: resultado.usuario,
//                 telefone: resultado.telefone,
//                 endereco: result
//             }
//         })
//     })
//     .then(function (resultado){
//         console.log(`
//             Nome: ${resultado.usuario.name}
//             Endereco: ${resultado.endereco.rua},${resultado.endereco.numero}
//             Telefone: (${resultado.telefone.ddd})${resultado.telefone.telefone}
//         `);
//     })
//     .catch(function (error){
//         console.error('DEU RUIM', error);
//     })
//  obiterUsuario( function resolverUsuario(error, usuario){

//     if(error){
//         console.error('DEU RUIM em USUARIO', error);
//         return;
//     }
//     obiterTelefone( usuario.id, function resolverTelefone(error1,telefone){
//         if(error1){
//             console.error('DEU RUIM em TELEFONE', error1);
//             return;
//         }
//         obiterEndereco(usuario.id, function resolverEndereco(error2,endereco){
//             if(error2){
//                 console.error('DEU RUIM em ENDEREÇO', error2);
//                 return;
//             }
//             console.log(`
//             Nome: ${usuario.name}
//             Endereco: ${endereco.rua},${endereco.numero}
//             Telefone: (${telefone.ddd})${telefone.telefone}
//             `);
//         })
       
//     })
//  })
// const telefone = obiterTelefone(usuario.id)


// console.log('telefone', telefone);