const fs=require('mz/fs')

module.exports=async ()=>{
    console.log('read txt')
    var expression=await fs.readFile("./src/components/mocha/data.txt",'utf-8')
    var fn=new Function('return '+expression)
    var r=fn()
    console.log(`Calculate:${expression}=${r}`)
    return r
}