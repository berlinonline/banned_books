/* --------------------------------------------------------------------
	Title: form
		validate forms before submitting (use form.class.phplib)
	
	Author: Frank Bo?s <info@3960.org>
	
	Company: 3960! <http://www.3960.org/>
	
	Created: 2006-01-06
	
	Updated: 2006-09-12
-------------------------------------------------------------------- */


/*
	Function: formValidate
		Checks if all form-fields are correctly filled out. Parses all inputs in form e using <formInputValidate> and <formCheckboxValidate>

	Parameters: 
		e - (Node) form to check

	Returns: 
		(Bool) If the form is properly filled out.
*/
function formValidate(e, just_report) {
    if (e.preview) {
        alert('Im Vorschaumodus können keine Formulare abgesendet werden!!');
        return false;
    }
	var success = true;
	for (var i=0; i<e.elements.length; i++) {
		if (e.elements[i].nodeName == 'INPUT' || e.elements[i].nodeName == 'SELECT' || e.elements[i].nodeName == 'TEXTAREA') {
			success = ((e.elements[i].type != 'radio' && e.elements[i].type != 'checkbox') 
				? formInputValidate(e.elements[i]) 
				: formCheckboxValidate(e.elements[i])) 
			&& success;
		}
	}
	if (!success && !just_report) {
		window.scrollTo(0,0);
		alert('Das Formular kann noch nicht abgeschickt werden. Bitte korrigieren Sie die hervorgehobenen Felder.');
	}
	return success;
}

function formValidateNode(e, just_report)
{
    var success = true;
    var tagnames = new Array('input','select','textarea');
    for (var j=0; j<tagnames.length; j++) 
    {
        var elements = e.getElementsByTagName(tagnames[j]);
        if(elements.length > 0)
        {
            for (var i=0; i<elements.length; i++) {
                success = ((elements[i].type != 'radio' && elements[i].type != 'checkbox') 
                    ? formInputValidate(elements[i]) 
                    : formCheckboxValidate(elements[i])) 
                && success;
            }
        }
    }
    if (!success && !just_report) 
    {
        window.scrollTo(0,0);
        alert('Bitte korrigieren Sie die hervorgehobenen Felder.');
    }
    return success;
}
/*
	Function: formValidateImperia
		Like <formValidate>, but for Imperia-CMS to prevent submitting

	Parameters: 
		e - (Node) form to check

	Returns: 
		(Mixed) "STOP" : true
*/
function formValidateImperia(e) {
    if(document.forms.imperia.__imperia.value=='save'){
        if(!formValidate(e,true))
            return (confirm('Bitte korrigieren Sie noch die hervorgehobenen Felder.')) ? 'STOP' : true;
    }
    return true;
}

/*
	Function: formInputValidate
		Checks if a input / select with class="required" or a reggexp in accept-attribute is properly filled out

	Parameters: 
		e - (Node) input to check

	Returns: 
		(Bool) If the element is properly filles out.
*/
function formInputValidate(e) {
	if (e.className && e.className.indexOf('error') != -1) {
		formRemoveError(e);
	}
	if(e.getAttribute('accept') && e.value && e.type != 'file') {
		if (!RegExp('^(?:'+e.getAttribute('accept')+')$').test(e.value)) return formAddError(e,'Der Inhalt von diesem Feld entspricht nicht dem erlaubten Inhalt');
	}		
	else if (e.className && e.className.indexOf('required') != -1 && (!e.value || e.value == "" || /^--.*--$/.test(e.value))) {
		return formAddError(e,'Dieses Feld darf nicht leer sein.');
	}
	return true;
}

/*
	Function: formCheckboxValidate
		Checks if a checkbox with class="required" is filled out

	Parameters: 
		e - (Node) input to check

	Returns: 
		(Bool) If the element is properly filles out.
*/
function formCheckboxValidate(e) {
	var name = e.name.replace(/\[\]/,'');
	if (/_0$/.test(e.id) && document.getElementById(name) && document.getElementById(name).className && document.getElementById(name).className.indexOf('required') != -1) {
		if (document.getElementById(name).className.indexOf('error') != -1) {
			formRemoveError(document.getElementById(name));
		}
		var i=0;
		var id = e.id;
		while (document.getElementById(id = id.replace(/_[0-9]+$/,'_'+i))) {
			if (document.getElementById(id).checked) return true;
			i++;
		}
		return formAddError(document.getElementById(name),'Bitte suchen Sie eine Option aus.');
	}
	return true;
}

/*
	Function: formAddError
		Adds class="error" and error-warning to input

	Parameters: 
		e - (Node) input
		msg - (String) Message to display

	Returns: 
		(Bool) False
*/
function formAddError(e,msg) {
	addClassName(e,'error');
	if (e.title || msg) {
		var small = document.createElement('small');
		small.innerHTML = (e.title) ? e.title : msg;
		small.className = 'form_msg';
		if (e.nextSibling)
			e.parentNode.insertBefore(small, e.nextSibling);
		else 
			e.parentNode.appendChild(small);
	}
	return false;
}

/*
	Function: formRemoveError
		Remove class="error" and error-warning from input

	Parameters: 
		e - (Node) input
*/
function formRemoveError(e) {
	removeClassName(e,'error');
	if(e.nextSibling.nodeName == 'SMALL')
		e.parentNode.removeChild(e.nextSibling);
	else if(e.parentNode.getElementsByTagName('small'))
		e.parentNode.removeChild(e.parentNode.getElementsByTagName('small')[0]);

}

/*
  Function: formHighlight
    Put "checked"-class on <span>s aorund checkboxes. Use onmousedown="formHighlight(event);" on parent element
  
  Parameters:
    event - Event
*/
function formHighlight (event) {
  var e = (window.event) ? window.event.srcElement : event.originalTarget;
  if (e.tagName == 'INPUT') e = e.parentNode;
  if (e.tagName == 'LABEL' && e.firstChild.checked != 1) {
    addClassName(e, 'checked');
  }
  else if (e.tagName == 'LABEL' && e.firstChild.checked == 1) {
    removeClassName(e, 'checked');
  }
}

/*
  Function: formTextareaExtend
    Extends textareas according to length of value
  
  Parameters:
    e - (Node) textarea
    maxRows, minRows - (Int) Max / Min extension of textarea
*/
function formTextareaExtend(e,maxRows,minRows) {
	var no = e.value.split("\n");
	var newRows = 0;
	for (var i=0; i < no.length; ++i) {
		newRows = newRows + Math.floor(no[i].length/e.cols) +1;
	}
	e.rows = Math.min(maxRows,Math.max(minRows,newRows +1));
  console.log(e.rows,maxRows, minRows, newRows);
}

// Function: addCladdName
// Add classname cl to el, if not already present
function addClassName (el, cl) {
	if (el && el.className.indexOf(cl) == -1) return (el.className = (el.className)
		? el.className+' '+cl
		: cl
	);
}

// Function: removeClassName
// Remove classname cl from el, if present
function removeClassName (el, cl) {
	if (el) return (el.className = el.className.replace(new RegExp("\s?"+cl+"\\b"), ''));
}
