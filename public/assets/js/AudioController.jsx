class AudioController {
	constructor(el) {
		this.el = el
	}

	playbackInterval(fn, ms) {
		this.clearPlaybackInterval()
		if (typeof fn == 'function') {
			var ac = this;
			this.periodicTimeout = setInterval(function() {
				if (! ac.el.paused) {
					fn.apply(ac)
				}
			}, ms ? ms : 1000)
		}
	}

	clearPlaybackInterval() {
		clearInterval(this.periodicTimeout)
	}

	play(fn) {
		this.playbackInterval(fn, 1000)
		this.el.play()
	}

	pause() {
		this.el.pause()
	}

	toggle(fn) {
		this.el.paused ? this.play(fn) : this.pause()
	}

	volume() {
		return (arguments.length > 0 ? this.el.volume = arguments[0] : this.el.volume)
	}

	currentTime() {
		return (arguments.length > 0 ? this.el.currentTime = arguments[0] : this.el.currentTime)
	}
	
	duration() {
		return this.el.duration
	}
}

