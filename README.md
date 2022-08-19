# API para extrair os dados do NFC-e

## O que é?

Uma simples api para obter os dados da NFC-e direto do site da Receita Federal

## Como rodar a aplicação?

```sh
npm install
npm start
```

## Como usar?

```http
http://[host]:[port]/consultaNFCe?url=[url]
```

A url é obtida lendo o QR-Code da NFC-e.
exemplo de url:

```http
    http://www.fazenda.AA.gov.br/nfce/qrcode?p=99999999999999999999999999999999999999999999|9|9|9|9D9EE9999D9C99E999DBC9999D99BE99DD9E9EB9
```

## Como foi desenvolvida?

Foi utilizado o [Express.js](https://expressjs.com/) para fazer o web framework
e o [Puppeteer](https://github.com/puppeteer/puppeteer) para acessar o site da fazenda