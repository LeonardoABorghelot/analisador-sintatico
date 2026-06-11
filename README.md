# Analisador Sintático LL(1)

Este é um projeto interativo de um **Analisador Sintático Preditivo LL(1)** desenvolvido em **React** com **TypeScript** e **Vite**. A aplicação permite validar sentenças com base em uma gramática específica, demonstrando de forma visual e passo a passo o comportamento da pilha de parsing, a tabela de análise $M[A, a]$ e os conjuntos *FIRST* e *FOLLOW*.

---

## 🚀 Pré-requisitos (O que instalar)

Antes de iniciar, você precisará ter instalado em sua máquina as seguintes ferramentas:

1. **Git**: Para clonar o repositório e gerenciar versões.
2. **Node.js** (Versão recomendada: LTS de 18.x ou superior): O ecossistema de execução que inclui o **npm** (gerenciador de pacotes), necessários para instalar as dependências e rodar o projeto.

### Como Instalar os Pré-requisitos:
* **Node.js**: Acesse o site oficial [nodejs.org](https://nodejs.org/), faça o download da versão **LTS** e siga as instruções do instalador padrão (avançando com "Next" até concluir).
* **Git**: Acesse [git-scm.com](https://git-scm.com/), baixe a versão para o seu sistema operacional (Windows, macOS ou Linux) e faça a instalação padrão. No Windows, isso incluirá o **Git Bash**.

---

## 📥 Como Clonar o Repositório

### Opção 1: Via Git Bash (Recomendado para Windows)
1. Abra o **Git Bash** em uma pasta de sua preferência no computador (clique com o botão direito na pasta e selecione `Git Bash Here`).
2. Digite ou cole o comando: **git clone https://github.com/LeonardoABorghelot/analisador-sintatico.git**

### Opção 2: Via Terminal da IDE (VS Code, etc.)
1. Abra a sua IDE (por exemplo, Visual Studio Code).
2. Abra uma janela de terminal em branco na IDE (Ctrl + Shift + ' no VS Code ou no menu superior: Terminal -> New Terminal).
3. Execute o comando de clone: **git clone https://github.com/LeonardoABorghelot/analisador-sintatico.git**

---

### 🛠️ Como Executar o Projeto

Com o projeto aberto na sua IDE de preferência, certifique-se de que o terminal está apontando para a pasta raiz do projeto (onde fica o arquivo package.json).

Execute os seguintes passos no terminal da IDE:

1. Instalar as dependências
Este comando baixa todas as bibliotecas necessárias listadas no projeto (incluindo o React e o TypeScript):

**npm install**

2. Iniciar o servidor de desenvolvimento
Este comando compila o código e inicia um servidor local para você testar a aplicação em tempo real:

**npm run dev**

Após rodar o comando, o terminal exibirá um endereço local, geralmente parecido com:

**Local: http://localhost:5173/**

Segure a tecla Ctrl e clique no link ou copie e cole essa URL no seu navegador de internet para visualizar o analisador funcionando.

---

### 📝 Como Utilizar o Analisador 

A interface possui campos intuitivos para o teste de cadeias e compreensão teórica de Compiladores:

1. Gerar Sentença Válida: O botão cria de forma aleatória uma cadeia válida pertencente à linguagem da gramática.
2. Entrada de Sentença: Campo de texto onde você digita a cadeia que deseja validar.
3. Analisar: Executa o algoritmo LL(1), exibindo uma tabela com todo o histórico de transições da pilha (StackVisualizer).
4. Reiniciar: Limpa o histórico atual, mensagens e o campo de texto para um novo teste.

---

### ⚠️ OBSERVAÇÃO IMPORTANTE DE FORMATAÇÃO:
Na hora de escrever ou testar uma sentença manualmente no campo de texto, você deve adicionar uma letra e, logo após ela, um espaço (com exceção do final da palavra). Os tokens são delimitados por espaços para que o analisador consiga interpretá-los corretamente.
**- Formato Correto: a c c f**
**- Formato Errado: accf**

---

### 📐 Gramática Implementada
O analisador foi construído especificamente para validar a seguinte Gramática Livre de Contexto (GLC):

S -> aAC | bB
A -> cA | ε 
B -> dB | eC
C -> f

Onde letras maiúsculas **(S, A, B, C)** representam Não-Terminais e letras minúsculas **(a, b, c, d, e, f)** representam Terminais. O símbolo **ε** representa a cadeia vazia.