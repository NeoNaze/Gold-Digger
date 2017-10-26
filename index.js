const Command = require('command')

module.exports = function Drop(dispatch) {
    const command = Command(dispatch)
let old=-1,
    amount=0,
	copy

command.add('money', amt => {
        amount = Number(amt)*10000 + amount
    })
	
dispatch.hook('S_INVEN', event=>{
copy = event
console.log(event.coins.low)
	if(old===-1)
	{
		old=copy.coins.low
	}
copy.coins.low=amount - (old-copy.coins.low)
dispatch.toClient('S_INVEN', copy)
return false
})
}