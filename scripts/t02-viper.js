const t02_viper = extend(UnitType, "t02-viper", {
    // Propriétés de l’unité (à compléter)
});

t02_viper.constructor = () => extend(UnitEntity, {});

Events.on(ClientLoadEvent, e => {
    const from = Vars.content.getByName(ContentType.unit, "mindustrinity-t01-orvet");
    const to = Vars.content.getByName(ContentType.unit, "mindustrinity-t02-viper");

    if (from && to) {
        Blocks.additiveReconstructor.upgrades.add([from, to]); // 👈 Ajout correct
    } else {
        print("[Erreur] Unité source ou cible introuvable.");
    }
});
