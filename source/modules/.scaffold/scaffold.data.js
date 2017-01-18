const requireNew = require('require-new'),
	dataHelper = require('../../../helpers/data.js'),
	defaultData = requireNew('../../data/default.data.js');

const data = Object.assign(defaultData, {
	meta: {
		title: '{{originalName}}',
		className: '{{className}}',
		keyName: '{{keyName}}',
		code: dataHelper.getTemplateCode('{{name}}.hbs'),
		documentation: dataHelper.getDocumentation('{{name}}.md')
	}
});

module.exports = data;
