import { Injectable } from "@nestjs/common";
import { OrdemRepository } from "./ordem.repository.js";
import { CriarOrdemDto, DeleteOrdemDto } from "./dto/ordem.dto.js";

@Injectable()
export class OrdemService {
    constructor(private readonly ordemRepository: OrdemRepository) {}

    async buscarPorIdOrdem(id: string) {
        return await this.ordemRepository.buscarOrdemRepository(id);
    }

    async buscarTodosOrdem() {
        return await this.ordemRepository.buscarTodosOrdemRepository();
    }
    async atualizarOrdem(id: string, ordemAtualizada: any) {
        const ordens = await this.ordemRepository.buscarTodosOrdemRepository();
        const indice = ordens.findIndex((o: any) => o.id === Number(id));
        if (indice === -1) {
            throw new Error('Ordem não encontrada');
        }
        ordens[indice] = { id: Number(id), ...ordemAtualizada };
        await this.ordemRepository.salvarOrdens(ordens);
        return ordens[indice];
    }
    async deletarOrdem(id: string, deleteOrdemDto: DeleteOrdemDto) {
        const ordens = await this.ordemRepository.buscarTodosOrdemRepository();
        const indice = ordens.findIndex((o: any) => o.id === Number(id));
        if (indice === -1) {
            throw new Error('Ordem não encontrada');
        }
        ordens.splice(indice, 1);
        await this.ordemRepository.salvarOrdens(ordens);
        return { message: 'Ordem deletada com sucesso', motivo: deleteOrdemDto.motivo };
    }
    async criarOrdem(novaOrdem: CriarOrdemDto) {
        const ordens = await this.ordemRepository.buscarTodosOrdemRepository();
        const id = ordens.length > 0 ? Math.max(...ordens.map((o: any) => o.id)) + 1 : 1;
        const ordem = { id, ...novaOrdem };
        ordens.push(ordem);
        await this.ordemRepository.salvarOrdens(ordens);
        return ordem;
    }
}