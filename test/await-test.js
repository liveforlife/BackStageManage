let assert=require('assert')
const fs=require('mz/fs')
let asyncExpress=require('../src/components/mocha/async-test.js')

describe('async#test',()=>{
    it("test async function",(done)=>{
        (async function(){
            try{
                let r=await asyncExpress()
                assert.strictEqual(r,15)
                done()
            }catch(err){
                done(err)
            }
        })()
    })

    it("test async function",async ()=>{
        var r=await asyncExpress()
        assert.strictEqual(r,15)
    })
    
    it("#sync function",()=>{
        assert(true)
    })
})