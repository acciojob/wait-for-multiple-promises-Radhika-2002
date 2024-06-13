//your JS code here. If required.
function createPromise(promiseNumber) {
	return new Promise((resolve, reject)=>{
		const time = Math.random() * 2 + 1;
		setTimeout(()=>{
			resolve({promiseNumber, time});
		}, time *1000)
		
	})
}
const p1 = createPromise(1);
const p2 = createPromise(2);
const p3 = createPromise(3);

const startTime = Date.now();
Promise.all([p1, p2, p3].then(results)=>{
	const totalTime = (Date.now()-startTime)/1000;
	const outputElement = document.getElementById("output");
	outputElement.innerHTML= "";
	results.forEach((result)=>{
		const row = document.createElement("tr");
		row.innerHTML = '
			<td>Promise ${result.promiseNumber}</td>
			<td>${result.time.toFixed(3)}</td>
		';
		outputElement.appendChild(row);
	})
	const totalRow = document.createElement("tr");
	totalRow.innerHTML = '
		<td>Total</td>
		<td>${totalTime.toFixed(3)}</td>';
	outputElement.appendChild(totalRow);
})