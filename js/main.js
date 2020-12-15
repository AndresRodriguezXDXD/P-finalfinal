$(document).ready(() => {
    texto_inicial = `cosa str iwal "texto de prueba"
cosa variableArreglo iwal [ 12 | 100 | 134 |20 ]
    
cosa  b iwal a + a
puespor : i:=0  hasta_que i<10 y_cambias i++ :(
    
)
                        
do: (
    mostrar::"hola"
)guail :i<10
                        
junsion  validar{} (
    guail : i>10 _ && _ i <= 20 : (
            mostrar::"hola"
    )
)
                        
junsion  tarea{ a , b} (
    guail : i >10 _ && _ i <= 20 : (
    mostrar::"hola"
    )
retorna  c
)
ysi : y<10_&&_ a := verdad : (
    cosa  a iwal 10
    mostrar :: ""
    cosa a iwal "cadena"
)ysino(
    mostrar :: "error"
    junsion  validar{} (
        guail : i>10 _ && _ i <= 20 : (
            mostrar::"hola"
        )
    )
)
     `
    $("#contact_message").val(texto_inicial)
    $("form").submit(function(e){
        e.preventDefault();
    });
    let s = window.PARSER;
    $("#validar").on('click', () => {
        try {
            console.log($("#contact_message").val())
            s.parse($("#contact_message").val());
            swal({
                title: "Exito!",
                text: "la sintaxis es correcta!",
                icon: "success",
            });
        } catch (error) {
            swal({
                title: "error!",
                text: "la sintaxis es incorrecta!",
                icon: "error",
            });
        }
    })
})