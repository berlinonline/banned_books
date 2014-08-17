/* --------------------------------------------------------------------
	Title: formextend
		Extends textareas according to content; onkeyup ="textarea_extend(this);" or onfocus  ="textarea_extend(this);". If class="maxchars" is set, a char-counter will be appended
	
	Author: Frank Boës <info@3960.org>
	
	Company: 3960! <http://www.3960.org/>
	
	Created: 2004-09-10
	
	Updated: 2005-02-14
-------------------------------------------------------------------- */

// Function: textarea_init
function textarea_init ($el) {
	// set init values to textarea
	if (!$el.getAttribute('rows')) {
		$el.setAttribute('rows',5);
	}
	if (!$el.getAttribute('cols')) {
		$el.setAttribute('cols',50);
	}
	if (!$el.getAttribute('defaultRows')) {
		$el.setAttribute('defaultRows',$el.rows);
	}
	if (!$el.getAttribute('maxRows')) {
		$el.setAttribute('maxRows',Math.max(Math.floor(((window.innerHeight) ? window.innerHeight : document.body.offsetHeight) / $el.offsetHeight * $el.rows),$el.getAttribute('defaultRows')));
	}
	if ($el.className && $el.className.indexOf('maxchars') != -1) {
		if ($el.getAttribute('maxlength') && !$el.getAttribute('maxChars'))
			$el.setAttribute('maxChars', $el.getAttribute('maxlength'));
		if (!$el.getAttribute('maxChars')) $el.setAttribute('maxChars',$el.getAttribute('cols') * $el.getAttribute('rows'));
		var $a = document.createElement("span");
		$a.className = 'form_msg no_error';
		$el.parentNode.insertBefore($a,$el.nextSibling);
	}
	if ($el.className && $el.className.indexOf('maxlines') != -1) {
		if (!$el.getAttribute('maxLines'))  $el.setAttribute('maxLines',$el.getAttribute('cols'));
		var $a = document.createElement("span");
		$el.parentNode.insertBefore($a,$el.nextSibling);
	}
}

// Function: textarea_counter
function textarea_counter($el) {
	if ($el.getAttribute('maxlength') && $el.getAttribute('maxlength') < $el.value.length) {
		$el.value = $el.value.substring(0, $el.getAttribute('maxlength'));
	}
	$el.nextSibling.innerHTML = 'Zeichen: '+$el.value.length+' von '+$el.getAttribute('maxChars');
	$el.nextSibling.style.color = ($el.value.length > $el.getAttribute('maxChars')) ? 'red' : 'black';
	$el.nextSibling.className = ($el.value.length > $el.getAttribute('maxChars')) ? 'form_msg' : 'form_msg no_error';
}

function textarea_linecounter($el) {
	$el.nextSibling.innerHTML = 'Zeilen: '+$el.rows+' von '+$el.getAttribute('maxLines');
	$el.nextSibling.style.color = ($el.rows > $el.getAttribute('maxLines')) ? 'red' : 'black';
}

// Function: textarea_extend
// count new lines and lines longer than (cols)
function textarea_extend($el) {
	if (!$el.getAttribute('maxRows')) textarea_init($el);
	var $no = $el.value.split("\n");
	var $new_rows = 0;
	for (var $i=0; $i < $no.length; ++$i) {
		$new_rows = $new_rows + Math.floor($no[$i].length/$el.cols) +1;
	}
	$el.rows = Math.min($el.getAttribute('maxRows'),Math.max($el.getAttribute('defaultRows'),$new_rows +1));
	if ($el.getAttribute('maxChars')) {textarea_counter($el);}
	if ($el.getAttribute('maxLines')) {textarea_linecounter($el);}
	return (false);
}

// Function: textarea_extend
// count only new lines
function textarea_extend2($el) {
	if (!$el.getAttribute('maxRows')) textarea_init($el);
	var $no = $el.value.split("\n");
	$el.rows = Math.min($el.getAttribute('maxRows'),Math.max($el.getAttribute('defaultRows'),$no.length+1));
	if ($el.getAttribute('maxChars')) {textarea_counter($el);}
	return (false);
}

// Function: textarea_collapse
function textarea_collapse ($el, $rows) {
	$el.rows = $rows;
}