import { IconButton } from "@app/button";
import { facebook, instagram, linkedin, twitter } from "@app/footer/assets";

import styles from "./ContactInfo.module.css";

export const ContactInfo = () => {
    return (
        <div className={styles.container}>
            <p>
                1200 Bay St. Suite # 202,
                <br /> Toronto, ON M4W 1J2
            </p>
            <p>1 855-573-7274</p>
            <p>dev@lalaverse.world</p>
            <div className={styles.socials}>
                <IconButton alt="facebook" icon={facebook} />
                <IconButton alt="instagram" icon={instagram} />
                <IconButton alt="twitter" icon={twitter} />
                <IconButton alt="linkedin" icon={linkedin} />
            </div>
        </div>
    );
};
