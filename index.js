const Command = require('command')

module.exports = function Drop(dispatch) {
	const command = Command(dispatch)
	let old=-1,
	amount=0

command.add('money', amt => {
        amount = Number(amt)*10000 + amount
    })
	
dispatch.hook('S_INVEN', event=>{
	if(old===-1)
	{
		old=event.coins.low
	}
	event.coins.low=amount - (old-event.coins.low)
	return true
})
	
}
