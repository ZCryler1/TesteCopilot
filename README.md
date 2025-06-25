# TesteCopilot
Nivel 2 dos Desafios do ChatGPT




# Code Highlighter App

Este aplicativo permite gerar uma página HTML com destaque de sintaxe para arquivos de código-fonte (JavaScript, Python, Java) usando [highlight.js](https://highlightjs.org/).

## Funcionalidades

- Lê um arquivo de código-fonte (.js, .py, .java(Não consegui testar direito.))
- Gera um arquivo `highlighted.html` com o código destacado em sintaxe
- Inclui um exemplo de função para copiar o código destacado para a área de transferência

## Como usar

1. **Instale as dependências:**

   ```bash
   npm install highlight.js
   ```

2. **Edite o caminho do arquivo de código que deseja destacar:**

   No arquivo `index.js`, altere a variável `filePath` para o caminho do seu arquivo de código.

3. **Execute o script:**

   ```bash
   node index.js
   ```

4. **Abra o arquivo `highlighted.html`** gerado na mesma pasta do arquivo de código original.

## Exemplo de uso

- Um exemplo de código JavaScript (`example.js`) e Python (`example.py`) estão incluídos.
- O HTML gerado inclui um botão para copiar o código destacado para a área de transferência (veja `example.js`).

## Observações

- Apenas arquivos `.js`, `.py` e `.java` são suportados por padrão.
- Para adicionar suporte a outras linguagens, edite o switch-case em `index.js`.

## Estrutura dos arquivos

```
index.js           # Script principal para gerar o HTML destacado
example.js         # Exemplo de código JavaScript
example.py         # Exemplo de código Python
highlighted.html   # Arquivo HTML gerado com o código destacado
```
