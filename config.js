module.exports = {
    app: {
        px: '+',
        token: 'OTQ0MjU1ODAyMDM2ODcxMTg4.Yg-8vg.naT4LJesiEFyZAwsB4L28N-6YxM',
        playing: 'Probably listening to Gregorian chants rn'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
