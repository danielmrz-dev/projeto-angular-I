 # Sistema de Salão de Beleza

<h3 align="center"> Projeto Angular I - Santander Corders 2024</h3>
 <p align="center"> <a href="#-sobre-o-projeto">Sobre o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#-como-executar-o-projeto">Como Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#-estrutura-do-projeto">Estrutura</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#-equipe">Equipe</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
 <a href="#-licença">Licença</a> </p> <p align="center"> <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/danielmrz-dev/projeto-angular-I?color=%2304D361"> <img alt="Repository size" src="https://img.shields.io/github/repo-size/danielmrz-dev/projeto-angular-I"> <a href="https://github.com/danielmrz-dev/projeto-angular-I/commits/main"> <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/danielmrz-dev/projeto-angular-I"> </a> <a href="https://github.com/danielmrz-dev/projeto-angular-I/stargazers"> <img alt="Stargazers" src="https://img.shields.io/github/stars/danielmrz-dev/projeto-angular-I?style=social"> </a> </p>

# 💻 Sobre o Projeto

O Sistema de Salão de Beleza foi desenvolvido durante o curso Angular I do Santander Coders 2024, com orientação do professor Michael Douglas Barbosa Araujo. O sistema simula um fluxo de agendamento em um salão de beleza, permitindo ao usuário selecionar serviços, data, horário e profissional em uma interface moderna e interativa.

## Objetivos do Projeto
- **Interface Simulada:** Tela de login, boas-vindas e agendamento.
- **Fluxo Completo de Agendamento:** Seleção de serviço, data, horário e profissional.
- **Confirmação de Pagamento:** Modal de confirmação com feedback visual.
- **Trabalho em Equipe:** Uso de Git e GitHub para versionamento e colaboração.



# ⚙️ Funcionalidades

1. **Tela de Login:** O usuário insere um nome de usuário e senha para acessar o sistema.
2. **Tela de Boas-Vindas:** Após o login, é exibida uma saudação personalizada com o nome do usuário.
3. **Seleção de Serviços e Agendamento:**
- Lista de serviços disponíveis.
- Seleção de data, horário e profissional.
4. **Resumo do Agendamento:** Mostra um resumo com opção de confirmação.
5. **Confirmação de Pagamento:** Ao confirmar, abre-se um modal de feedback indicando que o pagamento foi recebido com sucesso.


# 🎨 Layout
O layout foi desenvolvido com **Angular Material**, utilizando componentes como `mat-select`, `mat-datepicker`, `mat-dialog`, 
 entre outros. Aqui estão algumas das principais telas: entre outros, para manter a consistência visual e a usabilidade da aplicação. Abaixo estão as telas principais:

* 1. Tela de Login
* 2. Tela de Boas-Vindas e Agendamento
* 3. Resumo e Confirmação de Agendamento
* 4. Tabela de Agendamentos com Opção de Confirmação de Pagamento

# 🚀 Como Executar o Projeto

