import tabela from "./tabela.js";
import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req , res) => {
    res.status(200).send(tabela);
});

app.get("/:sigla", (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase();
    const time = tabela.find((infoTime) => infoTime.sigla === siglaInformada);
    if(!time) {
        res.status(404).send("Time não existente!");
        return;
    }
    res.status(200).send(time);
  
});

app.put("/:sigla", (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase();
    const timeSelecionado = tabela.find((t) => t.sigla === siglaInformada);

    res.send(req.body)


});


app.listen(3000, () => console.log("Servidor conctado..."));