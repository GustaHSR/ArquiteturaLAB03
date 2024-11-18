// Classe que representa uma reserva em um hotel.
export class Reserva {
    // Atributos privados que armazenam informações sobre a reserva.
    private numeroQuarto: number;  // Número do quarto reservado.
    private nomeHospede: string;  // Nome do hóspede.
    private dataEntrada: Date;    // Data de entrada do hóspede.
    private dataSaida: Date;      // Data de saída do hóspede.

    // Construtor para inicializar uma reserva com os dados fornecidos.
    constructor(numeroQuarto: number, nomeHospede: string, dataEntrada: Date, dataSaida: Date) {
        this.numeroQuarto = numeroQuarto;
        this.nomeHospede = nomeHospede;
        this.dataEntrada = dataEntrada;
        this.dataSaida = dataSaida;
    }

    // Métodos "getter" para acessar os atributos da reserva.

    // Retorna o número do quarto.
    getNumeroQuarto(): number {
        return this.numeroQuarto;
    }

    // Retorna o nome do hóspede.
    getNomeHospede(): string {
        return this.nomeHospede;
    }

    // Retorna a data de entrada do hóspede.
    getDataEntrada(): Date {
        return this.dataEntrada;
    }

    // Retorna a data de saída do hóspede.
    getDataSaida(): Date {
        return this.dataSaida;
    }
}