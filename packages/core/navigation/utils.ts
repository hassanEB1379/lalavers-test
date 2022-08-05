import { map, land, collection, art, store } from "@app/navigation/assets";
import { ListItem } from "@app/navigation/types";

export const navItems: ListItem[] = [
    {
        id: 1,
        label: "Map",
        icon: map,
    },
    {
        id: 2,
        label: "Land",
        icon: land,
    },
    {
        id: 3,
        label: "Collection",
        icon: collection,
    },
    {
        id: 4,
        label: "NFTs",
        icon: art,
    },
    {
        id: 5,
        label: "Marketplace",
        icon: store,
    },
];

export const businessMenuItems: ListItem[] = [
    {
        id: 1,
        label: "About us",
    },
    {
        id: 2,
        label: "Contact us",
    },
    {
        id: 3,
        label: "Privacy Policy",
    },
    {
        id: 4,
        label: "Terms & Conditions",
    },
];
