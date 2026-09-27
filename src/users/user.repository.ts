import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class UserRepository {

  async buscarPorId(id: string) {

    const caminho = join(
      process.cwd(),
      'src',
      'database',
      'users.json'
    );

    const arquivo = await readFile(caminho, 'utf-8');

    const banco = JSON.parse(arquivo);

    return banco.users.find(
      (user: any) => user.id === Number(id)
    );
  }
  async atualizar(id: string, usuarioAtualizado: any) {
    const caminho = join(
      process.cwd(),
      'src',
      'database',
      'users.json'
    );
    const arquivo = await readFile(caminho, 'utf-8');
    const banco = JSON.parse(arquivo);

    const index = banco.users.findIndex(
      (user: any) => user.id === Number(id)
    );
    if (index === -1) {
      throw new Error('Usuário não encontrado');
    }
    banco.users[index] = {
      ...banco.users[index],
      ...usuarioAtualizado,
    };
    await writeFile(caminho, JSON.stringify
      (banco, null, 2), 'utf-8');
  }

  async criarUsuario(criarUsuario: any) {
    const caminho = join(
      process.cwd(),
      'src',
      'database',
      'users.json'
    );
    const arquivo = await readFile(caminho, 'utf-8');
    const banco = JSON.parse(arquivo);
    const novoId = banco.users.length + 1;
    const usuarioComId = {
      id: novoId,
      ...criarUsuario,
    };
    banco.users.push(usuarioComId);
    await writeFile(caminho, JSON.stringify(banco, null, 2), 'utf-8');
    return usuarioComId;
  }

  async buscarTodosUsuarios() {
    const caminho = join(
      process.cwd(),
      'src',
      'database',
      'users.json'
    );
    const arquivo = await readFile(caminho, 'utf-8');
    const banco = JSON.parse(arquivo);
    return banco.users;
  }

}