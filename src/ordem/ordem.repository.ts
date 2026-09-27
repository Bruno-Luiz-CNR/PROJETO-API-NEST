import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";
import { join } from "path/win32";

@Injectable()
export class OrdemRepository {
    async buscarOrdemRepository(id: string) {
    const caminho = join(
                process.cwd(),
                'src',
                'database',
                'ordem.json'
            );
            const arquivo = await readFile(caminho, 'utf-8');
            const banco = JSON.parse(arquivo);
            return banco.ordem.find(
                (ordem: any) => ordem.id === Number(id)
            );
        }
    async buscarTodosOrdemRepository() {
        const caminho = join(
            process.cwd(),
            'src',
            'database',
            'ordem.json'
        );
        const arquivo = await readFile(caminho, 'utf-8');
        const banco = JSON.parse(arquivo);
        return banco.ordem;
    }
    async salvarOrdens(ordens: any[]) {
        const caminho = join(
            process.cwd(),
            'src',
            'database',
            'ordem.json'
        );
        const banco = { ordens };
        await writeFile(caminho, JSON.stringify(banco, null, 2), 'utf-8');
    }
    
}