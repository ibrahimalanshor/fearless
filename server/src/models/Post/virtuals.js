const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')

module.exports = {
	date: function () {
		dayjs.extend(relativeTime)

		return dayjs(this.createdAt).fromNow()
	}
}