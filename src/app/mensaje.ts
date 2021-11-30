export type tipoMensaje = 'success' | 'warning' | 'danger';

export interface Mensaje {
    texto: string;
    tipo: tipoMensaje;
}
