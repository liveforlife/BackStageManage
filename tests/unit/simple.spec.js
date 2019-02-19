var assert=require('chai').assert
var sum=require('../../src/components/mocha/add.js')
/*describe("string#split",function(){
    it("should return an array",function(){
        assert(Array.isArray('a,b,c'.split(',')))
    })
    it('should return the same array',function(){
        assert.equal(['a','b','c'].length,'a,b,c'.split(',').length,'arrays have equal length')
        for(var i=0;i<['a','b','c'].length;i++){
            assert.equal(['a','b','c'][i],'a,b,c'.split(',')[i],i+'element is equal')
        }
    })
})*/

var expected,current
before(function(){
    expected=['a','b','c']
})

describe("Sting#split",function(){
    beforeEach(function(){
        current='a,b,c'.split(',')
    })
    it("should return an array",function(){
        assert(Array.isArray(current))
    })
    it("should return the same array",function(){
        assert.equal(expected.length,current.length,'arrays have equal length')
        for(var i=0;i<expected.length;i++){
            assert.equal(expected[i],current[i],i+'element is equal')
        }
    })
})

describe("text#add.js",()=>{
    describe("#sum",()=>{
        it("sum()#0",()=>{
            assert.strictEqual(sum(),0)
        })
        it("sum(1)#1",()=>{
            assert.strictEqual(sum(1),1)
        })
        it("sum(1,2)#3",()=>{
            assert.strictEqual(sum(1,2),3)
        })
        it("sum(1,2,3)#6",()=>{
            assert.strictEqual(sum(1,2,3),6)
        })
    })
})





