import { Injectable } from "@nestjs/common";
import { ProdRepository } from "./prod.repository.js";
import { AtualizarProdutoDto, DeleteProdutoDto, CriarProdutoDto } from "./dto/produto.dto.js";

@Injectable()
export class ProdService {
    constructor(private readonly prodRepository: ProdRepository) {}

    async buscarPorIdProduto(id: string) {
        return await this.prodRepository.buscarProdutoRepository(id);
    }
    async buscarTodosProdutos(){
        const produtos = await this.prodRepository.buscarTodosProdutos();
        if (!produtos) {
            throw new Error('Nenhum produto encontrado');
        }
        return produtos;
    }
    async criarProduto(novoProduto: CriarProdutoDto) {
        const produtos = await this.prodRepository.buscarTodosProdutos();
        const novoId = produtos.length + 1;
        const produtoComId = { id: novoId, ...novoProduto };
        produtos.push(produtoComId);
        await this.prodRepository.salvarProdutos(produtos);
        return produtoComId;
    }
    async atualizarProduto(id: string, produtoAtualizado: AtualizarProdutoDto) {
        const produtos = await this.prodRepository.buscarTodosProdutos();
        const indice = produtos.findIndex((p: any) => p.id === Number(id));
        if (indice === -1) {
            throw new Error('Produto não encontrado');
        }
        produtos[indice] = { id: Number(id), ...produtoAtualizado };
        await this.prodRepository.salvarProdutos(produtos);
        return produtos[indice];
    }
    async deletarProduto(id: string, deleteProdutoDto: DeleteProdutoDto) {
        const produtos = await this.prodRepository.buscarTodosProdutos();
        const indice = produtos.findIndex((p: any) => p.id === Number(id));
        if (indice === -1) {
            throw new Error('Produto não encontrado');
        }
        produtos.splice(indice, 1);
        await this.prodRepository.salvarDelecaoProduto(produtos, deleteProdutoDto);
        return { message: 'Produto deletado com sucesso' };
    }
}