/**
 * Run through all test instances and duplicate the
 * tested code into a code block.
 */
(function ( doc, w, undefined ) {
	'use strict';
	var tests = doc.querySelectorAll('.test');
	var el;
	var resultArea;

	var testCase = '.test__case button';
	var testResults = '.test__info__results__aom';

	for ( var i = 0; i < tests.length; i++ ) {
		el = tests[i].querySelector(testCase);
		resultArea = tests[i].querySelector(testResults);
		var elID = el.id;

		var name;
		var desc;

		if ( el.ariaLabelledBy ) {
			name = doc.getElementById(el.ariaLabelledBy).innerText
		}
		else if ( el.ariaLabel ) {
			name = el.ariaLabel
		}
		else if ( el.parentNode.tagName === 'LABEL' ) {
			// if had additional label via for, append
			name = el.parentNode.textContent;
		}
		else if ( elID ) {
			name = document.querySelector('label[for="'+elID+'"]').innerText
		}
		else {
			name = el.innerText
		}

		if ( el.ariaDescribedBy ) {
			desc = doc.getElementById(el.ariaDescribedBy).innerText
		}
		else if ( el.title ) {
			desc = el.title
		}
		else if ( el.tagName === 'BUTTON' && el.value ) {
			desc = el.value
		}

		var label;
		resultArea.innerHTML = 'element: ' + el.tagName +
		'<br> role: ' + el.role +
		'<br> accName: ' + name +
		'<br> accDesc: ' + desc;
	}
})(document, window);
