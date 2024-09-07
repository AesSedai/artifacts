export const items = {
    cooked_gudgeon: {
        name: "Cooked Gudgeon",
        code: "cooked_gudgeon",
        level: 1,
        type: "consumable",
        subtype: "food",
        description: "Restores 8HP at the start of the turn if the player has lost more than 50% of his health points.",
        effects: [
            {
                name: "restore",
                value: 8
            }
        ],
        craft: {
            skill: "cooking",
            level: 1,
            items: [
                {
                    code: "gudgeon",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    copper_dagger: {
        name: "Copper Dagger",
        code: "copper_dagger",
        level: 1,
        type: "weapon",
        subtype: "dagger",
        description: "",
        effects: [
            {
                name: "attack_air",
                value: 8
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 1,
            items: [
                {
                    code: "copper",
                    quantity: 6
                }
            ],
            quantity: 1
        }
    },
    copper_ore: {
        name: "Copper Ore",
        code: "copper_ore",
        level: 1,
        type: "resource",
        subtype: "mining",
        description: "",
        effects: [],
        craft: null
    },
    golden_egg: {
        name: "Golden Egg",
        code: "golden_egg",
        level: 1,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    raw_chicken: {
        name: "Raw Chicken",
        code: "raw_chicken",
        level: 1,
        type: "resource",
        subtype: "food",
        description: "",
        effects: [],
        craft: null
    },
    copper_boots: {
        name: "Copper Boots",
        code: "copper_boots",
        level: 1,
        type: "boots",
        subtype: "",
        description: "",
        effects: [
            {
                name: "res_water",
                value: 2
            },
            {
                name: "res_earth",
                value: 2
            },
            {
                name: "res_fire",
                value: 2
            },
            {
                name: "res_air",
                value: 2
            },
            {
                name: "haste",
                value: 2
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 1,
            items: [
                {
                    code: "copper",
                    quantity: 8
                }
            ],
            quantity: 1
        }
    },
    egg: {
        name: "Egg",
        code: "egg",
        level: 1,
        type: "resource",
        subtype: "food",
        description: "",
        effects: [],
        craft: null
    },
    copper_helmet: {
        name: "Copper Helmet",
        code: "copper_helmet",
        level: 1,
        type: "helmet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 20
            },
            {
                name: "dmg_water",
                value: 3
            },
            {
                name: "dmg_earth",
                value: 3
            },
            {
                name: "dmg_fire",
                value: 3
            },
            {
                name: "dmg_air",
                value: 3
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 1,
            items: [
                {
                    code: "copper",
                    quantity: 6
                }
            ],
            quantity: 1
        }
    },
    ash_wood: {
        name: "Ash Wood",
        code: "ash_wood",
        level: 1,
        type: "resource",
        subtype: "woodcutting",
        description: "",
        effects: [],
        craft: null
    },
    cooked_chicken: {
        name: "Cooked Chicken",
        code: "cooked_chicken",
        level: 1,
        type: "consumable",
        subtype: "food",
        description:
            "Restores 10HP at the start of the turn if the player has lost more than 50% of his health points.",
        effects: [
            {
                name: "restore",
                value: 10
            }
        ],
        craft: {
            skill: "cooking",
            level: 1,
            items: [
                {
                    code: "raw_chicken",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    feather: {
        name: "Feather",
        code: "feather",
        level: 1,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    gudgeon: {
        name: "Gudgeon",
        code: "gudgeon",
        level: 1,
        type: "resource",
        subtype: "fishing",
        description: "",
        effects: [],
        craft: null
    },
    tasks_coin: {
        name: "Tasks Coin",
        code: "tasks_coin",
        level: 1,
        type: "currency",
        subtype: "",
        description:
            "You can earn this currency by completing tasks. You can exchange them at any Tasks Master for a reward.",
        effects: [],
        craft: null
    },
    copper: {
        name: "Copper",
        code: "copper",
        level: 1,
        type: "resource",
        subtype: "bar",
        description: "",
        effects: [],
        craft: {
            skill: "mining",
            level: 1,
            items: [
                {
                    code: "copper_ore",
                    quantity: 8
                }
            ],
            quantity: 1
        }
    },
    wooden_shield: {
        name: "Wooden Shield",
        code: "wooden_shield",
        level: 1,
        type: "shield",
        subtype: "",
        description: "",
        effects: [
            {
                name: "res_fire",
                value: 3
            },
            {
                name: "res_earth",
                value: 3
            },
            {
                name: "res_water",
                value: 3
            },
            {
                name: "res_air",
                value: 3
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 1,
            items: [
                {
                    code: "ash_plank",
                    quantity: 6
                }
            ],
            quantity: 1
        }
    },
    wooden_staff: {
        name: "Wooden Staff",
        code: "wooden_staff",
        level: 1,
        type: "weapon",
        subtype: "staff",
        description: "",
        effects: [
            {
                name: "attack_earth",
                value: 8
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 1,
            items: [
                {
                    code: "wooden_stick",
                    quantity: 1
                },
                {
                    code: "ash_wood",
                    quantity: 4
                }
            ],
            quantity: 1
        }
    },
    copper_ring: {
        name: "Copper Ring",
        code: "copper_ring",
        level: 1,
        type: "ring",
        subtype: "",
        description: "",
        effects: [
            {
                name: "dmg_air",
                value: 2
            },
            {
                name: "dmg_earth",
                value: 2
            },
            {
                name: "dmg_water",
                value: 2
            },
            {
                name: "dmg_fire",
                value: 2
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 1,
            items: [
                {
                    code: "copper",
                    quantity: 6
                }
            ],
            quantity: 1
        }
    },
    ash_plank: {
        name: "Ash Plank",
        code: "ash_plank",
        level: 1,
        type: "resource",
        subtype: "plank",
        description: "",
        effects: [],
        craft: {
            skill: "woodcutting",
            level: 1,
            items: [
                {
                    code: "ash_wood",
                    quantity: 8
                }
            ],
            quantity: 1
        }
    },
    wooden_stick: {
        name: "Wooden Stick",
        code: "wooden_stick",
        level: 1,
        type: "weapon",
        subtype: "staff",
        description: "",
        effects: [
            {
                name: "attack_earth",
                value: 4
            }
        ],
        craft: null
    },
    yellow_slimeball: {
        name: "Yellow Slimeball",
        code: "yellow_slimeball",
        level: 2,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    green_slimeball: {
        name: "Green Slimeball",
        code: "green_slimeball",
        level: 4,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    copper_legs_armor: {
        name: "Copper Legs Armor",
        code: "copper_legs_armor",
        level: 5,
        type: "leg_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 25
            },
            {
                name: "haste",
                value: 1
            },
            {
                name: "dmg_water",
                value: 2
            },
            {
                name: "dmg_earth",
                value: 2
            },
            {
                name: "dmg_fire",
                value: 2
            },
            {
                name: "dmg_air",
                value: 2
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 5,
            items: [
                {
                    code: "copper",
                    quantity: 6
                }
            ],
            quantity: 1
        }
    },
    feather_coat: {
        name: "Feather Coat",
        code: "feather_coat",
        level: 5,
        type: "body_armor",
        subtype: "coat",
        description: "",
        effects: [
            {
                name: "hp",
                value: 25
            },
            {
                name: "dmg_air",
                value: 5
            },
            {
                name: "dmg_water",
                value: 5
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 5,
            items: [
                {
                    code: "feather",
                    quantity: 6
                }
            ],
            quantity: 1
        }
    },
    fire_staff: {
        name: "Fire Staff",
        code: "fire_staff",
        level: 5,
        type: "weapon",
        subtype: "staff",
        description: "",
        effects: [
            {
                name: "attack_fire",
                value: 16
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 5,
            items: [
                {
                    code: "red_slimeball",
                    quantity: 2
                },
                {
                    code: "ash_plank",
                    quantity: 5
                }
            ],
            quantity: 1
        }
    },
    raw_beef: {
        name: "Raw beef",
        code: "raw_beef",
        level: 5,
        type: "resource",
        subtype: "food",
        description: "",
        effects: [],
        craft: null
    },
    cooked_beef: {
        name: "Cooked Beef",
        code: "cooked_beef",
        level: 5,
        type: "consumable",
        subtype: "food",
        description: "Gives 40HP at the start of the fight.",
        effects: [
            {
                name: "boost_hp",
                value: 40
            }
        ],
        craft: {
            skill: "cooking",
            level: 5,
            items: [
                {
                    code: "raw_beef",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    copper_armor: {
        name: "Copper Armor",
        code: "copper_armor",
        level: 5,
        type: "body_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 25
            },
            {
                name: "dmg_earth",
                value: 5
            },
            {
                name: "dmg_fire",
                value: 5
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 5,
            items: [
                {
                    code: "copper",
                    quantity: 5
                },
                {
                    code: "feather",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    milk_bucket: {
        name: "Milk Bucket",
        code: "milk_bucket",
        level: 5,
        type: "resource",
        subtype: "food",
        description: "",
        effects: [],
        craft: null
    },
    sticky_dagger: {
        name: "Sticky Dagger",
        code: "sticky_dagger",
        level: 5,
        type: "weapon",
        subtype: "dagger",
        description: "",
        effects: [
            {
                name: "attack_air",
                value: 16
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 5,
            items: [
                {
                    code: "copper",
                    quantity: 5
                },
                {
                    code: "green_slimeball",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    sticky_sword: {
        name: "Sticky Sword",
        code: "sticky_sword",
        level: 5,
        type: "weapon",
        subtype: "sword",
        description: "",
        effects: [
            {
                name: "attack_earth",
                value: 16
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 5,
            items: [
                {
                    code: "yellow_slimeball",
                    quantity: 2
                },
                {
                    code: "copper",
                    quantity: 5
                }
            ],
            quantity: 1
        }
    },
    life_amulet: {
        name: "Life Amulet",
        code: "life_amulet",
        level: 5,
        type: "amulet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 30
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 5,
            items: [
                {
                    code: "feather",
                    quantity: 4
                },
                {
                    code: "red_slimeball",
                    quantity: 2
                },
                {
                    code: "blue_slimeball",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    water_bow: {
        name: "Water Bow",
        code: "water_bow",
        level: 5,
        type: "weapon",
        subtype: "bow",
        description: "",
        effects: [
            {
                name: "attack_water",
                value: 16
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 5,
            items: [
                {
                    code: "blue_slimeball",
                    quantity: 2
                },
                {
                    code: "ash_plank",
                    quantity: 5
                }
            ],
            quantity: 1
        }
    },
    blue_slimeball: {
        name: "Blue Slimeball",
        code: "blue_slimeball",
        level: 6,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    red_slimeball: {
        name: "Red Slimeball",
        code: "red_slimeball",
        level: 7,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    cowhide: {
        name: "Cowhide",
        code: "cowhide",
        level: 8,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    fire_and_earth_amulet: {
        name: "Fire & Earth Amulet",
        code: "fire_and_earth_amulet",
        level: 10,
        type: "amulet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 20
            },
            {
                name: "dmg_fire",
                value: 5
            },
            {
                name: "dmg_earth",
                value: 5
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 10,
            items: [
                {
                    code: "iron",
                    quantity: 4
                },
                {
                    code: "red_slimeball",
                    quantity: 2
                },
                {
                    code: "yellow_slimeball",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    golden_shrimp: {
        name: "Golden Shrimp",
        code: "golden_shrimp",
        level: 10,
        type: "resource",
        subtype: "fishing",
        description: "",
        effects: [],
        craft: null
    },
    iron_boots: {
        name: "Iron Boots",
        code: "iron_boots",
        level: 10,
        type: "boots",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 40
            },
            {
                name: "res_water",
                value: 5
            },
            {
                name: "res_air",
                value: 5
            },
            {
                name: "haste",
                value: 3
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 10,
            items: [
                {
                    code: "iron",
                    quantity: 5
                },
                {
                    code: "feather",
                    quantity: 3
                }
            ],
            quantity: 1
        }
    },
    iron_sword: {
        name: "Iron Sword",
        code: "iron_sword",
        level: 10,
        type: "weapon",
        subtype: "sword",
        description: "",
        effects: [
            {
                name: "attack_earth",
                value: 24
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 10,
            items: [
                {
                    code: "iron",
                    quantity: 6
                },
                {
                    code: "feather",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    leather_boots: {
        name: "Leather Boots",
        code: "leather_boots",
        level: 10,
        type: "boots",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 40
            },
            {
                name: "res_fire",
                value: 5
            },
            {
                name: "res_earth",
                value: 5
            },
            {
                name: "haste",
                value: 3
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 10,
            items: [
                {
                    code: "ash_plank",
                    quantity: 4
                },
                {
                    code: "cowhide",
                    quantity: 4
                }
            ],
            quantity: 1
        }
    },
    mushroom: {
        name: "Mushroom",
        code: "mushroom",
        level: 10,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    cooked_shrimp: {
        name: "Cooked Shrimp",
        code: "cooked_shrimp",
        level: 10,
        type: "consumable",
        subtype: "food",
        description:
            "Restores 20HP at the start of the turn if the player has lost more than 50% of his health points.",
        effects: [
            {
                name: "restore",
                value: 20
            }
        ],
        craft: {
            skill: "cooking",
            level: 10,
            items: [
                {
                    code: "shrimp",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    leather_armor: {
        name: "Leather Armor",
        code: "leather_armor",
        level: 10,
        type: "body_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 50
            },
            {
                name: "dmg_air",
                value: 8
            },
            {
                name: "dmg_water",
                value: 8
            },
            {
                name: "res_fire",
                value: 2
            },
            {
                name: "res_earth",
                value: 2
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 10,
            items: [
                {
                    code: "spruce_plank",
                    quantity: 4
                },
                {
                    code: "cowhide",
                    quantity: 4
                }
            ],
            quantity: 1
        }
    },
    adventurer_pants: {
        name: "Adventurer Pants",
        code: "adventurer_pants",
        level: 10,
        type: "leg_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 50
            },
            {
                name: "dmg_earth",
                value: 5
            },
            {
                name: "dmg_water",
                value: 5
            },
            {
                name: "dmg_air",
                value: 5
            },
            {
                name: "dmg_fire",
                value: 5
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 10,
            items: [
                {
                    code: "iron",
                    quantity: 2
                },
                {
                    code: "cowhide",
                    quantity: 8
                },
                {
                    code: "mushroom",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    adventurer_helmet: {
        name: "Adventurer Helmet",
        code: "adventurer_helmet",
        level: 10,
        type: "helmet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 50
            },
            {
                name: "dmg_earth",
                value: 5
            },
            {
                name: "dmg_water",
                value: 5
            },
            {
                name: "dmg_fire",
                value: 5
            },
            {
                name: "dmg_air",
                value: 5
            },
            {
                name: "res_fire",
                value: 8
            },
            {
                name: "res_air",
                value: 8
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 10,
            items: [
                {
                    code: "feather",
                    quantity: 4
                },
                {
                    code: "cowhide",
                    quantity: 3
                },
                {
                    code: "spruce_plank",
                    quantity: 3
                },
                {
                    code: "mushroom",
                    quantity: 4
                }
            ],
            quantity: 1
        }
    },
    air_and_water_amulet: {
        name: "Air & Water Amulet",
        code: "air_and_water_amulet",
        level: 10,
        type: "amulet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 20
            },
            {
                name: "dmg_water",
                value: 5
            },
            {
                name: "dmg_air",
                value: 5
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 10,
            items: [
                {
                    code: "iron",
                    quantity: 4
                },
                {
                    code: "green_slimeball",
                    quantity: 2
                },
                {
                    code: "blue_slimeball",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    greater_wooden_staff: {
        name: "Greater Wooden Staff",
        code: "greater_wooden_staff",
        level: 10,
        type: "weapon",
        subtype: "staff",
        description: "",
        effects: [
            {
                name: "attack_water",
                value: 24
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 10,
            items: [
                {
                    code: "spruce_plank",
                    quantity: 6
                },
                {
                    code: "blue_slimeball",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    iron_armor: {
        name: "Iron Armor",
        code: "iron_armor",
        level: 10,
        type: "body_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 50
            },
            {
                name: "dmg_earth",
                value: 8
            },
            {
                name: "dmg_fire",
                value: 8
            },
            {
                name: "res_water",
                value: 2
            },
            {
                name: "res_air",
                value: 2
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 10,
            items: [
                {
                    code: "iron",
                    quantity: 5
                },
                {
                    code: "cowhide",
                    quantity: 3
                }
            ],
            quantity: 1
        }
    },
    iron_legs_armor: {
        name: "Iron Legs Armor",
        code: "iron_legs_armor",
        level: 10,
        type: "leg_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 50
            },
            {
                name: "haste",
                value: 1
            },
            {
                name: "res_earth",
                value: 5
            },
            {
                name: "res_water",
                value: 5
            },
            {
                name: "res_air",
                value: 5
            },
            {
                name: "res_fire",
                value: 5
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 10,
            items: [
                {
                    code: "iron",
                    quantity: 5
                },
                {
                    code: "cowhide",
                    quantity: 3
                }
            ],
            quantity: 1
        }
    },
    adventurer_vest: {
        name: "Adventurer Vest",
        code: "adventurer_vest",
        level: 10,
        type: "body_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 70
            },
            {
                name: "dmg_fire",
                value: 9
            },
            {
                name: "dmg_air",
                value: 9
            },
            {
                name: "dmg_water",
                value: 9
            },
            {
                name: "dmg_earth",
                value: 9
            },
            {
                name: "res_fire",
                value: 2
            },
            {
                name: "res_earth",
                value: 2
            },
            {
                name: "res_water",
                value: 2
            },
            {
                name: "res_air",
                value: 2
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 10,
            items: [
                {
                    code: "feather",
                    quantity: 2
                },
                {
                    code: "cowhide",
                    quantity: 6
                },
                {
                    code: "spruce_plank",
                    quantity: 4
                },
                {
                    code: "yellow_slimeball",
                    quantity: 4
                }
            ],
            quantity: 1
        }
    },
    iron_helm: {
        name: "Iron Helm",
        code: "iron_helm",
        level: 10,
        type: "helmet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 40
            },
            {
                name: "dmg_fire",
                value: 5
            },
            {
                name: "dmg_earth",
                value: 5
            },
            {
                name: "res_fire",
                value: 4
            },
            {
                name: "res_earth",
                value: 4
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 10,
            items: [
                {
                    code: "iron",
                    quantity: 5
                },
                {
                    code: "feather",
                    quantity: 3
                }
            ],
            quantity: 1
        }
    },
    iron_ore: {
        name: "Iron Ore",
        code: "iron_ore",
        level: 10,
        type: "resource",
        subtype: "mining",
        description: "",
        effects: [],
        craft: null
    },
    leather_hat: {
        name: "Leather Hat",
        code: "leather_hat",
        level: 10,
        type: "helmet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 40
            },
            {
                name: "dmg_air",
                value: 5
            },
            {
                name: "dmg_water",
                value: 5
            },
            {
                name: "res_water",
                value: 4
            },
            {
                name: "res_air",
                value: 4
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 10,
            items: [
                {
                    code: "cowhide",
                    quantity: 5
                },
                {
                    code: "yellow_slimeball",
                    quantity: 3
                }
            ],
            quantity: 1
        }
    },
    slime_shield: {
        name: "Slime Shield",
        code: "slime_shield",
        level: 10,
        type: "shield",
        subtype: "",
        description: "",
        effects: [
            {
                name: "res_fire",
                value: 6
            },
            {
                name: "res_earth",
                value: 6
            },
            {
                name: "res_water",
                value: 6
            },
            {
                name: "res_air",
                value: 6
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 10,
            items: [
                {
                    code: "spruce_plank",
                    quantity: 6
                },
                {
                    code: "red_slimeball",
                    quantity: 3
                },
                {
                    code: "yellow_slimeball",
                    quantity: 3
                },
                {
                    code: "green_slimeball",
                    quantity: 3
                },
                {
                    code: "blue_slimeball",
                    quantity: 3
                }
            ],
            quantity: 1
        }
    },
    iron: {
        name: "Iron",
        code: "iron",
        level: 10,
        type: "resource",
        subtype: "bar",
        description: "",
        effects: [],
        craft: {
            skill: "mining",
            level: 10,
            items: [
                {
                    code: "iron_ore",
                    quantity: 8
                }
            ],
            quantity: 1
        }
    },
    cheese: {
        name: "Cheese",
        code: "cheese",
        level: 10,
        type: "consumable",
        subtype: "food",
        description: "Gives 12% air damage at the start of fight.",
        effects: [
            {
                name: "boost_dmg_air",
                value: 12
            }
        ],
        craft: {
            skill: "cooking",
            level: 10,
            items: [
                {
                    code: "milk_bucket",
                    quantity: 3
                }
            ],
            quantity: 1
        }
    },
    fried_eggs: {
        name: "Fried Eggs",
        code: "fried_eggs",
        level: 10,
        type: "consumable",
        subtype: "food",
        description: "Gives 12% water damage at the start of fight.",
        effects: [
            {
                name: "boost_dmg_water",
                value: 12
            }
        ],
        craft: {
            skill: "cooking",
            level: 10,
            items: [
                {
                    code: "egg",
                    quantity: 3
                }
            ],
            quantity: 1
        }
    },
    spruce_wood: {
        name: "Spruce wood",
        code: "spruce_wood",
        level: 10,
        type: "resource",
        subtype: "woodcutting",
        description: "",
        effects: [],
        craft: null
    },
    iron_ring: {
        name: "Iron Ring",
        code: "iron_ring",
        level: 10,
        type: "ring",
        subtype: "",
        description: "",
        effects: [
            {
                name: "dmg_air",
                value: 4
            },
            {
                name: "dmg_earth",
                value: 4
            },
            {
                name: "dmg_fire",
                value: 4
            },
            {
                name: "dmg_water",
                value: 4
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 10,
            items: [
                {
                    code: "iron",
                    quantity: 6
                },
                {
                    code: "feather",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    iron_dagger: {
        name: "Iron Dagger",
        code: "iron_dagger",
        level: 10,
        type: "weapon",
        subtype: "dagger",
        description: "",
        effects: [
            {
                name: "attack_air",
                value: 24
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 10,
            items: [
                {
                    code: "iron",
                    quantity: 6
                },
                {
                    code: "feather",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    mushroom_soup: {
        name: "Mushroom Soup",
        code: "mushroom_soup",
        level: 10,
        type: "consumable",
        subtype: "food",
        description: "Gives 12% fire damage at the start of fight.",
        effects: [
            {
                name: "boost_dmg_fire",
                value: 12
            }
        ],
        craft: {
            skill: "cooking",
            level: 10,
            items: [
                {
                    code: "milk_bucket",
                    quantity: 1
                },
                {
                    code: "mushroom",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    spruce_plank: {
        name: "Spruce Plank",
        code: "spruce_plank",
        level: 10,
        type: "resource",
        subtype: "plank",
        description: "",
        effects: [],
        craft: {
            skill: "woodcutting",
            level: 10,
            items: [
                {
                    code: "spruce_wood",
                    quantity: 8
                }
            ],
            quantity: 1
        }
    },
    shrimp: {
        name: "Shrimp",
        code: "shrimp",
        level: 10,
        type: "resource",
        subtype: "fishing",
        description: "",
        effects: [],
        craft: null
    },
    fire_bow: {
        name: "Fire Bow",
        code: "fire_bow",
        level: 10,
        type: "weapon",
        subtype: "bow",
        description: "",
        effects: [
            {
                name: "attack_fire",
                value: 24
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 10,
            items: [
                {
                    code: "spruce_plank",
                    quantity: 6
                },
                {
                    code: "red_slimeball",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    beef_stew: {
        name: "Beef Stew",
        code: "beef_stew",
        level: 10,
        type: "consumable",
        subtype: "food",
        description: "Gives 12% earth damage at the start of fight.",
        effects: [
            {
                name: "boost_dmg_earth",
                value: 12
            }
        ],
        craft: {
            skill: "cooking",
            level: 10,
            items: [
                {
                    code: "raw_beef",
                    quantity: 3
                }
            ],
            quantity: 1
        }
    },
    iron_pickaxe: {
        name: "Iron Pickaxe",
        code: "iron_pickaxe",
        level: 10,
        type: "weapon",
        subtype: "tool",
        description: "Reduces cooldown by 10% when a character mines a resource.",
        effects: [
            {
                name: "attack_earth",
                value: 5
            },
            {
                name: "mining",
                value: -10
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 10,
            items: [
                {
                    code: "spruce_plank",
                    quantity: 2
                },
                {
                    code: "iron",
                    quantity: 8
                },
                {
                    code: "jasper_crystal",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    iron_axe: {
        name: "Iron Axe",
        code: "iron_axe",
        level: 10,
        type: "weapon",
        subtype: "tool",
        description: "Reduces cooldown by 10% when a character logs a tree.",
        effects: [
            {
                name: "attack_earth",
                value: 5
            },
            {
                name: "woodcutting",
                value: -10
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 10,
            items: [
                {
                    code: "spruce_plank",
                    quantity: 2
                },
                {
                    code: "iron",
                    quantity: 8
                },
                {
                    code: "jasper_crystal",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    spruce_fishing_rod: {
        name: "Spruce Fishing Rod",
        code: "spruce_fishing_rod",
        level: 10,
        type: "weapon",
        subtype: "tool",
        description: "Reduces cooldown by 10% when a character is fishing.",
        effects: [
            {
                name: "attack_water",
                value: 5
            },
            {
                name: "fishing",
                value: -10
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 10,
            items: [
                {
                    code: "spruce_plank",
                    quantity: 8
                },
                {
                    code: "iron",
                    quantity: 2
                },
                {
                    code: "jasper_crystal",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    flying_wing: {
        name: "Flying Wing",
        code: "flying_wing",
        level: 12,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    serpent_skin: {
        name: "Serpent Skin",
        code: "serpent_skin",
        level: 12,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    air_ring: {
        name: "Air Ring",
        code: "air_ring",
        level: 15,
        type: "ring",
        subtype: "",
        description: "",
        effects: [
            {
                name: "dmg_air",
                value: 8
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 15,
            items: [
                {
                    code: "iron",
                    quantity: 5
                },
                {
                    code: "green_slimeball",
                    quantity: 4
                },
                {
                    code: "flying_wing",
                    quantity: 3
                }
            ],
            quantity: 1
        }
    },
    multislimes_sword: {
        name: "Multislimes Sword",
        code: "multislimes_sword",
        level: 15,
        type: "weapon",
        subtype: "sword",
        description: "",
        effects: [
            {
                name: "attack_air",
                value: 9
            },
            {
                name: "attack_water",
                value: 9
            },
            {
                name: "attack_fire",
                value: 9
            },
            {
                name: "attack_earth",
                value: 9
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 15,
            items: [
                {
                    code: "iron",
                    quantity: 5
                },
                {
                    code: "red_slimeball",
                    quantity: 2
                },
                {
                    code: "blue_slimeball",
                    quantity: 2
                },
                {
                    code: "yellow_slimeball",
                    quantity: 2
                },
                {
                    code: "green_slimeball",
                    quantity: 2
                },
                {
                    code: "jasper_crystal",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    mushmush_wizard_hat: {
        name: "Mushmush Wizard Hat",
        code: "mushmush_wizard_hat",
        level: 15,
        type: "helmet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "dmg_fire",
                value: 10
            },
            {
                name: "dmg_earth",
                value: 10
            },
            {
                name: "hp",
                value: 60
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 15,
            items: [
                {
                    code: "cowhide",
                    quantity: 3
                },
                {
                    code: "wolf_hair",
                    quantity: 3
                },
                {
                    code: "mushroom",
                    quantity: 5
                },
                {
                    code: "jasper_crystal",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    raw_wolf_meat: {
        name: "Raw Wolf Meat",
        code: "raw_wolf_meat",
        level: 15,
        type: "resource",
        subtype: "food",
        description: "",
        effects: [],
        craft: null
    },
    earth_ring: {
        name: "Earth Ring",
        code: "earth_ring",
        level: 15,
        type: "ring",
        subtype: "",
        description: "",
        effects: [
            {
                name: "dmg_earth",
                value: 8
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 15,
            items: [
                {
                    code: "iron",
                    quantity: 5
                },
                {
                    code: "yellow_slimeball",
                    quantity: 4
                },
                {
                    code: "flying_wing",
                    quantity: 3
                }
            ],
            quantity: 1
        }
    },
    lucky_wizard_hat: {
        name: "Lucky Wizard Hat",
        code: "lucky_wizard_hat",
        level: 15,
        type: "helmet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "dmg_air",
                value: 10
            },
            {
                name: "dmg_water",
                value: 10
            },
            {
                name: "hp",
                value: 60
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 15,
            items: [
                {
                    code: "cowhide",
                    quantity: 5
                },
                {
                    code: "flying_wing",
                    quantity: 4
                },
                {
                    code: "green_slimeball",
                    quantity: 5
                },
                {
                    code: "jasper_crystal",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    mushmush_jacket: {
        name: "Mushmush Jacket",
        code: "mushmush_jacket",
        level: 15,
        type: "body_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 60
            },
            {
                name: "dmg_fire",
                value: 11
            },
            {
                name: "dmg_earth",
                value: 11
            },
            {
                name: "dmg_air",
                value: 11
            },
            {
                name: "dmg_water",
                value: 11
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 15,
            items: [
                {
                    code: "cowhide",
                    quantity: 4
                },
                {
                    code: "flying_wing",
                    quantity: 4
                },
                {
                    code: "mushroom",
                    quantity: 6
                },
                {
                    code: "jasper_crystal",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    adventurer_boots: {
        name: "Adventurer Boots",
        code: "adventurer_boots",
        level: 15,
        type: "boots",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 60
            },
            {
                name: "res_water",
                value: 5
            },
            {
                name: "res_air",
                value: 5
            },
            {
                name: "res_earth",
                value: 5
            },
            {
                name: "res_fire",
                value: 5
            },
            {
                name: "haste",
                value: 4
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 15,
            items: [
                {
                    code: "cowhide",
                    quantity: 6
                },
                {
                    code: "wolf_hair",
                    quantity: 4
                },
                {
                    code: "mushroom",
                    quantity: 3
                },
                {
                    code: "spruce_plank",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    cooked_wolf_meat: {
        name: "Cooked Wolf Meat",
        code: "cooked_wolf_meat",
        level: 15,
        type: "consumable",
        subtype: "food",
        description: "Gives 90HP at the start of the fight.",
        effects: [
            {
                name: "boost_hp",
                value: 90
            }
        ],
        craft: {
            skill: "cooking",
            level: 15,
            items: [
                {
                    code: "raw_wolf_meat",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    mushstaff: {
        name: "Mushstaff",
        code: "mushstaff",
        level: 15,
        type: "weapon",
        subtype: "staff",
        description: "",
        effects: [
            {
                name: "attack_fire",
                value: 16
            },
            {
                name: "attack_earth",
                value: 16
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 15,
            items: [
                {
                    code: "spruce_plank",
                    quantity: 5
                },
                {
                    code: "mushroom",
                    quantity: 4
                },
                {
                    code: "flying_wing",
                    quantity: 2
                },
                {
                    code: "jasper_crystal",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    fire_ring: {
        name: "Fire Ring",
        code: "fire_ring",
        level: 15,
        type: "ring",
        subtype: "",
        description: "",
        effects: [
            {
                name: "dmg_fire",
                value: 8
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 15,
            items: [
                {
                    code: "iron",
                    quantity: 5
                },
                {
                    code: "red_slimeball",
                    quantity: 4
                },
                {
                    code: "flying_wing",
                    quantity: 3
                }
            ],
            quantity: 1
        }
    },
    mushmush_bow: {
        name: "Mushmush Bow",
        code: "mushmush_bow",
        level: 15,
        type: "weapon",
        subtype: "bow",
        description: "",
        effects: [
            {
                name: "attack_air",
                value: 16
            },
            {
                name: "attack_water",
                value: 16
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 15,
            items: [
                {
                    code: "spruce_plank",
                    quantity: 5
                },
                {
                    code: "wolf_hair",
                    quantity: 2
                },
                {
                    code: "mushroom",
                    quantity: 4
                },
                {
                    code: "jasper_crystal",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    wolf_bone: {
        name: "Wolf Bone",
        code: "wolf_bone",
        level: 15,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    jasper_crystal: {
        name: "Jasper Crystal",
        code: "jasper_crystal",
        level: 15,
        type: "resource",
        subtype: "task",
        description: "",
        effects: [],
        craft: null
    },
    life_ring: {
        name: "Life Ring",
        code: "life_ring",
        level: 15,
        type: "ring",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 30
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 15,
            items: [
                {
                    code: "iron",
                    quantity: 5
                },
                {
                    code: "feather",
                    quantity: 3
                },
                {
                    code: "mushroom",
                    quantity: 3
                }
            ],
            quantity: 1
        }
    },
    water_ring: {
        name: "Water Ring",
        code: "water_ring",
        level: 15,
        type: "ring",
        subtype: "",
        description: "",
        effects: [
            {
                name: "dmg_water",
                value: 8
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 15,
            items: [
                {
                    code: "iron",
                    quantity: 5
                },
                {
                    code: "blue_slimeball",
                    quantity: 4
                },
                {
                    code: "flying_wing",
                    quantity: 3
                }
            ],
            quantity: 1
        }
    },
    wolf_hair: {
        name: "Wolf hair",
        code: "wolf_hair",
        level: 15,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    skeleton_bone: {
        name: "Skeleton Bone",
        code: "skeleton_bone",
        level: 18,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    skeleton_skull: {
        name: "Skeleton Skull",
        code: "skeleton_skull",
        level: 18,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    birch_wood: {
        name: "Birch Wood",
        code: "birch_wood",
        level: 20,
        type: "resource",
        subtype: "woodcutting",
        description: "",
        effects: [],
        craft: null
    },
    magic_wizard_hat: {
        name: "Magic Wizard Hat",
        code: "magic_wizard_hat",
        level: 20,
        type: "helmet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 90
            },
            {
                name: "dmg_water",
                value: 20
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 20,
            items: [
                {
                    code: "ogre_skin",
                    quantity: 2
                },
                {
                    code: "wolf_hair",
                    quantity: 4
                },
                {
                    code: "blue_slimeball",
                    quantity: 10
                },
                {
                    code: "hardwood_plank",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    cooked_trout: {
        name: "Cooked Trout",
        code: "cooked_trout",
        level: 20,
        type: "consumable",
        subtype: "food",
        description:
            "Restores 30HP at the start of the turn if the player has lost more than 50% of his health points.",
        effects: [
            {
                name: "restore",
                value: 30
            }
        ],
        craft: {
            skill: "cooking",
            level: 20,
            items: [
                {
                    code: "trout",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    ogre_skin: {
        name: "Ogre Skin",
        code: "ogre_skin",
        level: 20,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    ring_of_chance: {
        name: "Ring of Chance",
        code: "ring_of_chance",
        level: 20,
        type: "ring",
        subtype: "",
        description: "",
        effects: [
            {
                name: "dmg_fire",
                value: 8
            },
            {
                name: "dmg_water",
                value: 8
            },
            {
                name: "dmg_air",
                value: 8
            },
            {
                name: "dmg_earth",
                value: 8
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 20,
            items: [
                {
                    code: "jasper_crystal",
                    quantity: 1
                },
                {
                    code: "steel",
                    quantity: 6
                },
                {
                    code: "red_slimeball",
                    quantity: 2
                },
                {
                    code: "blue_slimeball",
                    quantity: 2
                },
                {
                    code: "pig_skin",
                    quantity: 4
                }
            ],
            quantity: 1
        }
    },
    battlestaff: {
        name: "Battlestaff",
        code: "battlestaff",
        level: 20,
        type: "weapon",
        subtype: "staff",
        description: "",
        effects: [
            {
                name: "attack_water",
                value: 40
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 20,
            items: [
                {
                    code: "hardwood_plank",
                    quantity: 6
                },
                {
                    code: "steel",
                    quantity: 4
                },
                {
                    code: "wolf_bone",
                    quantity: 3
                },
                {
                    code: "blue_slimeball",
                    quantity: 5
                }
            ],
            quantity: 1
        }
    },
    forest_whip: {
        name: "Forest Whip",
        code: "forest_whip",
        level: 20,
        type: "weapon",
        subtype: "whip",
        description: "",
        effects: [
            {
                name: "attack_air",
                value: 40
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 20,
            items: [
                {
                    code: "green_slimeball",
                    quantity: 2
                },
                {
                    code: "wolf_hair",
                    quantity: 5
                },
                {
                    code: "pig_skin",
                    quantity: 4
                },
                {
                    code: "hardwood_plank",
                    quantity: 4
                }
            ],
            quantity: 1
        }
    },
    ogre_eye: {
        name: "Ogre Eye",
        code: "ogre_eye",
        level: 20,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    coal: {
        name: "Coal",
        code: "coal",
        level: 20,
        type: "resource",
        subtype: "mining",
        description: "",
        effects: [],
        craft: null
    },
    steel_helm: {
        name: "Steel Helm",
        code: "steel_helm",
        level: 20,
        type: "helmet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 90
            },
            {
                name: "dmg_fire",
                value: 20
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 20,
            items: [
                {
                    code: "steel",
                    quantity: 8
                },
                {
                    code: "pig_skin",
                    quantity: 3
                },
                {
                    code: "wolf_bone",
                    quantity: 2
                },
                {
                    code: "flying_wing",
                    quantity: 3
                }
            ],
            quantity: 1
        }
    },
    steel_boots: {
        name: "Steel Boots",
        code: "steel_boots",
        level: 20,
        type: "boots",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 80
            },
            {
                name: "res_water",
                value: 8
            },
            {
                name: "res_air",
                value: 8
            },
            {
                name: "res_earth",
                value: 8
            },
            {
                name: "res_fire",
                value: 8
            },
            {
                name: "haste",
                value: 6
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 20,
            items: [
                {
                    code: "hardwood_plank",
                    quantity: 3
                },
                {
                    code: "steel",
                    quantity: 6
                },
                {
                    code: "serpent_skin",
                    quantity: 4
                },
                {
                    code: "ogre_skin",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    hardwood_plank: {
        name: "Hardwood Plank",
        code: "hardwood_plank",
        level: 20,
        type: "resource",
        subtype: "plank",
        description: "",
        effects: [],
        craft: {
            skill: "woodcutting",
            level: 20,
            items: [
                {
                    code: "ash_wood",
                    quantity: 3
                },
                {
                    code: "birch_wood",
                    quantity: 5
                }
            ],
            quantity: 1
        }
    },
    trout: {
        name: "Trout",
        code: "trout",
        level: 20,
        type: "resource",
        subtype: "fishing",
        description: "",
        effects: [],
        craft: null
    },
    steel_armor: {
        name: "Steel Armor",
        code: "steel_armor",
        level: 20,
        type: "body_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 90
            },
            {
                name: "dmg_earth",
                value: 16
            },
            {
                name: "dmg_water",
                value: 16
            },
            {
                name: "res_earth",
                value: 5
            },
            {
                name: "res_water",
                value: 5
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 20,
            items: [
                {
                    code: "steel",
                    quantity: 7
                },
                {
                    code: "wolf_hair",
                    quantity: 2
                },
                {
                    code: "pig_skin",
                    quantity: 4
                },
                {
                    code: "skeleton_skull",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    steel_battleaxe: {
        name: "Steel Battleaxe",
        code: "steel_battleaxe",
        level: 20,
        type: "weapon",
        subtype: "axe",
        description: "",
        effects: [
            {
                name: "attack_earth",
                value: 40
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 20,
            items: [
                {
                    code: "steel",
                    quantity: 4
                },
                {
                    code: "hardwood_plank",
                    quantity: 4
                },
                {
                    code: "skeleton_bone",
                    quantity: 4
                },
                {
                    code: "wolf_hair",
                    quantity: 4
                }
            ],
            quantity: 1
        }
    },
    steel_legs_armor: {
        name: "Steel Legs Armor",
        code: "steel_legs_armor",
        level: 20,
        type: "leg_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 80
            },
            {
                name: "haste",
                value: 2
            },
            {
                name: "dmg_water",
                value: 10
            },
            {
                name: "dmg_earth",
                value: 10
            },
            {
                name: "res_water",
                value: 6
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 20,
            items: [
                {
                    code: "steel",
                    quantity: 7
                },
                {
                    code: "skeleton_skull",
                    quantity: 2
                },
                {
                    code: "feather",
                    quantity: 4
                },
                {
                    code: "pig_skin",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    skeleton_pants: {
        name: "Skeleton Pants",
        code: "skeleton_pants",
        level: 20,
        type: "leg_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 80
            },
            {
                name: "haste",
                value: 2
            },
            {
                name: "dmg_fire",
                value: 10
            },
            {
                name: "dmg_air",
                value: 10
            },
            {
                name: "res_fire",
                value: 6
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 20,
            items: [
                {
                    code: "wolf_bone",
                    quantity: 3
                },
                {
                    code: "skeleton_bone",
                    quantity: 3
                },
                {
                    code: "wolf_hair",
                    quantity: 2
                },
                {
                    code: "hardwood_plank",
                    quantity: 7
                }
            ],
            quantity: 1
        }
    },
    skull_staff: {
        name: "Skull Staff",
        code: "skull_staff",
        level: 20,
        type: "weapon",
        subtype: "staff",
        description: "",
        effects: [
            {
                name: "attack_fire",
                value: 40
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 20,
            items: [
                {
                    code: "skeleton_skull",
                    quantity: 1
                },
                {
                    code: "skeleton_bone",
                    quantity: 4
                },
                {
                    code: "steel",
                    quantity: 5
                },
                {
                    code: "hardwood_plank",
                    quantity: 5
                }
            ],
            quantity: 1
        }
    },
    skeleton_armor: {
        name: "Skeleton Armor",
        code: "skeleton_armor",
        level: 20,
        type: "body_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 90
            },
            {
                name: "dmg_fire",
                value: 16
            },
            {
                name: "dmg_air",
                value: 16
            },
            {
                name: "res_fire",
                value: 5
            },
            {
                name: "res_air",
                value: 5
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 20,
            items: [
                {
                    code: "skeleton_bone",
                    quantity: 6
                },
                {
                    code: "wolf_bone",
                    quantity: 3
                },
                {
                    code: "pig_skin",
                    quantity: 2
                },
                {
                    code: "steel",
                    quantity: 4
                }
            ],
            quantity: 1
        }
    },
    skeleton_helmet: {
        name: "Skeleton Helmet",
        code: "skeleton_helmet",
        level: 20,
        type: "helmet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 90
            },
            {
                name: "dmg_air",
                value: 20
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 20,
            items: [
                {
                    code: "skeleton_skull",
                    quantity: 1
                },
                {
                    code: "skeleton_bone",
                    quantity: 3
                },
                {
                    code: "wolf_bone",
                    quantity: 2
                },
                {
                    code: "iron",
                    quantity: 7
                }
            ],
            quantity: 1
        }
    },
    steel: {
        name: "Steel",
        code: "steel",
        level: 20,
        type: "resource",
        subtype: "alloy",
        description: "",
        effects: [],
        craft: {
            skill: "mining",
            level: 20,
            items: [
                {
                    code: "iron_ore",
                    quantity: 3
                },
                {
                    code: "coal",
                    quantity: 5
                }
            ],
            quantity: 1
        }
    },
    magical_cure: {
        name: "Magical Cure",
        code: "magical_cure",
        level: 20,
        type: "resource",
        subtype: "task",
        description: "",
        effects: [],
        craft: null
    },
    serpent_skin_legs_armor: {
        name: "Serpent Skin Legs Armor",
        code: "serpent_skin_legs_armor",
        level: 20,
        type: "leg_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 90
            },
            {
                name: "haste",
                value: 2
            },
            {
                name: "dmg_air",
                value: 15
            },
            {
                name: "res_air",
                value: 5
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 20,
            items: [
                {
                    code: "serpent_skin",
                    quantity: 5
                },
                {
                    code: "ogre_skin",
                    quantity: 3
                },
                {
                    code: "pig_skin",
                    quantity: 3
                },
                {
                    code: "wolf_bone",
                    quantity: 4
                }
            ],
            quantity: 1
        }
    },
    dreadful_ring: {
        name: "Dreadful Ring",
        code: "dreadful_ring",
        level: 20,
        type: "ring",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 20
            },
            {
                name: "dmg_earth",
                value: 11
            },
            {
                name: "dmg_water",
                value: 11
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 20,
            items: [
                {
                    code: "steel",
                    quantity: 7
                },
                {
                    code: "ogre_eye",
                    quantity: 4
                },
                {
                    code: "ogre_skin",
                    quantity: 3
                },
                {
                    code: "jasper_crystal",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    sapphire: {
        name: "Sapphire",
        code: "sapphire",
        level: 20,
        type: "resource",
        subtype: "mining",
        description: "",
        effects: [],
        craft: null
    },
    emerald: {
        name: "Emerald",
        code: "emerald",
        level: 20,
        type: "resource",
        subtype: "mining",
        description: "",
        effects: [],
        craft: null
    },
    steel_shield: {
        name: "Steel Shield",
        code: "steel_shield",
        level: 20,
        type: "shield",
        subtype: "",
        description: "",
        effects: [
            {
                name: "res_fire",
                value: 9
            },
            {
                name: "res_earth",
                value: 9
            },
            {
                name: "res_water",
                value: 9
            },
            {
                name: "res_air",
                value: 9
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 20,
            items: [
                {
                    code: "steel",
                    quantity: 6
                },
                {
                    code: "serpent_skin",
                    quantity: 4
                },
                {
                    code: "wolf_bone",
                    quantity: 3
                },
                {
                    code: "ogre_eye",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    steel_ring: {
        name: "Steel Ring",
        code: "steel_ring",
        level: 20,
        type: "ring",
        subtype: "",
        description: "",
        effects: [
            {
                name: "dmg_earth",
                value: 5
            },
            {
                name: "dmg_air",
                value: 5
            },
            {
                name: "dmg_water",
                value: 5
            },
            {
                name: "dmg_fire",
                value: 5
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 20,
            items: [
                {
                    code: "steel",
                    quantity: 7
                },
                {
                    code: "skeleton_bone",
                    quantity: 3
                },
                {
                    code: "cowhide",
                    quantity: 2
                },
                {
                    code: "serpent_skin",
                    quantity: 3
                }
            ],
            quantity: 1
        }
    },
    ruby: {
        name: "Ruby",
        code: "ruby",
        level: 20,
        type: "resource",
        subtype: "mining",
        description: "",
        effects: [],
        craft: null
    },
    pig_skin: {
        name: "Pig Skin",
        code: "pig_skin",
        level: 20,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    tromatising_mask: {
        name: "Tromatising Mask",
        code: "tromatising_mask",
        level: 20,
        type: "helmet",
        subtype: "mask",
        description: "",
        effects: [
            {
                name: "hp",
                value: 90
            },
            {
                name: "dmg_earth",
                value: 20
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 20,
            items: [
                {
                    code: "steel",
                    quantity: 7
                },
                {
                    code: "pig_skin",
                    quantity: 3
                },
                {
                    code: "flying_wing",
                    quantity: 2
                },
                {
                    code: "skeleton_bone",
                    quantity: 3
                }
            ],
            quantity: 1
        }
    },
    skull_ring: {
        name: "Skull Ring",
        code: "skull_ring",
        level: 20,
        type: "ring",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 20
            },
            {
                name: "dmg_fire",
                value: 11
            },
            {
                name: "dmg_air",
                value: 11
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 20,
            items: [
                {
                    code: "steel",
                    quantity: 4
                },
                {
                    code: "wolf_bone",
                    quantity: 4
                },
                {
                    code: "skeleton_skull",
                    quantity: 1
                },
                {
                    code: "jasper_crystal",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    topaz: {
        name: "Topaz",
        code: "topaz",
        level: 20,
        type: "resource",
        subtype: "mining",
        description: "",
        effects: [],
        craft: null
    },
    serpent_skin_armor: {
        name: "Serpent Skin Armor",
        code: "serpent_skin_armor",
        level: 20,
        type: "body_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 90
            },
            {
                name: "dmg_air",
                value: 20
            },
            {
                name: "res_air",
                value: 8
            },
            {
                name: "res_earth",
                value: 5
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 20,
            items: [
                {
                    code: "serpent_skin",
                    quantity: 3
                },
                {
                    code: "wolf_hair",
                    quantity: 3
                },
                {
                    code: "skeleton_bone",
                    quantity: 4
                },
                {
                    code: "hardwood_plank",
                    quantity: 5
                }
            ],
            quantity: 1
        }
    },
    dreadful_amulet: {
        name: "Dreadful Amulet",
        code: "dreadful_amulet",
        level: 20,
        type: "amulet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 40
            },
            {
                name: "dmg_water",
                value: 10
            },
            {
                name: "dmg_earth",
                value: 10
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 20,
            items: [
                {
                    code: "hardwood_plank",
                    quantity: 6
                },
                {
                    code: "ogre_eye",
                    quantity: 4
                },
                {
                    code: "pig_skin",
                    quantity: 3
                },
                {
                    code: "flying_wing",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    skull_amulet: {
        name: "Skull Amulet",
        code: "skull_amulet",
        level: 20,
        type: "amulet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 40
            },
            {
                name: "dmg_air",
                value: 10
            },
            {
                name: "dmg_fire",
                value: 10
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 20,
            items: [
                {
                    code: "hardwood_plank",
                    quantity: 7
                },
                {
                    code: "skeleton_skull",
                    quantity: 3
                },
                {
                    code: "wolf_hair",
                    quantity: 3
                },
                {
                    code: "serpent_skin",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    sap: {
        name: "Sap",
        code: "sap",
        level: 20,
        type: "resource",
        subtype: "woodcutting",
        description: "",
        effects: [],
        craft: null
    },
    vampire_blood: {
        name: "Vampire Blood",
        code: "vampire_blood",
        level: 24,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    dreadful_staff: {
        name: "Dreadful Staff",
        code: "dreadful_staff",
        level: 25,
        type: "weapon",
        subtype: "staff",
        description: "",
        effects: [
            {
                name: "attack_water",
                value: 25
            },
            {
                name: "attack_earth",
                value: 25
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 25,
            items: [
                {
                    code: "ogre_eye",
                    quantity: 4
                },
                {
                    code: "vampire_blood",
                    quantity: 5
                },
                {
                    code: "hardwood_plank",
                    quantity: 5
                },
                {
                    code: "sap",
                    quantity: 1
                },
                {
                    code: "jasper_crystal",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    bandit_armor: {
        name: "Bandit Armor",
        code: "bandit_armor",
        level: 25,
        type: "body_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 170
            },
            {
                name: "dmg_fire",
                value: 24
            },
            {
                name: "dmg_earth",
                value: 24
            },
            {
                name: "res_earth",
                value: 7
            },
            {
                name: "res_water",
                value: 7
            }
        ],
        craft: null
    },
    skull_wand: {
        name: "Skull Wand",
        code: "skull_wand",
        level: 25,
        type: "weapon",
        subtype: "wand",
        description: "",
        effects: [
            {
                name: "attack_air",
                value: 25
            },
            {
                name: "attack_fire",
                value: 25
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 25,
            items: [
                {
                    code: "hardwood_plank",
                    quantity: 4
                },
                {
                    code: "skeleton_skull",
                    quantity: 3
                },
                {
                    code: "vampire_blood",
                    quantity: 2
                },
                {
                    code: "ogre_skin",
                    quantity: 3
                },
                {
                    code: "jasper_crystal",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    lizard_skin_armor: {
        name: "Lizard Skin Armor",
        code: "lizard_skin_armor",
        level: 25,
        type: "body_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 150
            },
            {
                name: "dmg_water",
                value: 24
            },
            {
                name: "res_water",
                value: 10
            },
            {
                name: "res_fire",
                value: 5
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 25,
            items: [
                {
                    code: "lizard_skin",
                    quantity: 5
                },
                {
                    code: "dead_wood_plank",
                    quantity: 5
                },
                {
                    code: "ogre_skin",
                    quantity: 4
                },
                {
                    code: "jasper_crystal",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    lizard_skin_legs_armor: {
        name: "Lizard Skin Legs Armor",
        code: "lizard_skin_legs_armor",
        level: 25,
        type: "leg_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 140
            },
            {
                name: "haste",
                value: 3
            },
            {
                name: "dmg_water",
                value: 20
            },
            {
                name: "res_water",
                value: 6
            },
            {
                name: "res_fire",
                value: 3
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 25,
            items: [
                {
                    code: "lizard_skin",
                    quantity: 4
                },
                {
                    code: "flying_wing",
                    quantity: 5
                },
                {
                    code: "sap",
                    quantity: 1
                },
                {
                    code: "ogre_eye",
                    quantity: 4
                },
                {
                    code: "jasper_crystal",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    piggy_pants: {
        name: "Piggy Pants",
        code: "piggy_pants",
        level: 25,
        type: "leg_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 140
            },
            {
                name: "haste",
                value: 3
            },
            {
                name: "dmg_fire",
                value: 20
            },
            {
                name: "res_fire",
                value: 6
            },
            {
                name: "res_water",
                value: 3
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 25,
            items: [
                {
                    code: "pig_skin",
                    quantity: 5
                },
                {
                    code: "hardwood_plank",
                    quantity: 4
                },
                {
                    code: "serpent_skin",
                    quantity: 4
                },
                {
                    code: "jasper_crystal",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    topaz_amulet: {
        name: "Topaz Amulet",
        code: "topaz_amulet",
        level: 25,
        type: "amulet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 70
            },
            {
                name: "dmg_earth",
                value: 18
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 25,
            items: [
                {
                    code: "hardwood_plank",
                    quantity: 8
                },
                {
                    code: "topaz",
                    quantity: 1
                },
                {
                    code: "wolf_hair",
                    quantity: 5
                },
                {
                    code: "jasper_crystal",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    emerald_amulet: {
        name: "Emerald Amulet",
        code: "emerald_amulet",
        level: 25,
        type: "amulet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 70
            },
            {
                name: "dmg_air",
                value: 18
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 25,
            items: [
                {
                    code: "hardwood_plank",
                    quantity: 8
                },
                {
                    code: "emerald",
                    quantity: 1
                },
                {
                    code: "wolf_hair",
                    quantity: 5
                },
                {
                    code: "jasper_crystal",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    lizard_skin: {
        name: "Lizard Skin",
        code: "lizard_skin",
        level: 25,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    sapphire_amulet: {
        name: "Sapphire Amulet",
        code: "sapphire_amulet",
        level: 25,
        type: "amulet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 70
            },
            {
                name: "dmg_water",
                value: 18
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 25,
            items: [
                {
                    code: "hardwood_plank",
                    quantity: 8
                },
                {
                    code: "sapphire",
                    quantity: 1
                },
                {
                    code: "wolf_hair",
                    quantity: 5
                },
                {
                    code: "jasper_crystal",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    ruby_amulet: {
        name: "Ruby Amulet",
        code: "ruby_amulet",
        level: 25,
        type: "amulet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 70
            },
            {
                name: "dmg_fire",
                value: 18
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 25,
            items: [
                {
                    code: "hardwood_plank",
                    quantity: 8
                },
                {
                    code: "ruby",
                    quantity: 1
                },
                {
                    code: "wolf_hair",
                    quantity: 5
                },
                {
                    code: "jasper_crystal",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    red_cloth: {
        name: "Red Cloth",
        code: "red_cloth",
        level: 28,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    demoniac_dust: {
        name: "Demoniac Dust",
        code: "demoniac_dust",
        level: 28,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    greater_dreadful_staff: {
        name: "Greater Dreadful Staff",
        code: "greater_dreadful_staff",
        level: 30,
        type: "weapon",
        subtype: "staff",
        description: "",
        effects: [
            {
                name: "attack_water",
                value: 60
            },
            {
                name: "attack_earth",
                value: 20
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 30,
            items: [
                {
                    code: "ogre_eye",
                    quantity: 4
                },
                {
                    code: "vampire_blood",
                    quantity: 5
                },
                {
                    code: "dead_wood_plank",
                    quantity: 5
                },
                {
                    code: "red_cloth",
                    quantity: 2
                },
                {
                    code: "skeleton_bone",
                    quantity: 4
                }
            ],
            quantity: 1
        }
    },
    owlbear_hair: {
        name: "Owlbear hair",
        code: "owlbear_hair",
        level: 30,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    death_knight_sword: {
        name: "Death Knight Sword",
        code: "death_knight_sword",
        level: 30,
        type: "weapon",
        subtype: "sword",
        description: "",
        effects: [
            {
                name: "attack_fire",
                value: 40
            },
            {
                name: "attack_earth",
                value: 40
            }
        ],
        craft: null
    },
    cooked_bass: {
        name: "Cooked Bass",
        code: "cooked_bass",
        level: 30,
        type: "consumable",
        subtype: "food",
        description:
            "Restores 45HP at the start of the turn if the player has lost more than 50% of his health points.",
        effects: [
            {
                name: "restore",
                value: 45
            }
        ],
        craft: {
            skill: "cooking",
            level: 30,
            items: [
                {
                    code: "bass",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    gold_platebody: {
        name: "Gold Platebody",
        code: "gold_platebody",
        level: 30,
        type: "body_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 150
            },
            {
                name: "dmg_earth",
                value: 20
            },
            {
                name: "dmg_water",
                value: 20
            },
            {
                name: "res_water",
                value: 6
            },
            {
                name: "res_earth",
                value: 6
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 30,
            items: [
                {
                    code: "gold",
                    quantity: 8
                },
                {
                    code: "owlbear_hair",
                    quantity: 3
                },
                {
                    code: "red_cloth",
                    quantity: 3
                },
                {
                    code: "demoniac_dust",
                    quantity: 4
                },
                {
                    code: "demon_horn",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    gold_shield: {
        name: "Gold Shield",
        code: "gold_shield",
        level: 30,
        type: "shield",
        subtype: "",
        description: "",
        effects: [
            {
                name: "res_fire",
                value: 13
            },
            {
                name: "res_earth",
                value: 13
            },
            {
                name: "res_water",
                value: 13
            },
            {
                name: "res_air",
                value: 13
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 30,
            items: [
                {
                    code: "dead_wood_plank",
                    quantity: 6
                },
                {
                    code: "gold",
                    quantity: 7
                },
                {
                    code: "demon_horn",
                    quantity: 4
                },
                {
                    code: "sapphire",
                    quantity: 2
                },
                {
                    code: "magical_cure",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    ruby_ring: {
        name: "Ruby Ring",
        code: "ruby_ring",
        level: 30,
        type: "ring",
        subtype: "",
        description: "",
        effects: [
            {
                name: "dmg_fire",
                value: 17
            },
            {
                name: "dmg_water",
                value: 7
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 30,
            items: [
                {
                    code: "gold",
                    quantity: 8
                },
                {
                    code: "obsidian",
                    quantity: 4
                },
                {
                    code: "ruby",
                    quantity: 1
                },
                {
                    code: "vampire_blood",
                    quantity: 5
                },
                {
                    code: "magical_cure",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    life_crystal: {
        name: "Life Crystal",
        code: "life_crystal",
        level: 30,
        type: "artifact",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 180
            }
        ],
        craft: null
    },
    gold: {
        name: "Gold",
        code: "gold",
        level: 30,
        type: "resource",
        subtype: "bar",
        description: "",
        effects: [],
        craft: {
            skill: "mining",
            level: 30,
            items: [
                {
                    code: "gold_ore",
                    quantity: 8
                }
            ],
            quantity: 1
        }
    },
    bass: {
        name: "Bass",
        code: "bass",
        level: 30,
        type: "resource",
        subtype: "fishing",
        description: "",
        effects: [],
        craft: null
    },
    gold_platelegs: {
        name: "Gold Platelegs",
        code: "gold_platelegs",
        level: 30,
        type: "leg_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 150
            },
            {
                name: "haste",
                value: 5
            },
            {
                name: "dmg_earth",
                value: 17
            },
            {
                name: "dmg_air",
                value: 17
            },
            {
                name: "res_earth",
                value: 7
            },
            {
                name: "res_air",
                value: 7
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 30,
            items: [
                {
                    code: "gold",
                    quantity: 8
                },
                {
                    code: "lizard_skin",
                    quantity: 3
                },
                {
                    code: "red_cloth",
                    quantity: 3
                },
                {
                    code: "vampire_blood",
                    quantity: 4
                },
                {
                    code: "ogre_skin",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    gold_sword: {
        name: "Gold Sword",
        code: "gold_sword",
        level: 30,
        type: "weapon",
        subtype: "sword",
        description: "",
        effects: [
            {
                name: "attack_earth",
                value: 60
            },
            {
                name: "attack_air",
                value: 20
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 30,
            items: [
                {
                    code: "gold",
                    quantity: 8
                },
                {
                    code: "vampire_blood",
                    quantity: 4
                },
                {
                    code: "red_cloth",
                    quantity: 3
                },
                {
                    code: "demon_horn",
                    quantity: 2
                },
                {
                    code: "dead_wood_plank",
                    quantity: 3
                }
            ],
            quantity: 1
        }
    },
    lich_crown: {
        name: "Lich Crown",
        code: "lich_crown",
        level: 30,
        type: "helmet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 280
            },
            {
                name: "dmg_fire",
                value: 30
            },
            {
                name: "dmg_earth",
                value: 30
            }
        ],
        craft: null
    },
    dead_wood: {
        name: "Dead Wood",
        code: "dead_wood",
        level: 30,
        type: "resource",
        subtype: "woodcutting",
        description: "",
        effects: [],
        craft: null
    },
    gold_ore: {
        name: "Gold ore",
        code: "gold_ore",
        level: 30,
        type: "resource",
        subtype: "mining",
        description: "",
        effects: [],
        craft: null
    },
    gold_mask: {
        name: "Gold Mask",
        code: "gold_mask",
        level: 30,
        type: "helmet",
        subtype: "mask",
        description: "",
        effects: [
            {
                name: "hp",
                value: 180
            },
            {
                name: "dmg_earth",
                value: 20
            },
            {
                name: "dmg_air",
                value: 20
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 30,
            items: [
                {
                    code: "gold",
                    quantity: 8
                },
                {
                    code: "red_cloth",
                    quantity: 2
                },
                {
                    code: "owlbear_hair",
                    quantity: 4
                },
                {
                    code: "demon_horn",
                    quantity: 2
                },
                {
                    code: "skeleton_skull",
                    quantity: 4
                }
            ],
            quantity: 1
        }
    },
    dead_wood_plank: {
        name: "Dead Wood Plank",
        code: "dead_wood_plank",
        level: 30,
        type: "resource",
        subtype: "plank",
        description: "",
        effects: [],
        craft: {
            skill: "woodcutting",
            level: 30,
            items: [
                {
                    code: "dead_wood",
                    quantity: 8
                }
            ],
            quantity: 1
        }
    },
    topaz_ring: {
        name: "Topaz Ring",
        code: "topaz_ring",
        level: 30,
        type: "ring",
        subtype: "",
        description: "",
        effects: [
            {
                name: "dmg_earth",
                value: 17
            },
            {
                name: "dmg_air",
                value: 7
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 30,
            items: [
                {
                    code: "gold",
                    quantity: 8
                },
                {
                    code: "obsidian",
                    quantity: 4
                },
                {
                    code: "topaz",
                    quantity: 1
                },
                {
                    code: "vampire_blood",
                    quantity: 5
                },
                {
                    code: "magical_cure",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    gold_ring: {
        name: "Gold Ring",
        code: "gold_ring",
        level: 30,
        type: "ring",
        subtype: "",
        description: "",
        effects: [
            {
                name: "dmg_earth",
                value: 7
            },
            {
                name: "dmg_air",
                value: 7
            },
            {
                name: "dmg_water",
                value: 7
            },
            {
                name: "dmg_fire",
                value: 7
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 30,
            items: [
                {
                    code: "gold",
                    quantity: 8
                },
                {
                    code: "dead_wood_plank",
                    quantity: 3
                },
                {
                    code: "wolf_bone",
                    quantity: 3
                },
                {
                    code: "vampire_blood",
                    quantity: 3
                },
                {
                    code: "skeleton_bone",
                    quantity: 3
                }
            ],
            quantity: 1
        }
    },
    gold_fishing_rod: {
        name: "Gold Fishing Rod",
        code: "gold_fishing_rod",
        level: 30,
        type: "weapon",
        subtype: "tool",
        description: "Reduces cooldown by 20% when a character is fishing.",
        effects: [
            {
                name: "attack_water",
                value: 5
            },
            {
                name: "fishing",
                value: -20
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 30,
            items: [
                {
                    code: "dead_wood_plank",
                    quantity: 2
                },
                {
                    code: "gold",
                    quantity: 7
                },
                {
                    code: "golden_shrimp",
                    quantity: 1
                },
                {
                    code: "magical_cure",
                    quantity: 2
                },
                {
                    code: "owlbear_hair",
                    quantity: 3
                }
            ],
            quantity: 1
        }
    },
    demon_horn: {
        name: "Demon Horn",
        code: "demon_horn",
        level: 30,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    gold_axe: {
        name: "Gold Axe",
        code: "gold_axe",
        level: 30,
        type: "weapon",
        subtype: "tool",
        description: "Reduces cooldown by 20% when a character logs a tree.",
        effects: [
            {
                name: "attack_earth",
                value: 5
            },
            {
                name: "woodcutting",
                value: -20
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 30,
            items: [
                {
                    code: "dead_wood_plank",
                    quantity: 2
                },
                {
                    code: "gold",
                    quantity: 7
                },
                {
                    code: "sap",
                    quantity: 1
                },
                {
                    code: "magical_cure",
                    quantity: 2
                },
                {
                    code: "red_cloth",
                    quantity: 3
                }
            ],
            quantity: 1
        }
    },
    gold_helm: {
        name: "Gold Helm",
        code: "gold_helm",
        level: 30,
        type: "helmet",
        subtype: "helm",
        description: "",
        effects: [
            {
                name: "hp",
                value: 180
            },
            {
                name: "dmg_water",
                value: 30
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 30,
            items: [
                {
                    code: "gold",
                    quantity: 8
                },
                {
                    code: "demon_horn",
                    quantity: 2
                },
                {
                    code: "demoniac_dust",
                    quantity: 3
                },
                {
                    code: "vampire_blood",
                    quantity: 3
                },
                {
                    code: "owlbear_hair",
                    quantity: 4
                }
            ],
            quantity: 1
        }
    },
    sapphire_ring: {
        name: "Sapphire Ring",
        code: "sapphire_ring",
        level: 30,
        type: "ring",
        subtype: "",
        description: "",
        effects: [
            {
                name: "dmg_water",
                value: 17
            },
            {
                name: "dmg_fire",
                value: 7
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 30,
            items: [
                {
                    code: "gold",
                    quantity: 8
                },
                {
                    code: "obsidian",
                    quantity: 4
                },
                {
                    code: "sapphire",
                    quantity: 1
                },
                {
                    code: "vampire_blood",
                    quantity: 5
                },
                {
                    code: "magical_cure",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    emerald_ring: {
        name: "Emerald Ring",
        code: "emerald_ring",
        level: 30,
        type: "ring",
        subtype: "",
        description: "",
        effects: [
            {
                name: "dmg_air",
                value: 17
            },
            {
                name: "dmg_earth",
                value: 7
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 30,
            items: [
                {
                    code: "gold",
                    quantity: 8
                },
                {
                    code: "obsidian",
                    quantity: 4
                },
                {
                    code: "emerald",
                    quantity: 1
                },
                {
                    code: "vampire_blood",
                    quantity: 5
                },
                {
                    code: "magical_cure",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    gold_pickaxe: {
        name: "Gold Pickaxe",
        code: "gold_pickaxe",
        level: 30,
        type: "weapon",
        subtype: "tool",
        description: "Reduces cooldown by 20% when a character mines a resource.",
        effects: [
            {
                name: "attack_earth",
                value: 5
            },
            {
                name: "mining",
                value: -20
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 30,
            items: [
                {
                    code: "dead_wood_plank",
                    quantity: 2
                },
                {
                    code: "gold",
                    quantity: 7
                },
                {
                    code: "topaz",
                    quantity: 1
                },
                {
                    code: "magical_cure",
                    quantity: 2
                },
                {
                    code: "demon_horn",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    lizard_boots: {
        name: "Lizard Boots",
        code: "lizard_boots",
        level: 30,
        type: "boots",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 110
            },
            {
                name: "dmg_water",
                value: 5
            },
            {
                name: "dmg_earth",
                value: 5
            },
            {
                name: "res_air",
                value: 8
            },
            {
                name: "res_fire",
                value: 8
            },
            {
                name: "haste",
                value: 7
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 30,
            items: [
                {
                    code: "dead_wood_plank",
                    quantity: 8
                },
                {
                    code: "lizard_skin",
                    quantity: 4
                },
                {
                    code: "demoniac_dust",
                    quantity: 4
                },
                {
                    code: "owlbear_hair",
                    quantity: 3
                },
                {
                    code: "magical_cure",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    gold_boots: {
        name: "Gold Boots",
        code: "gold_boots",
        level: 30,
        type: "boots",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 110
            },
            {
                name: "dmg_fire",
                value: 5
            },
            {
                name: "dmg_air",
                value: 5
            },
            {
                name: "res_earth",
                value: 8
            },
            {
                name: "res_air",
                value: 8
            },
            {
                name: "haste",
                value: 7
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 30,
            items: [
                {
                    code: "gold",
                    quantity: 8
                },
                {
                    code: "vampire_blood",
                    quantity: 4
                },
                {
                    code: "demon_horn",
                    quantity: 3
                },
                {
                    code: "owlbear_hair",
                    quantity: 4
                },
                {
                    code: "magical_cure",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    piece_of_obsidian: {
        name: "Piece of Obsidian",
        code: "piece_of_obsidian",
        level: 30,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    obsidian: {
        name: "Obsidian",
        code: "obsidian",
        level: 30,
        type: "resource",
        subtype: "bar",
        description: "",
        effects: [],
        craft: {
            skill: "mining",
            level: 30,
            items: [
                {
                    code: "piece_of_obsidian",
                    quantity: 4
                }
            ],
            quantity: 1
        }
    },
    cursed_book: {
        name: "Cursed Book",
        code: "cursed_book",
        level: 33,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    magic_stone: {
        name: "Magic Stone",
        code: "magic_stone",
        level: 33,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    malefic_cloth: {
        name: "Malefic Cloth",
        code: "malefic_cloth",
        level: 35,
        type: "resource",
        subtype: "mob",
        description: "",
        effects: [],
        craft: null
    },
    strange_ore: {
        name: "Strange Ore",
        code: "strange_ore",
        level: 35,
        type: "resource",
        subtype: "mining",
        description: "",
        effects: [],
        craft: null
    },
    diamond: {
        name: "Diamond",
        code: "diamond",
        level: 35,
        type: "resource",
        subtype: "mining",
        description: "",
        effects: [],
        craft: null
    },
    magic_wood: {
        name: "Magic Wood",
        code: "magic_wood",
        level: 35,
        type: "resource",
        subtype: "woodcutting",
        description: "",
        effects: [],
        craft: null
    },
    strangold: {
        name: "Strangold",
        code: "strangold",
        level: 35,
        type: "resource",
        subtype: "alloy",
        description: "",
        effects: [],
        craft: {
            skill: "mining",
            level: 35,
            items: [
                {
                    code: "gold_ore",
                    quantity: 3
                },
                {
                    code: "strange_ore",
                    quantity: 5
                }
            ],
            quantity: 1
        }
    },
    magical_plank: {
        name: "Magical Plank",
        code: "magical_plank",
        level: 35,
        type: "resource",
        subtype: "plank",
        description: "",
        effects: [],
        craft: {
            skill: "woodcutting",
            level: 35,
            items: [
                {
                    code: "dead_wood",
                    quantity: 3
                },
                {
                    code: "magic_wood",
                    quantity: 5
                }
            ],
            quantity: 1
        }
    },
    cursed_hat: {
        name: "Cursed Hat",
        code: "cursed_hat",
        level: 35,
        type: "helmet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 200
            },
            {
                name: "dmg_fire",
                value: 35
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 35,
            items: [
                {
                    code: "magical_plank",
                    quantity: 8
                },
                {
                    code: "malefic_cloth",
                    quantity: 2
                },
                {
                    code: "cursed_book",
                    quantity: 3
                },
                {
                    code: "owlbear_hair",
                    quantity: 4
                },
                {
                    code: "diamond",
                    quantity: 1
                },
                {
                    code: "magical_cure",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    strangold_helmet: {
        name: "Strangold Helmet",
        code: "strangold_helmet",
        level: 35,
        type: "helmet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 180
            },
            {
                name: "dmg_air",
                value: 24
            },
            {
                name: "dmg_water",
                value: 18
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 35,
            items: [
                {
                    code: "strangold",
                    quantity: 7
                },
                {
                    code: "demoniac_dust",
                    quantity: 4
                },
                {
                    code: "magic_stone",
                    quantity: 3
                },
                {
                    code: "lizard_skin",
                    quantity: 4
                },
                {
                    code: "magic_sap",
                    quantity: 1
                },
                {
                    code: "magical_cure",
                    quantity: 1
                }
            ],
            quantity: 1
        }
    },
    strangold_legs_armor: {
        name: "Strangold Legs Armor",
        code: "strangold_legs_armor",
        level: 35,
        type: "leg_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 150
            },
            {
                name: "haste",
                value: 5
            },
            {
                name: "dmg_air",
                value: 20
            },
            {
                name: "dmg_water",
                value: 17
            },
            {
                name: "res_water",
                value: 7
            },
            {
                name: "res_air",
                value: 7
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 35,
            items: [
                {
                    code: "strangold",
                    quantity: 8
                },
                {
                    code: "magical_cure",
                    quantity: 2
                },
                {
                    code: "cursed_book",
                    quantity: 3
                },
                {
                    code: "ogre_eye",
                    quantity: 4
                },
                {
                    code: "red_cloth",
                    quantity: 3
                }
            ],
            quantity: 1
        }
    },
    strangold_armor: {
        name: "Strangold Armor",
        code: "strangold_armor",
        level: 35,
        type: "body_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 150
            },
            {
                name: "dmg_air",
                value: 22
            },
            {
                name: "dmg_fire",
                value: 18
            },
            {
                name: "res_air",
                value: 6
            },
            {
                name: "res_fire",
                value: 6
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 35,
            items: [
                {
                    code: "strangold",
                    quantity: 8
                },
                {
                    code: "owlbear_hair",
                    quantity: 3
                },
                {
                    code: "magic_stone",
                    quantity: 3
                },
                {
                    code: "demon_horn",
                    quantity: 4
                },
                {
                    code: "magical_cure",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    malefic_armor: {
        name: "Malefic Armor",
        code: "malefic_armor",
        level: 35,
        type: "body_armor",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 170
            },
            {
                name: "dmg_fire",
                value: 30
            },
            {
                name: "res_fire",
                value: 10
            }
        ],
        craft: {
            skill: "gearcrafting",
            level: 35,
            items: [
                {
                    code: "magical_plank",
                    quantity: 8
                },
                {
                    code: "malefic_cloth",
                    quantity: 3
                },
                {
                    code: "owlbear_hair",
                    quantity: 3
                },
                {
                    code: "magic_stone",
                    quantity: 3
                },
                {
                    code: "magical_cure",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    magic_bow: {
        name: "Magic Bow",
        code: "magic_bow",
        level: 35,
        type: "weapon",
        subtype: "bow",
        description: "",
        effects: [
            {
                name: "attack_air",
                value: 65
            },
            {
                name: "attack_water",
                value: 15
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 35,
            items: [
                {
                    code: "magical_plank",
                    quantity: 7
                },
                {
                    code: "magic_stone",
                    quantity: 3
                },
                {
                    code: "lizard_skin",
                    quantity: 3
                },
                {
                    code: "wolf_hair",
                    quantity: 3
                },
                {
                    code: "magic_sap",
                    quantity: 1
                },
                {
                    code: "magical_cure",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    cursed_specter: {
        name: "Cursed Specter",
        code: "cursed_specter",
        level: 35,
        type: "weapon",
        subtype: "specter",
        description: "",
        effects: [
            {
                name: "attack_fire",
                value: 80
            }
        ],
        craft: {
            skill: "weaponcrafting",
            level: 35,
            items: [
                {
                    code: "magical_plank",
                    quantity: 8
                },
                {
                    code: "cursed_book",
                    quantity: 3
                },
                {
                    code: "magic_stone",
                    quantity: 3
                },
                {
                    code: "malefic_cloth",
                    quantity: 3
                },
                {
                    code: "diamond",
                    quantity: 1
                },
                {
                    code: "magical_cure",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    diamond_amulet: {
        name: "Diamond Amulet",
        code: "diamond_amulet",
        level: 35,
        type: "amulet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 100
            },
            {
                name: "dmg_water",
                value: 15
            },
            {
                name: "dmg_air",
                value: 15
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 35,
            items: [
                {
                    code: "magical_plank",
                    quantity: 8
                },
                {
                    code: "diamond",
                    quantity: 1
                },
                {
                    code: "obsidian",
                    quantity: 5
                },
                {
                    code: "cursed_book",
                    quantity: 4
                },
                {
                    code: "magical_cure",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    magic_stone_amulet: {
        name: "Magic Stone Amulet",
        code: "magic_stone_amulet",
        level: 35,
        type: "amulet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 100
            },
            {
                name: "dmg_fire",
                value: 20
            },
            {
                name: "dmg_air",
                value: 10
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 35,
            items: [
                {
                    code: "strangold",
                    quantity: 6
                },
                {
                    code: "malefic_cloth",
                    quantity: 2
                },
                {
                    code: "magic_stone",
                    quantity: 5
                },
                {
                    code: "lizard_skin",
                    quantity: 5
                },
                {
                    code: "magical_cure",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    greater_dreadful_amulet: {
        name: "Greater Dreadful Amulet",
        code: "greater_dreadful_amulet",
        level: 35,
        type: "amulet",
        subtype: "",
        description: "",
        effects: [
            {
                name: "hp",
                value: 100
            },
            {
                name: "dmg_earth",
                value: 20
            },
            {
                name: "dmg_water",
                value: 10
            }
        ],
        craft: {
            skill: "jewelrycrafting",
            level: 35,
            items: [
                {
                    code: "strangold",
                    quantity: 7
                },
                {
                    code: "diamond",
                    quantity: 1
                },
                {
                    code: "ogre_eye",
                    quantity: 5
                },
                {
                    code: "demon_horn",
                    quantity: 5
                },
                {
                    code: "magical_cure",
                    quantity: 2
                }
            ],
            quantity: 1
        }
    },
    magic_sap: {
        name: "Magic Sap",
        code: "magic_sap",
        level: 35,
        type: "resource",
        subtype: "woodcutting",
        description: "",
        effects: [],
        craft: null
    }
}