### 💡Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com): Para controle de versão e clonagem do repositório.
- [Node.js + NPM](https://nodejs.org/en/): Node.js é o ambiente de execução para JavaScript no servidor, e o NPM (Node Package Manager) é o gerenciador de pacotes padrão que vem com ele.
- [Angular CLI](https://angular.io/cli): Ferramenta de linha de comando para criar, construir e gerenciar projetos Angular.

Além disso, é recomendado o uso de um editor de código, como [VSCode](https://code.visualstudio.com/).


#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/danielmrz-dev/projeto-angular-I.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd projeto-angular-I

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ ng serve

# A aplicação será aberta na porta:4200 -acesse: http://localhost:4200
```


## 📂 Estrutura do Projeto
```bash
src/
├── app/
│   ├── components/
│   │   ├── btn-confirma-pagamento/
│   │   ├── btn-inputs-form/
│   │   ├── header/
│   │   ├── info-agendamento/
│   │   └── modal-agendamento/
│   ├── pages/
│   │   └── page-agendamento/
│   ├── tela-de-login/
│   ├── interfaces/
│   ├── pipes/
│   ├── scss/
│   └── services/

````
#### Explicação dos Diretórios
- **components:** Contém todos os componentes reutilizáveis que podem ser usados em várias partes do projeto, como botões e cabeçalhos.

- **btn-confirma-pagamento:** Componente para o botão de confirmação de pagamento.
- **btn-inputs-form:** Componente para formulários de entrada.
- **header:** Componente para o cabeçalho da aplicação.
- **info-agendamento:** Componente para exibir informações sobre o agendamento.
- **modal-agendamento:** Componente modal para agendamentos.
- **pages:**Contém as páginas principais do projeto.
- **page-agendamento:** Página específica para o agendamento.
- **tela-de-login:** Diretório para a tela de login, que pode conter arquivos relacionados ao design e lógica dessa página.
- **interfaces:** Diretório para interfaces TypeScript usadas para definir a estrutura dos dados.

- **pipes:** Contém os pipes personalizados para transformação de dados.

- **scss:** Diretório para os arquivos SCSS globais do projeto, para estilos que não estão em componentes específicos.

- **services:** Serviços que encapsulam a lógica de negócios e comunicação com APIs.


---
## 🛠 Tecnologias
- **Componentes Angular:** Estrutura modular para a interface.
- **Rotas:** Gerenciamento de navegação entre as telas de login, agendamento e pagamento.
- **Angular Material:** Design consistente usando a biblioteca Material para Angular.
- **POO:** Organização do código utilizando princípios de Programação Orientada a Objetos.

## 🔗 Link para o Deploy

O projeto está hospedado no Vercel.
<br>
Acesse aqui: https://projeto-angular-i.vercel.app/

FAL


## 📝 Observações e Melhorias Futuras
- Implementação de autenticação com backend para maior segurança.
Otimização para dispositivos móveis.
Integração com banco de dados para persistência dos agendamentos.

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---
## 👨‍💻 Tech Lead

<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/michaeldouglasbarbosa/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/2530054?v=4"width="100px;" alt=""/><br /><sub><b>Michael Douglas Barbosa Araujo</b></sub></a><br /><a href="https://www.linkedin.com/in/michaeldouglasbarbosa/" title="Linkedin">👨‍🚀</a></td>
</tr>
</table>

## 👨‍💻 Contribuidores -  Dream Team

💜 Um super thanks 👏 para esse time que fez esse projeto :)

<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/cezaniltom-silva/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/91354726?v=4"width="100px;" alt=""/><br /><sub><b>Cezaniltom Silva</b></sub></a><br /><a href="https://www.linkedin.com/in/cezaniltom-silva/" title="Developer">🚀</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/danielmrz-dev/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/137360936?v=4" width="100px;." alt=""/><br /><sub><b>Daniel Mariz</b></sub></a><br /><a href="https://www.linkedin.com/in/danielmrz-dev/" title="Lead Developer ">👨‍🚀🚀</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/f-garrido/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/175916992?v=4" width="100px;" alt=""/><br /><sub><b>Felipe Garrido</b></sub></a><br /><a href="https://www.linkedin.com/in/f-garrido/" title="Developer">🚀</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/marcely-lobato/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/167495680?v=4" width="100px;" alt=""/><br /><sub><b>Marcely Lobato</b></sub></a><br /><a href="https://www.linkedin.com/in/marcely-lobato/" title="Developer">🚀</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/nataliavictorello/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/172425747?v=4" width="100px;" alt=""/><br /><sub><b>Natália Kuester</b></sub></a><br /><a href="https://www.linkedin.com/in/nataliavictorello/" title="Developer">🚀</a></td>
  
</tr>
</table>


Aqui está o README aprimorado e melhor estruturado para o GitHub:

<h1 align="center"> <img alt="Sistema de Salão de Beleza" title="Sistema de Salão de Beleza" src="https://projeto-angular-i.vercel.app/tela.png" width="300px" /> </h1> <h3 align="center">Sistema de Salão de Beleza - Projeto Angular I</h3> <p align="center"> <a href="#-sobre-o-projeto">Sobre o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#-como-executar-o-projeto">Como Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#-estrutura-do-projeto">Estrutura</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#-equipe">Equipe</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#-licença">Licença</a> </p> <p align="center"> <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/danielmrz-dev/projeto-angular-I?color=%2304D361"> <img alt="Repository size" src="https://img.shields.io/github/repo-size/danielmrz-dev/projeto-angular-I"> <a href="https://github.com/danielmrz-dev/projeto-angular-I/commits/main"> <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/danielmrz-dev/projeto-angular-I"> </a> <a href="https://github.com/danielmrz-dev/projeto-angular-I/stargazers"> <img alt="Stargazers" src="https://img.shields.io/github/stars/danielmrz-dev/projeto-angular-I?style=social"> </a> </p>
💻 Sobre o Projeto
O Sistema de Salão de Beleza foi desenvolvido durante o curso Angular I do Santander Coders, com orientação do professor Michael Douglas Barbosa Araujo. O sistema simula um fluxo de agendamento em um salão de beleza, permitindo ao usuário selecionar serviços, data, horário e profissional em uma interface moderna e interativa.

Objetivos do Projeto
Interface Simulada: Tela de login, boas-vindas e agendamento.
Fluxo Completo de Agendamento: Seleção de serviço, data, horário e profissional.
Confirmação de Pagamento: Modal de confirmação com feedback visual.
Trabalho em Equipe: Uso de Git e GitHub para versionamento e colaboração.
⚙️ Funcionalidades
Tela de Login: Entrada com nome de usuário e senha.
Tela de Boas-Vindas: Exibe uma saudação personalizada ao usuário.
Seleção de Serviços e Agendamento:
Lista de serviços disponíveis.
Seleção de data, horário e profissional.
Resumo de Agendamento: Mostra um resumo com opção de confirmação.
Confirmação de Pagamento: Modal de feedback ao confirmar o pagamento.
🎨 Layout
O layout foi desenvolvido com Angular Material, utilizando componentes como mat-select, mat-datepicker, mat-dialog, entre outros. Aqui estão algumas das principais telas:

Tela de Login
Tela de Boas-Vindas e Agendamento
Resumo e Confirmação de Agendamento
Tabela de Agendamentos com Opção de Confirmação de Pagamento
[Insira aqui uma imagem das telas principais do projeto]

🚀 Como Executar o Projeto
💡 Pré-requisitos
Antes de começar, certifique-se de ter instaladas as seguintes ferramentas:

Git
Node.js e NPM
Angular CLI
Além disso, é recomendado o uso do Visual Studio Code.

🧭 Rodando a aplicação
bash
Copiar código
# Clone este repositório
$ git clone https://github.com/danielmrz-dev/projeto-angular-I.git

# Acesse a pasta do projeto no terminal
$ cd projeto-angular-I

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ ng serve

# Acesse a aplicação em http://localhost:4200
📂 Estrutura do Projeto
```bash
src/
├── app/
│   ├── components/
│   │   ├── btn-confirma-pagamento/
│   │   ├── btn-inputs-form/
│   │   ├── header/
│   │   ├── info-agendamento/
│   │   └── modal-agendamento/
│   ├── pages/
│   │   └── page-agendamento/
│   ├── tela-de-login/
│   ├── interfaces/
│   ├── pipes/
│   ├── scss/
│   └── services/
```
Explicação dos Diretórios
components: Componentes reutilizáveis, como botões e cabeçalhos.
btn-confirma-pagamento: Botão de confirmação de pagamento.
btn-inputs-form: Formulários de entrada.
header: Cabeçalho da aplicação.
info-agendamento: Informações sobre agendamento.
modal-agendamento: Modal para confirmar agendamentos.
pages: Contém as páginas principais.
page-agendamento: Página de agendamento.
tela-de-login: Tela de login e autenticação.
interfaces: Interfaces TypeScript para estrutura dos dados.
pipes: Pipes personalizados para transformação de dados.
scss: Estilos globais do projeto.
services: Serviços para lógica de negócios e API.
🛠 Tecnologias
Angular Components: Estrutura modular para a interface.
Routing: Navegação entre telas de login, agendamento e pagamento.
Angular Material: Design e usabilidade consistentes.
POO: Organização com princípios de Programação Orientada a Objetos.
🔗 Link para o Deploy
Acesse o projeto hospedado na Vercel: https://projeto-angular-i.vercel.app/

📝 Observações e Melhorias Futuras
Autenticação: Integração com backend para maior segurança.
Otimização Mobile: Melhor experiência em dispositivos móveis.
Persistência: Integração com banco de dados para armazenar agendamentos.
💪 Como Contribuir
Faça um fork do projeto.
Crie uma nova branch: git checkout -b minha-nova-feature
Commit: git commit -m "feature: Minha nova feature"
Push: git push origin minha-nova-feature
Para mais detalhes, confira o guia de contribuição.

👨‍💻 Tech Lead
<table> <tr> <td align="center"> <a href="https://www.linkedin.com/in/michaeldouglasbarbosa/"> <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/2530054?v=4" width="100px;" alt=""/> <br /> <sub><b>Michael Douglas Barbosa Araujo</b></sub> </a> <br /> <a href="https://www.linkedin.com/in/michaeldouglasbarbosa/" title="LinkedIn">👨‍🚀</a> </td> 
</tr> 
</table>

👨‍💻 Contribuidores - Dream Team
💜 Agradecimentos ao time que desenvolveu este projeto:

<table> <tr> <td align="center"><a href="https://www.linkedin.com/in/cezaniltom-silva/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/91354726?v=4" width="100px;" alt=""/><br /><sub><b>Cezaniltom Silva</b></sub></a><br /><a href="https://www.linkedin.com/in/cezaniltom-silva/" title="Developer">🚀</a></td> <td align="center"><a href="https://www.linkedin.com/in/danielmrz-dev/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/137360936?v=4" width="100px;" alt=""/><br /><sub><b>Daniel Mariz</b></sub></a><br /><a href="https://www.linkedin.com/in/danielmrz-dev/" title="Lead Developer ">👨‍🚀🚀</a></td> <td align="center"><a href="https://www.linkedin.com/in/f-garrido/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/175916992?v=4" width="100px;" alt=""/><br /><sub><b>Felipe Garrido</b></sub></a><br /><a href="https://www.linkedin.com/in/f-garrido/" title="Developer">🚀</a></td> <td align="center"><a href="https://www.linkedin.com/in/marcely-lobato/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/167495680?v=4" width="100px;" alt=""/><br /><sub><b>Marcely Lobato</b></sub></a><br /><a href="https://www.linkedin.com/in/marcely-lobato/" title="Developer">🚀</a></td> <td align="center"><a href="https://www.linkedin.com/in/nataliavictorello/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/172425747?v=4" width="100px;" alt=""/><br /><sub><b>Natália Kuester</b></sub></a><br /><a href="https://www.linkedin.com/in/nataliavictorello/" title="Developer">🚀</a></td>

</tr>
 </table>

## 📝 Licença
Esse projeto está sob a licença MIT.

