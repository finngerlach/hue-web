const express = require('express')
const app = express()

const config = require('config')
const port = config.get('port')

const { graphqlHTTP } = require('express-graphql')
const schema = require('./graphql/schemas')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: {
      headerEditorEnabled: true
    }
  })
)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
