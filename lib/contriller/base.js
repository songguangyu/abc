'use strict';

import path from 'path';
/**
 * base controller class
 * all controllers will inherits this class
 */
export default class extends abc.base {
    display() {

    }

    assign(data) {

		// let template = ejs.compile(this.view(), options);

		// template(data);

		// ejs.render(str, data, options);
	}

    display(template) {
		//this.context.type = 'text/html';
		if(template) {
			this.context.body = this.view(template);
		} else {
			this.context.body = this.view();
		}
	}
}