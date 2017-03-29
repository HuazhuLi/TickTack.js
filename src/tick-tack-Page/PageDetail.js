function pageDetail () {
	ticktack.pageData.pageDetail = shootNT2() || shootNT() || byMyself()
}

function shootNT() {
	let data = window.performance.timing;

	if (data.loadEventEnd - data.navigationStart < 0) {}
		console.log("Page is still loading");

	let index = {
		url:window.location.href,
		startMoment:data,navigationStart,
	    dnsDuration: data.domainLookupEnd - data.domainLookupStart,
	    tcpDuration: data.connectEnd - data.connectStart,
	    total: data.loadEventEnd - data.navigationStart,
	    timeToFirstByte: data.responseStart - data.navigationStart,
	    domContentLoading: data.domContentLoadedEventStart - data.domLoading,
	    domProcessing: data.domComplete - data.domLoading
	}

	return index;
}

function shootNT2() {

}

function byMyself() {
	
}
