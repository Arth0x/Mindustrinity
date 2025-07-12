const t02_viper = extend(UnitType, "t02-viper", {
    // Ajoute ici les propriétés (health, speed, etc.) si besoin
});

t02_viper.constructor = () => extend(UnitEntity, {});

Events.on(ClientLoadEvent, e => {
    const from = Vars.content.getByName(ContentType.unit, "mindustrinity-t01-orvet");
    const to = Vars.content.getByName(ContentType.unit, "mindustrinity-t02-viper");

    if (from && to) {
        // Ajout correct : UnitType -> UnitType (pas tableau)
        Blocks.additiveReconstructor.upgrades.put(from, to);
    } else {
        print("[Erreur] Unité source ou cible introuvable.");
    }
});