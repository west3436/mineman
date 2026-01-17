# Mineman Loot Table Integration

This datapack integrates FTB Quests reward tables into Minecraft's world generation loot tables.

## Structure

The datapack adds FTB Quests loot crates to various chests and mob drops throughout the world:

### Chest Loot Tables

| Location | Loot Crate | Drop Chance | Description |
|----------|------------|-------------|-------------|
| Simple Dungeon | Tier 1: Basic Resources | 35% | Early game materials |
| Abandoned Mineshaft | Tier 1: Power Basics | 40% | Basic power components |
| Desert Pyramid | Tier 2: Steel Age | 50% | Steel and advanced components |
| Jungle Temple | Tier 2: Power Generation | 50% | Power generation items |
| Nether Bridge | Tier 3: Oil Riches | 60% | Plastic and oil products |
| Bastion Treasure | Tier 4: Advanced Alloys | 65% | Advanced alloys and chemicals |
| Stronghold Library | Tier 5: Electronic Components | 70% | Circuits and electronics |
| End City Treasure | Tier 6: Digital Storage | 75% | Endgame tech items |
| Shipwreck Treasure | Explorer's Bounty | 45% | Exploration rewards |
| Buried Treasure | Dungeon Treasures | 50% | Rare dungeon loot |

### Entity Loot Tables

| Mob | Loot Crate | Drop Chance | Description |
|-----|------------|-------------|-------------|
| Zombie | Dungeon Treasures | 5% | Common mob drop |
| Skeleton | Dungeon Treasures | 5% | Common mob drop |
| Wither Skeleton | Tier 5: Advanced Automation | 15% | Rare mob drop with advanced items |

## How It Works

When a chest is generated in the world or a mob is killed by a player, there's a chance it will contain an FTB Quests loot crate. When opened, the crate gives a random reward from the corresponding reward table.

## Reward Tables

All reward tables are defined in `/config/ftbquests/quests/reward_tables.snbt`. Each table contains 11-14 weighted items appropriate to its tier.

## Notes

- Loot crates do NOT replace existing loot - they are added as bonus drops
- Drop chances are balanced to make exploration rewarding without being overpowered
- Higher tier locations have higher drop chances and better rewards
- Mob drops require player kills to prevent automation abuse
