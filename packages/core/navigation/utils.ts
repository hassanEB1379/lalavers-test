import { map, land, collection, art, store } from "@app/navigation/assets";
import { NavItem } from "@app/navigation/types";

export const navItems: NavItem[] = [
    {
        id: 1,
        label: "MAP",
        icon: map,
    },
    {
        id: 2,
        label: "LAND",
        icon: land,
    },
    {
        id: 3,
        label: "COLLECTION",
        icon: collection,
    },
    {
        id: 4,
        label: "NFTS",
        icon: art,
    },
    {
        id: 5,
        label: "MARKETPLACE",
        icon: store,
    },
];
