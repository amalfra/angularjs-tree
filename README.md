Angular tree
====

A simple directive for creating tree lists with angularjs

Requirements
--
* Angularjs

Usage
==


Load script
--
Include the file angular-tree.min.js after angularjs is loaded.
```javascript
<script src="dist/angular-tree.min.js"></script>
```

Code
--
Add the module as dependency to your application module

```javascript
var app = angular.module('AppName', ['angular.tree']);
```

View 
--
```html
<ul data-tree data-tree-callback="blah(event)">
    <li>
    	<a href="#one">
    		Root1
    	</a>
    </li>
    <li>
    	<a href="#two">
    		Root2
    	</a>
    	<ul class="treeview-menu">
    		<li><a href="#two1">A</a></li>
    		<li><a href="#two2">B</a></li>
    		<li><a href="#two3">C</a></li>
    	</ul>
    </li>
    <li>
		<a href="#three">
			Root3
		</a>
		<ul class="treeview-menu">
			<li><a href="#three1">A</a></li>
			<li><a href="#three2">B</a></li>
		</ul>
	</li>
</ul>
```


UNDER MIT LICENSE
=================

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
