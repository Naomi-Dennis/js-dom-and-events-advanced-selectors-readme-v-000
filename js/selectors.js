// it('paragraphSelector() should select all paragraphs', function() {
//     expect(paragraphSelector().length).toBe(1);
//     expect(paragraphSelector()[0].innerHTML).toEqual($('p')[0].innerHTML);
//   });
$(document).ready( 
  init
  )
function init(){
}
function paragraphSelector(){
  return $("p") 
}

// it('lastImageSelector() should return the last image', function() {
//     expect(lastImageSelector().length).toBe(1);
//     expect(lastImageSelector().attr('src')).toEqual("https://s3.amazonaws.com/after-school-assets/confused.gif");
//   });

function lastImageSelector(){
  return $("img:last")
}

// it('firstListItem() should return the first list item in the unordered list', function() {
//     expect(firstListItem().length).toBe(1);
//     expect(firstListItem()[0].children[0].src).toEqual('https://s3.amazonaws.com/after-school-assets/awesome.jpg');
//   });
function firstListItem(){
  return $("ul li:first") 
}