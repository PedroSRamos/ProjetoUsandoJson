const express = require('express')
const service = require('./src/app')
const app = express()

const router = express.Router()
router.get('/', (req, res) => {
  res.send('rodando!!!')
})

router.get('/customers/:cpf/dependents', service.getCustomersAllDependents)
router.delete('/customers/:cpf', service.deleteCustomers)
router.get('/customers/:cpf', service.getCustomersById)
router.put('/customers/:cpf', service.updateCustomers)
router.get('/customers', service.getAllCustomers)
router.post('/customers', service.newCustomers)

app.use('/', router)

const port = process.env.PORT || 8087

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})