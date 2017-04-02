$(window).on('load', function() {
    
    ReactDOM.render(
        React.createElement(Playlist, {
        }, null),
        document.getElementById('playlist')
    );

    ReactDOM.render(
        React.createElement(PlaylistSearch, {
        }, null),
        document.getElementById('playlistSearch')
    );

    ReactDOM.render(
        React.createElement(Player, {
        }, null),
        document.getElementById('player')
    );

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