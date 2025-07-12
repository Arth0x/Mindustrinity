const t02_viper = extend(UnitType, "t02-viper", {
    // Ajoute ici les propriétés (health, speed, etc.) si besoin
});

t02_viper.constructor = () => extend(UnitEntity, {});

Events.on(ClientLoadEvent, e => {
    Blocks.additiveReconstructor.upgrades.add(
        Vars.content.getByName(ContentType.unit, "mindustrinity-t01-orvet"),
        Vars.content.getByName(ContentType.unit, "mindustrinity-t02-viper")
    );
});
