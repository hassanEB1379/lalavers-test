import { businessMenuItems } from "@app/navigation/utils";
import { styles } from "@app/navigation/shared";

export const BusinessMenu = () => {
    return (
        <ul>
            {businessMenuItems.map(item => (
                <li key={item.id} className={styles.listItem}>
                    {item.label}
                </li>
            ))}
        </ul>
    );
};
