const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT||3000
app.use(cors())

app.use(express.static('public'))

const imgUrl='https://kulhavikruno.000webhostapp.com/diois_img/'
const items=[
{name:'iPhone11', description:'descr',price: 4800, category:'mobile', brand:'Apple',
url:imgUrl+'iPhone11.jpg'},
{name:'iPhone11', description:'descr',price: 6200, category:'mobile', brand:'Apple',
url:imgUrl+'iPhone12.jpg'},
{name:'iPhone11', description:'descr',price: 7800, category:'mobile', brand:'Apple',
url:imgUrl+'iPhone13.jpg'},
{name:'A70', description:'descr',price: 400, category:'mobile', brand:'Samsung',
url:imgUrl+'a70.jpg'},
{name:'A71', description:'descr',price: 500, category:'mobile', brand:'Samsung',
url: imgUrl+'a71.jpg'},
{name:'S21', description:'descr',price: 700, category:'mobile', brand:'Samsung',
url:imgUrl+'s21.jpg'}
]
app.get('/', (req, res) => {
//res.send(items.sort((a,b)=>a.price-b.price))
//res.send(items.filter(a=>a.price>500))
//res.send(items.filter(a=>a.brand==='Samsung'))
//res.send(items.filter(a=>a.category!='mobile'))
res.send(items)
})
app.get('/total',(req,res)=>{
const total=items.reduce((acc,value)=>acc+value.price,0)
res.send(total.toString())
})
app.listen(port)