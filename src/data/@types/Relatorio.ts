import Pets from "./Pets";

export interface Relatorio {
    id: number;
    email: string;
    valor: string;
    pet: Pets;
}