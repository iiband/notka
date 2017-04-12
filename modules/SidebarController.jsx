SidebarController = function(el, timeout) {
	this.el = el
	this.timeout = timeout
	this.timer = undefined

	this.initiateHide = function() {
		var self = this;
		this.timer = setTimeout(function() {
			self.el.sidebar('hide')
			self.timer = undefined
		}, this.timeout)
	}

	this.cancelHideOrShowAgain = function() {
		if (this.timer) {
			clearTimeout(this.timer)
			this.timer = undefined
		} else {
			this.el.sidebar('show')
		}
	}
};
