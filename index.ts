// Importa as classes Reserva e Hotel.
import { Reserva } from "./reserva";
import { Hotel } from "./hotel";

// Função principal que executa o programa.
function main() {
    // Cria uma instância da classe Hotel, representando o hotel que gerenciará as reservas.
    const hotel = new Hotel();

    // Cria duas reservas com informações específicas (número do quarto, nome do hóspede e datas de entrada e saída).
    const reserva1 = new Reserva(1, "Gustavo", new Date(2 / 11 / 2024), new Date(2 / 12 / 2024)); // Reserva para o quarto 1.
    const reserva2 = new Reserva(2, "Gabriel", new Date(3 / 11 / 2024), new Date(3 / 12 / 2024)); // Reserva para o quarto 2.

    // Registra as reservas no hotel.
    hotel.registrarReserva(reserva1); // Adiciona a reserva do quarto 1.
    hotel.registrarReserva(reserva2); // Adiciona a reserva do quarto 2.

    // Cancela a reserva do quarto 2 e exibe uma mensagem de sucesso.
    hotel.cancelarReserva(2);

    // Consulta o status do quarto 1 e exibe no console se está reservado ou disponível.
    hotel.consultarStatusQuarto(1); // Resultado esperado: "Reservado".

    // Consulta o status do quarto 2 (após cancelamento) e exibe no console.
    hotel.consultarStatusQuarto(2); // Resultado esperado: "Disponível".

    // Tenta cancelar uma reserva inexistente (quarto 3).
    hotel.cancelarReserva(3); // Resultado esperado: "Reserva não encontrada."

    // Consulta o status do quarto 3 (sem reserva).
    hotel.consultarStatusQuarto(3); // Resultado esperado: "Disponível".
}

// Chama a função principal para executar o programa.
main();
