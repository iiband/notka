
$(window).on('load', function() {

    const SidebarController = function(el, timeout) {
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


    var sidebarController = new SidebarController($('.ui.labeled.icon.sidebar'), 1000);

    $('.sidebar').sidebar({
            dimPage: false,
            closable: false,
            transition: 'overlay',
            exclusive: false,
            context: $('#contentBody')
        })
        .on('mouseover', () => {
            sidebarController.cancelHideOrShowAgain()
        })
        .on('mouseleave', () => {
            sidebarController.initiateHide()
        });

    $('#mainMenu')
        .on('mouseover', () => {
            sidebarController.cancelHideOrShowAgain()
        })
        .on('mouseleave', () => {
            sidebarController.initiateHide()
        });

    $('.player').find('.progress').progress({
        percent: 99
    });

})