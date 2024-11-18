## Executar

<!--sec data-title="Prompt: macOS and Linux" data-id="OSX_Linux_prompt" data-collapse=true ces-->

    $ npm install
    
<!--endsec-->

<!--sec data-title="Prompt: macOS and Linux" data-id="OSX_Linux_prompt" data-collapse=true ces-->

    $ npx run dev
    
<!--endsec-->

## Diagrama UML
![](https://github.com/user-attachments/assets/ccb1c872-ec65-4a23-bc0d-f0f9640b11df)

## Teste

Inicializa o Hotel e registra duas reservas nele.
Após isso cancela a reserva de código 2 e consulta o status do quarto de código 1, mostrando reservado para o quarto de código 1 e cancelando a reserva do quarto de código 2.
Depois vê o status do quarto 2 retornando "Disponível" e tenta cancelar e consultar um quarto com código inexistente
