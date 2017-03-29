var
function pageIndicator() {
	ticktack.pageData.pageIndicator = {
		firstPaint: getFirstPaint(),
		aboveTheFold : getAboveTheFold(),
		scrollable: getScrollable(),
		able:getAble(),
		finishLoad:getFinishLoad()
	}
}

function getFirstPaint(){
	let headLoadingtime
	return ticktack.pageData.pageDetail + headLoadingtime
}
function getAboveTheFold(){
function getOffsetTop(ele) {
    var offsetTop = ele.offsetTop;
    if (ele.offsetParent !== null) {
      offsetTop += getOffsetTop(ele.offsetParent);
    }
    return offsetTop;
  }

  var firstScreenHeight = win.screen.height;
  var firstScreenImgs = [];
  var isFindLastImg = false;
  var allImgLoaded = false;
  var t = setInterval(function() {
    var i, img;
    if (isFindLastImg) {
      if (firstScreenImgs.length) {
        for (i = 0; i < firstScreenImgs.length; i++) {
          img = firstScreenImgs[i];
          if (!img.complete) {
            allImgLoaded = false;
            break;
          } else {
            allImgLoaded = true;
          }
        }
      } else {
        allImgLoaded = true;
      }
      if (allImgLoaded) {
        collect.add({
          firstScreenLoaded: startTime - Date.now()
        });
        clearInterval(t);
      }
    } else {
      var imgs = body.querySelector('img');
      for (i = 0; i < imgs.length; i++) {
        img = imgs[i];
        var imgOffsetTop = getOffsetTop(img);
        if (imgOffsetTop > firstScreenHeight) {
          isFindLastImg = true;
          break;
        } else if (imgOffsetTop <= firstScreenHeight && !img.hasPushed) {
          img.hasPushed = 1;
          firstScreenImgs.push(img);
        }
      }
    }
  }, 0);



  doc.addEventListener('DOMContentLoaded', function() {
    var imgs = body.querySelector('img');
    if (!imgs.length) {
      isFindLastImg = true;
    }
  });

  win.addEventListener('load', function() {
    allImgLoaded = true;
    isFindLastImg = true;
    if (t) {
      clearInterval(t);
    }
    collect.log(collect.global);
  });
}
function getScrollable() {

}
function getAble() {

}
function getFinishLoad() {

}
