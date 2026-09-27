import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";
import { join } from "path/win32";
import { DeleteProdutoDto } from "./dto/produto.dto.js";

@Injectable()
export class ProdRepository {
    async buscarProdutoRepository(id: string) {
        const caminho = join(
            process.cwd(),
            'src',
            'database',
            'produtos.json'
            );
        const arquivo = await readFile(caminho, 'utf-8');
        const banco = JSON.parse(arquivo);
        return banco.produtos.find(
            (produto: any) => produto.id === Number(id)
        );
    }
    async buscarTodosProdutos() {
        const caminho = join(
            process.cwd(),
            'src',
            'database',
            'produtos.json'
        );
        const arquivo = await readFile(caminho, 'utf-8');
        const banco = JSON.parse(arquivo);
        return banco.produtos;
    }
    async salvarProdutos(produtos: any[]) {
        const caminho = join(
            process.cwd(),
            'src',
            'database',
            'produtos.json'
        );
        const banco = { produtos };
        await writeFile(caminho, JSON.stringify(banco, null, 2), 'utf-8');
    }
    async salvarDelecaoProduto(produtos: any[], deleteProdutoDto: DeleteProdutoDto) {
        const caminho = join(
            process.cwd(),
            'src',
            'database',
            'produtos.json'
        );
        const banco = { produtos };
        await writeFile(caminho, JSON.stringify(banco, null, 2), 'utf-8');
    }
}