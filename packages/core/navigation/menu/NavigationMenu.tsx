import { navItems } from "@app/navigation/utils";
import { styles } from "@app/navigation/shared";
import Image from "next/image";

interface Props {
    upperCase?: boolean;
    showIcon?: boolean;
    classes?: {
        listItem?: string;
        icon?: string;
    };
}

export const NavigationMenu = ({
    classes,
    showIcon = false,
    upperCase = false,
}: Props) => {
    return (
        <nav>
            <ul>
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className={classes?.listItem ?? styles.listItem}
                    >
                        {showIcon && (
                            <Image alt={item.label} src={item.icon!} />
                        )}
                        {upperCase ? item.label.toUpperCase() : item.label}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
