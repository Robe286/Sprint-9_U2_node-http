// Este objeto podría incluir propiedades como title, subtitle y description. Puedes añadir las que quieras y los valores puedes inventártelos.
const urlDescription = 'https://es.wikipedia.org/wiki/The_Matrix'

function information () {
    return {
        Title: 'Matrix',
        Year: '1999',
        Subtitle: 'Ciencia-Ficcion',
        Description: `${urlDescription}`,
        Direction: 'Hermanas Wachouski',
        Budget: 'USD 63.000.000',
        Collection: 'USD 467.841.735',
    }

}

module.exports = information;