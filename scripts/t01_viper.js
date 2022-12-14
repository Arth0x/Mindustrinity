

const t01_viper = extend(UnitType, "Viper", {
});

t01_viper.constructor = () => extend(UnitEntity, {});
Blocks.navalFactory.plans.add(new UnitFactory.UnitPlan(t01_viper, 60 * 25, ItemStack.with(Items.silicon, 15, Items.titanium, 20)));

