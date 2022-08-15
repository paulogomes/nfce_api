const puppeteer = require('puppeteer')

const datePattern = /[0-9]{2}\/[0-9]{2}\/[0-9]{4} [0-9]{2}:[0-9]{2}:[0-9]{2}/

const getData =  async (url) => {
    try {
        console.log(url)
        const itens = []
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 0 }) // waitUntil: 'networkidle0'
        
        let li = await page.$eval('li', elenent => elenent.textContent)
        let dataNota = li.match(datePattern)[0]

        let estabelecimento = await page.$$eval('div.txtTopo', elenents => elenents.map((elenent) => { return elenent.innerText }))
        let total = await page.$$eval('span.txtMax', elenents => elenents.map((elenent) => { return elenent.innerText }))
        console.log(await estabelecimento)
        console.log(await total)

        let nomes = await page.$$eval('span.txtTit2', elenents => elenents.map((elenent) => { return elenent.innerText }))
        let qtds = await page.$$eval('span.Rqtd', elenents => elenents.map((elenent) => { return elenent.innerText }))
        let valor_unitarios = await page.$$eval('span.RvlUnit', elenents => elenents.map((elenent) => { return elenent.innerText }))

        for (let i=0; i<nomes.length; i++) {
            let nome = nomes[i]
            let qtd = parseFloat(qtds[i].replace('Qtde.:', '').replace(',', '.'))
            let valor_unitario = parseFloat(valor_unitarios[i].replace('Vl. Unit.:', '').replace(',', '.'))
            itens.push({ "nome": nome, "quantidade": qtd, "valor_unitario": valor_unitario })
        }

        result = { "Estabelecimento": estabelecimento[0], "Data": dataNota, "Total": total[0], "Itens": itens}

        await browser.close()
        return await result
    } catch (error) {
        return error
    }
    
}

module.exports.getData = getData