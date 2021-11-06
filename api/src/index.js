const express = require('express')
const app = express()

const fs = require('fs')

const config = require('config')
const port = config.get('port')

const { printSchema } = require('graphql')
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

try {
  fs.writeFileSync('./src/graphql/schemas/generated_schema.graphql', printSchema(schema))
  console.log('generated schema file')
} catch (err) {
  console.error('Error while generating graphql schema file', err)
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
