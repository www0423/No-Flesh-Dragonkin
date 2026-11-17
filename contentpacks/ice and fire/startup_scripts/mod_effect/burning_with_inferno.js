// priority: 1000
StartupEvents.registry('mob_effect', event => {
    event.create('burning_with_inferno')
        .beneficial()
        .color(Color.DARK_RED)
})
