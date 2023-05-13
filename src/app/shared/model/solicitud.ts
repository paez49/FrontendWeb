import { Equipo } from "./equipo"
import { User } from "./usuario"
export class Solicitud{
    id!: number
    team!:Equipo
    usuario!:User
}