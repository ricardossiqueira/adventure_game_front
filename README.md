## Adventure Game - Front-end

Iniciando o servidor (sem Docker):

```bash
npm run dev
# or
yarn dev
```

Iniciando o servidor (com Docker):

```bash
docker build -t adventure-game . && docker run -p 3000:3000 adventure-game:latest
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador para ver a página online.

### Deploy

Você pode acessar essa aplicação online no link [https://adventure-game-front.vercel.app/](https://adventure-game-front.vercel.app/)

### To-do:

- [x] Mock landing page
- [x] Mock página personagens
- [x] Mock página missões
- [x] Mock página de login
- [x] Mock página de criar personagem
- [ ] Implementar login com backend
- [ ] Implementar criação de personagem com backend
- [ ] Implementar personagens com backend
- [ ] Implementar missões com backend
