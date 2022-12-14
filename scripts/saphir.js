

const saphir = extend(UnitType, "Saphir", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"mindustrinity-t3A_copter-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * -15);
		Draw.rect(
			"mindustrinity-t3A_copter-rotor-outline",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * -15);
	}
    
});

saphir.constructor = () => extend(UnitEntity, {});
Blocks.navalFactory.plans.add(new UnitFactory.UnitPlan(saphir, 60 * 25, ItemStack.with(Items.silicon, 15, Items.sporePod, 15, Items.thorium, 5)));

