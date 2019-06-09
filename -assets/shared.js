/**
 * Run through all test instances and duplicate the
 * tested code into a code block.
 */
(function ( doc, w, undefined ) {
	'use strict';
	var template = doc.createElement('template');
	template.innerHTML = "<div class='test__info__pattern'><details><summary></summary><pre><code></code></pre></details></div>";
	var tests = doc.querySelectorAll('.test');
	var testArea;
	var infoArea;
	var printPattern;
	var patternLabel;
	var resultsLabel;

	var testCase = '.test__case';
	var testInfo = '.test__info'
	var testPattern = '.test__info__pattern'
	var testResults = '.test__info__results';

	for ( var i = 0; i < tests.length; i++ ) {
		testArea = tests[i].querySelector(testCase).innerHTML;
		infoArea = tests[i].querySelector(testInfo);

		infoArea.insertBefore(template.content.cloneNode(true), infoArea.firstChild);

		patternLabel = tests[i].querySelector(testPattern + ' summary');
		patternLabel.textContent = 'Test ' + (i+1) + ' markup';

		printPattern = tests[i].querySelector(testPattern + ' details code');
		printPattern.textContent = testArea.trim();

		var hasResults = tests[i].querySelector(testResults + ' summary');
		if ( hasResults ) {
			resultsLabel = hasResults.textContent;
			hasResults.textContent = 'Test ' + (i+1) + ' ' + resultsLabel;
		}
	}
})(document, window);
