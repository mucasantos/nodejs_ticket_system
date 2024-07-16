# nodejs_ticket_system

1. Instalar as dependências:
    npm i
2. Executar o migrate do Prisma: 
    npx prisma migrate dev
OBS: lembrar de criar o arquivo .env
3. Iniciar o projeto:
    npm run dev
4. Para ver os dados do SQLite:
    npx prisma studio 

Endpoints do sistema
/trips - POST : Cria uma viagem, usando a estrutura:
{
	"destination": "Local",
	"starts_at": "2024-07-17",
	"ends_at": "2024-07-21",
	"owner_name": "Nome",
	"owner_email": "email"
}