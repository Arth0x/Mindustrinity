

const t01-orvet = extend(UnitType, "t01-orvet", {
});

t01-orvet.constructor = () => extend(UnitEntity, {});
Blocks.groundFactory.plans.add(new UnitFactory.UnitPlan(t01-orvet, 60 * 25, ItemStack.with(Items.silicon, 15, Items.titanium, 20)));
