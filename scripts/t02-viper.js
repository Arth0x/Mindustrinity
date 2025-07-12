

const t02_viper = extend(UnitType, "t02-viper", {
});

t02_viper.constructor = () => extend(UnitEntity, {});
Blocks.groundFactory.plans.add(new UnitFactory.UnitPlan(t02_viper, 60 * 25, ItemStack.with(Items.silicon, 15, Items.titanium, 20)));
