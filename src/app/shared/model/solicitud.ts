import { Equipo } from "./equipo"
import { Usuario } from "./usuario"
export class Solicitud{
    id!: number
    team!:Equipo
    usuario!:Usuario
}