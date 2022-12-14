const saphir = extendContent(UnitType, "saphir", {
});
saphir.constructor = () => extend(UnitWaterMove, {});
saphir.ammoType = AmmoTypes.power;
const diamondItem = Vars.content.getByName(ContentType.item, "mindustrinity-iron");
Blocks.navalFactory.plans.add(new UnitFactory.UnitPlan(saphir, 60 * 25, ItemStack.with(Items.silicon, 15, Items.sporePod, 15, Items.thorium, 5)));