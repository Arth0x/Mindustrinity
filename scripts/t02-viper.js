const t02_viper = extend(UnitType, "t02-viper", {
    // Ajoute ici les propriétés (health, speed, etc.) si besoin
});

t02_viper.constructor = () => extend(UnitEntity, {});

Events.on(ClientLoadEvent, e => {
    const from = Vars.content.getByName(ContentType.unit, "mindustrinity-t01-orvet");
    const to = Vars.content.getByName(ContentType.unit, "mindustrinity-t02-viper");

    Blocks.additiveReconstructor.upgrades.add(from, [to]); // 👈 ici, to est mis dans un tableau
});
