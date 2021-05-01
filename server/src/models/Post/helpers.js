module.exports = {
	latest: function () {
		return this.sort({ createdAt: -1 })
	},
	withUser: function (field) {
		return this.populate('user', field)
	}
}