# Feature: Gerente aprova solicitação
Como um gerente
Eu quero ser capaz de aprovar uma solicitação
Para que eu possa controlar as aprovações de requisições

# Scenario: Gerente aprova solicitação com sucesso
**Dado** que eu tenho uma solicitação pendente</br>
**Quando** eu aprovo a solicitação</br>
**Então** a solicitação deve mudar seu status para aprovado</br>
**E** eu deve receber uma mensagem de sucesso</br>

# Scenario: Gerente tenta aprovar solicitação não encontrada
**Dado** que eu tenho uma solicitação pendente</br>
**Quando** eu tento aprovar uma solicitação que não existe</br>
**Então** eu deve receber uma mensagem de erro indicando que a solicitação não foi encontrada.</br>

# Caso Feliz (Principal):

* O gerente acessa o sistema de aprovação de solicitações.</br>
* O gerente visualiza a lista de solicitações pendentes.</br>
* O gerente seleciona uma solicitação para aprovação.</br>
* O sistema mostra detalhes da solicitação selecionada.</br>
* O gerente confirma a aprovação da solicitação.</br>
* O sistema atualiza o status da solicitação para "aprovada" e exibe uma mensagem de sucesso para o gerente.</br>

# Caso Triste (Alternativo):

* O gerente acessa o sistema de aprovação de solicitações.</br>
* O gerente visualiza a lista de solicitações pendentes.</br>
* O gerente seleciona uma solicitação para aprovação.</br>
* O sistema mostra detalhes da solicitação selecionada.</br>
* O gerente confirma a aprovação da solicitação.</br>
* O sistema exibe uma mensagem de erro informando que a solicitação não pode ser aprovada.</br>