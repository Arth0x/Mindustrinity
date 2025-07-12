

const t02_viper = extend(UnitType, "t02-viper", {
    // Ici tu peux ajouter des propriétés comme speed, health, etc.
});

// Définir le constructeur de l'unité
t02_viper.constructor = () => extend(UnitEntity, {});

// Ajouter l'amélioration dans le reconstructeur additif après chargement complet
Events.on(ClientLoadEvent, e => {
    Blocks.additiveReconstructor.upgrades.add([
        Vars.content.getByName(ContentType.unit, "mindustrinity-t01-orvet"),
        Vars.content.getByName(ContentType.unit, "mindustrinity-t02-viper")
    ]);
});