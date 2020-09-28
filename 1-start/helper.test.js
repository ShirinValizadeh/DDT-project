const  helper =require('./helper') 


test('should return false because user input is empty', ()=>{
    const result = helper.validator('' , true , true)
    expect(result).toBe(false)
})


test('should return true', ()=>{
    const result = helper.validator('shirin' , false , true)
    expect(result).toBe(true)
})



test('should return false because age input is not a number', ()=>{
    const result = helper.validator('shirin' , true , true)
    expect(result).toBe(false)
})



test('should return [user name is shirin,and age 30]', ()=>{
    const result = helper.joiner('shirin' , '30' )
    expect(result).toBe('user name is shirin,and age 30')
})
