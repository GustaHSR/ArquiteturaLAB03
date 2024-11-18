// Importa a classe `Reserva`.
import { Reserva } from "./reserva";

// Classe que gerencia as reservas de um hotel.
export class Hotel {
    // Lista que armazena todas as reservas do hotel.
    private reservas: Reserva[];

    // Construtor que inicializa a lista de reservas como vazia.
    constructor() {
        this.reservas = [];
    }

    // Método para registrar uma nova reserva no hotel.
    registrarReserva(reserva: Reserva) {
        this.reservas.push(reserva); // Adiciona a nova reserva à lista.
    }

    // Método para cancelar uma reserva com base no número do quarto.
    cancelarReserva(numeroQuarto: number) {
        try {
            // Procura a reserva correspondente ao número do quarto.
            const reserva = this.reservas.find(f => f.getNumeroQuarto() === numeroQuarto);
            // Encontra o índice da reserva na lista.
            const index = this.reservas.findIndex(f => f.getNumeroQuarto() === numeroQuarto);

            if (reserva) { // Verifica se a reserva foi encontrada.
                // Verifica se a data de entrada está definida e a data de saída é nula.
                if (reserva.getDataEntrada() != null && reserva.getDataSaida() == null) {
                    // Troca a posição da reserva encontrada com a última reserva na lista.
                    const aux = this.reservas[this.reservas.length - 1];
                    this.reservas[this.reservas.length - 1] = this.reservas[index];
                    this.reservas[index] = aux;

                    // Remove a última reserva da lista (que corresponde à reserva cancelada).
                    this.reservas.pop();

                    // Exibe uma mensagem de sucesso no console.
                    console.log(`Reserva do quarto ${numeroQuarto} cancelada com sucesso!`);
                }
            }
        } catch {
            // Exibe uma mensagem de erro caso a reserva não seja encontrada.
            console.error(`Reserva não encontrada.`);
        }
    }

    // Método para consultar o status de um quarto.
    consultarStatusQuarto(numeroQuarto: number) {
        // Procura a reserva correspondente ao número do quarto.
        const reserva = this.reservas.find(f => f.getNumeroQuarto() === numeroQuarto);

        // Verifica se o quarto está reservado ou disponível.
        if (reserva) {
            console.log("Reservado"); // Exibe "Reservado" se uma reserva for encontrada.
        } else {
            console.log("Disponível"); // Exibe "Disponível" caso contrário.
        }
    }
}